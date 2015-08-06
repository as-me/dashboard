/*
    Weave (Web-based Analysis and Visualization Environment)
    Copyright (C) 2008-2011 University of Massachusetts Lowell
    This file is a part of Weave.
    Weave is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License, Version 3,
    as published by the Free Software Foundation.
    Weave is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with Weave.  If not, see <http://www.gnu.org/licenses/>.
*/

if (!this.weavecore)
    this.weavecore = {};

/**
 * Session manager contains core functions for Weave related to session state.
 *
 * @author adufilie
 * @author sanjay1909
 */
(function () {
    function SessionManager() {
        this.childToParentMap = new Map();
        this.parentToChildMap = new Map();
        this.ownerToChildMap = new Map();
        this.childToOwnerMap = new Map();

        this.linkableObjectToCallbackCollectionMap = new Map();
        this.debugBusyTasks = false;

        Object.defineProperty(this, "_disposedObjectsMap", {
            value: new Map()
        });
        Object.defineProperty(this, "_treeCallbacks", {
            value: new weavecore.CallbackCollection()
        });
    }

    var p = SessionManager.prototype;
    /**
     * This function tells the SessionManager that the session state of the specified child should appear in the
     * session state of the specified parent, and the child should be disposed when the parent is disposed.
     *
     * There is one other requirement for the child session state to appear in the parent session state -- the child
     * must be accessible through a public variable of the parent or through an accessor function of the parent.
     *
     * This function will add callbacks to the sessioned children that cause the parent callbacks to run.
     *
     * If a callback function is given, the callback will be added to the child and cleaned up when the parent is disposed.
     *
     * Example usage:    const foo = registerLinkableChild(this, someLinkableNumber, handleFooChange);
     *
     * @param linkableParent A parent ILinkableObject that the child will be registered with.
     * @param linkableChild The child ILinkableObject to register as a child.
     * @param callback A callback with no parameters that will be added to the child that will run before the parent callbacks are triggered, or during the next ENTER_FRAME event if a grouped callback is used.
     * @param useGroupedCallback If this is true, addGroupedCallback() will be used instead of addImmediateCallback().
     * @return The linkableChild object that was passed to the function.
     */
    p.registerLinkableChild = function (linkableParent, linkableChild, callback, useGroupedCallback) {
        //set default values for parameters
        if (useGroupedCallback === undefined)
            useGroupedCallback = false;
        if (!linkableParent instanceof weavecore.ILinkableObject) {
            console.log("registerLinkableChild(): Parent does not inherit ILinkableObject.");
            return;
        }

        if (!linkableChild instanceof weavecore.ILinkableObject) {
            console.log("registerLinkableChild(): child does not inherit ILinkableObject.");
            return;
        }

        if (callback !== null && callback !== undefined) {
            var cc = this.getCallbackCollection.call(this, linkableChild);
            if (useGroupedCallback)
                cc.addGroupedCallback(linkableParent, callback);
            else
                cc.addImmediateCallback(linkableParent, callback);
        }

        // if the child doesn't have an owner yet, this parent is the owner of the child
        // and the child should be disposed when the parent is disposed.
        // registerDisposableChild() also initializes the required Dictionaries.
        this.registerDisposableChild(linkableParent, linkableChild);

        if (this.childToParentMap.get(linkableChild).get(linkableParent) === undefined) {
            // remember this child-parent relationship
            this.childToParentMap.get(linkableChild).set(linkableParent, true);
            this.parentToChildMap.get(linkableParent).set(linkableChild, true);

            // make child changes trigger parent callbacks
            var parentCC = this.getCallbackCollection(linkableParent);
            // set alwaysCallLast=true for triggering parent callbacks, so parent will be triggered after all the other child callbacks
            this.getCallbackCollection(linkableChild).addImmediateCallback(linkableParent, parentCC.triggerCallbacks.bind(parentCC), false); // parent-child relationship
        }

        this._treeCallbacks.triggerCallbacks();

        return linkableChild;
    }

    /**
     * This will register a child of a parent and cause the child to be disposed when the parent is disposed.
     * Use this function when a child object can be disposed but you do not want to link the callbacks.
     * The child will be disposed when the parent is disposed.
     *
     * Example usage:    const foo = registerDisposableChild(this, someLinkableNumber);
     *
     * @param disposableParent A parent disposable object that the child will be registered with.
     * @param disposableChild The disposable object to register as a child of the parent.
     * @return The linkableChild object that was passed to the function.
     */
    p.registerDisposableChild = function (disposableParent, disposableChild) {
        if (this.ownerToChildMap.get(disposableParent) === undefined) {
            this.ownerToChildMap.set(disposableParent, new Map());
            this.parentToChildMap.set(disposableParent, new Map());
        }
        // if this child has no owner yet...
        if (this.childToOwnerMap.get(disposableChild) === undefined) {
            // make this first parent the owner
            this.childToOwnerMap.set(disposableChild, disposableParent);
            this.ownerToChildMap.get(disposableParent).set(disposableChild, true);
            // initialize the parent dictionary for this child
            this.childToParentMap.set(disposableChild, new Map());
        }
        return disposableChild;
    }

    /**
     * Use this function with care.  This will remove child objects from the session state of a parent and
     * stop the child from triggering the parent callbacks.
     * @param parent A parent that the specified child objects were previously registered with.
     * @param child The child object to unregister from the parent.
     */
    p.unregisterLinkableChild = function (parent, child) {
        if (this.childToParentMap.get(child))
            this.childToParentMap.get(child).delete(parent);
        if (this.parentToChildMap.get(parent))
            this.parentToChildMap(parent).delete(child);
        this.getCallbackCollection(child).removeCallback(this.getCallbackCollection(parent).triggerCallbacks.bind(parent));

        this._treeCallbacks.triggerCallbacks();
    }


    /**
     * This function will add or remove child objects from the session state of a parent.  Use this function
     * with care because the child will no longer be "sessioned."  The child objects will continue to trigger the
     * callbacks of the parent object, but they will no longer be considered a part of the parent's session state.
     * If you are not careful, this will break certain functionalities that depend on the session state of the parent.
     * @param parent A parent that the specified child objects were previously registered with.
     * @param child The child object to remove from the session state of the parent.
     */
    p.excludeLinkableChildFromSessionState = function (parent, child) {
        if (parent === null || child === null || parent === undefined || child === undefined) {
            console.log("SessionManager.excludeLinkableChildFromSessionState(): Parameters cannot be null.");
            return;
        }
        if (this.childToParentMap.get(child) !== undefined && this.childToParentMap.get(child).get(parent))
            this.childToParentMap.get(child).set(parent, false);
        if (this.parentToChildMap.get(parent) !== undefined && this.parentToChildMap.get(parent).get(child))
            this.parentToChildMap.get(parent).set(child, false);
    }

    /**
     * @private
     * This function will return all the child objects that have been registered with a parent.
     * @param parent A parent object to get the registered children of.
     * @return An Array containing a list of linkable objects that have been registered as children of the specified parent.
     *         This list includes all children that have been registered, even those that do not appear in the session state.
     */
    p._getRegisteredChildren = function (parent) {
        var result = [];
        if (this.parentToChildMap.get(parent) !== undefined)
            for (var child in this.parentToChildMap.get(parent))
                result.push(child);
        return result;
    }

    /**
     * This function gets the owner of a linkable object.  The owner of an object is defined as its first registered parent.
     * @param child An ILinkableObject that was registered as a child of another ILinkableObject.
     * @return The owner of the child object (the first parent that was registered with the child), or null if the child has no owner.
     * @see #getLinkableDescendants()
     */
    p.getLinkableOwner = function (child) {
        return this.childToOwnerMap.get(child);
    }

    /**
     * @param root The linkable object to be placed at the root node of the tree.
     * @return A tree of nodes with the properties "label", "object", and "children"
     */
    p.getSessionStateTree = function (root, objectName, objectTypeFilter) {
        var treeItem = new weavecore.WeaveTreeItem();
        treeItem.label = objectName;
        treeItem.source = root;
        treeItem.children = SessionManager.prototype._getTreeItemChildren.bind(this);
        treeItem.data = objectTypeFilter;
        return treeItem;
    }

    p._getTreeItemChildren = function (treeItem) {
        var object = treeItem.source;
        var objectTypeFilter = treeItem.data;
        var children = [];
        var names = [];
        var childObject;
        var subtree;
        var ignoreList = new Map();
        if (object instanceof weavecore.LinkableHashMap) {
            names = object.getNames();
            var childObjects = object.getObjects();
            for (var i = 0; i < names.length; i++) {
                childObject = childObjects[i];
                if (this.childToParentMap.get(childObject) && this.childToParentMap.get(childObject).get(object)) {
                    if (ignoreList.get(childObject) !== undefined)
                        continue;
                    ignoreList.set(childObject, true);

                    subtree = this.getSessionStateTree(childObject, names[i], objectTypeFilter);
                    if (subtree !== null && subtree !== undefined)
                        children.push(subtree);
                }
            }
        } else {
            var deprecatedLookup = null;

            console.log("Linkable dynamic object not yet supported - only Linkablehashmap")
        }
        if (children.length === 0)
            children = null;
        if (objectTypeFilter === null || objectTypeFilter === undefined)
            return children;
        if ((children === null || children === undefined) && !(object instanceof objectTypeFilter))
            return null;
        return children;
    }

    /**
     * Adds a grouped callback that will be triggered when the session state tree changes.
     */
    p.addTreeCallback = function (relevantContext, groupedCallback, triggerCallbackNow) {
        if (triggerCallbackNow === undefined) triggerCallbackNow = false;
        this._treeCallbacks.addGroupedCallback(relevantContext, groupedCallback, triggerCallbackNow);
    }


    p.removeTreeCallback = function (groupedCallback) {
        this._treeCallbacks.removeCallback(groupedCallback);
    }

    /**
     * This function will copy the session state from one sessioned object to another.
     * If the two objects are of different types, the behavior of this function is undefined.
     * @param source A sessioned object to copy the session state from.
     * @param destination A sessioned object to copy the session state to.
     * @see #getSessionState()
     * @see #setSessionState()
     */
    p.copySessionState = function (source, destination) {
        var sessionState = this.getSessionState(source);
        this.setSessionState(destination, sessionState, true);
    }


    p._applyDiff = function (base, diff) {
        if (base === null || base === undefined || typeof (base) !== 'object')
            return diff;

        for (var key in diff)
            base[key] = this._applyDiff(base[key], diff[key]);

        return base;
    }

    /**
     * Sets the session state of an ILinkableObject.
     * @param linkableObject An object containing sessioned properties (sessioned objects may be nested).
     * @param newState An object containing the new values for sessioned properties in the sessioned object.
     * @param removeMissingDynamicObjects If true, this will remove any properties from an ILinkableCompositeObject that do not appear in the session state.
     * @see #getSessionState()
     */
    p.setSessionState = function (linkableObject, newState, removeMissingDynamicObjects) {
        if (removeMissingDynamicObjects === undefined) removeMissingDynamicObjects = true;
        if (linkableObject === null || linkableObject === undefined) {
            console.log("SessionManager.setSessionState(): linkableObject cannot be null.");
            return;
        }

        // special cases: for Explicit and Composite Session Object
        if (linkableObject instanceof weavecore.ILinkableObject && linkableObject.setSessionState) {
            var lv = linkableObject;
            if (removeMissingDynamicObjects === false && newState && newState.constructor.name === 'Object') {
                lv.setSessionState.call(lv, this._applyDiff.call(this, Object.create(lv.getSessionState.call(lv)), newState));
            } else {
                lv.setSessionState.call(lv, newState);
            }
            return;
        }
        // currently Implicit session state not supported

        if (newState === null || newState === undefined)
            return;


    }

    /**
     * Gets the session state of an ILinkableObject.
     * @param linkableObject An object containing sessioned properties (sessioned objects may be nested).
     * @return An object containing the values from the sessioned properties.
     * @see #setSessionState()
     */
    p.getSessionState = function (linkableObject) {
        if (linkableObject === null || linkableObject === undefined) {
            console.log("SessionManager.getSessionState(): linkableObject cannot be null.");
            return null;
        }

        var result = null;

        // special cases (explicit session state)
        if (linkableObject instanceof weavecore.ILinkableObject || linkableObject.getSessionState) {
            result = linkableObject.getSessionState();
        }

        // currently composite sessioned object sessionstate getting is not added

        return result;
    }

    /**
     * This function gets the ICallbackCollection associated with an ILinkableObject.
     * If there is no ICallbackCollection defined for the object, one will be created.
     * This ICallbackCollection is used for reporting changes in the session state
     * @param linkableObject An ILinkableObject to get the associated ICallbackCollection for.
     * @return The ICallbackCollection associated with the given object.
     */
    p.getCallbackCollection = function (linkableObject) {
        if (linkableObject === null || linkableObject === undefined)
            return null;
        if (linkableObject instanceof weavecore.CallbackCollection)
            return linkableObject;

        var objectCC = this.linkableObjectToCallbackCollectionMap.get(linkableObject);
        if (objectCC === null || objectCC === undefined) {
            objectCC = this.registerDisposableChild(linkableObject, new weavecore.CallbackCollection());
            if (weavecore.CallbackCollection.debug)
                objectCC._linkableObject = linkableObject;
            this.linkableObjectToCallbackCollectionMap.set(linkableObject, objectCC);
        }

        return objectCC;
    }


    /**
     * This function checks if an object has been disposed by the ISessionManager.
     * @param object An object to check.
     * @return A value of true if disposeObject() was called for the specified object.
     * @see #disposeObject()
     */
    p.objectWasDisposed = function (object) {
        if (object === null || object === undefined)
            return false;
        if (object instanceof weavecore.ILinkableObject) {
            var cc = this.getCallbackCollection(object);
            if (cc)
                return cc.wasDisposed;
        }
        return this._disposedObjectsMap.get(object) !== undefined;
    }


    /**
     * This function should be called when an ILinkableObject or IDisposableObject is no longer needed.
     * @param object An ILinkableObject or an IDisposableObject to clean up.
     * @see #objectWasDisposed()
     */
    p.disposeObject = function (object) {
        if (object !== null && object !== undefined && !this._disposedObjectsMap.get(object)) {
            this._disposedObjectsMap.set(object, true);

            // clean up pointers to busy tasks
            //disposeBusyTaskPointers(object as ILinkableObject);

            try {
                // if the object implements IDisposableObject, call its dispose() function now
                //if (object instanceof IDisposableObject)
                //	{
                //	object.dispose();
                //	}
                if (object.hasOwnProperty("dispose")) {
                    // call dispose() anyway if it exists, because it is common to forget to implement IDisposableObject.
                    object["dispose"]();
                }
            } catch (e) {
                console.log(e);
            }

            var linkableObject = object;
            if (linkableObject) {
                // dispose the callback collection corresponding to the object.
                // this removes all callbacks, including the one that triggers parent callbacks.
                var objectCC = this.getCallbackCollection(linkableObject);
                if (objectCC !== linkableObject)
                    this.disposeObject(objectCC);
            }

            // unregister from parents
            if (this.childToParentMap.get(object) !== undefined) {
                // remove the parent-to-child mappings
                for (var parent in this.childToParentMap.get(object))
                    if (this.parentToChildMap(parent) !== undefined)
                        this.parentToChildMap.get(parent).delete(object);
                    // remove child-to-parent mapping
                this.childToParentMap.delete(object);
            }

            // unregister from owner
            var owner = this.childToOwnerMap.get(object);
            if (owner !== null || owner !== undefined) {
                if (this.ownerToChildMap.get(owner) !== undefined)
                    this.ownerToChildMap.get(owner).delete(object);
                this.childToOwnerMap.delete(object);
            }

            // if the object is an ILinkableVariable, unlink it from all bindable properties that were previously linked
            //if (linkableObject instanceof LinkableVariable)
            //for (var bindableParent:* in _watcherMap[linkableObject])
            //for (var bindablePropertyName:String in _watcherMap[linkableObject][bindableParent])
            //unlinkBindableProperty(linkableObject as ILinkableVariable, bindableParent, bindablePropertyName);

            // unlink this object from all other linkable objects
            //for (var otherObject in linkFunctionCache.dictionary[linkableObject])
            //unlinkSessionState(linkableObject, otherObject as ILinkableObject);

            // dispose all registered children that this object owns
            var children = this.ownerToChildMap.get(object);
            if (children !== null && children !== undefined) {
                // clear the pointers to the child dictionaries for this object
                this.ownerToChildMap.delete(object);
                this.parentToChildMap.delete(object);
                // dispose the children this object owned
                for (var child in children)
                    this.disposeObject(child);
            }

            this._treeCallbacks.triggerCallbacks();
        }
    }


    /**
     * This function computes the diff of two session states.
     * @param oldState The source session state.
     * @param newState The destination session state.
     * @return A patch that generates the destination session state when applied to the source session state, or undefined if the two states are equivalent.
     * @see #combineDiff()
     */
    p.computeDiff = function (oldState, newState) {
        var type = typeof (oldState); // the type of null is 'object'
        var diffValue;

        // special case if types differ
        if (typeof (newState) !== type)
            return newState;


        if (type === 'number') {
            if (isNaN(oldState) && isNaN(newState))
                return undefined; // no diff

            if (oldState !== newState)
                return newState;

            return undefined; // no diff
        } else if (oldState === null || oldState === undefined || newState === null || newState === undefined || type !== 'object') // other primitive value
        {
            if (oldState !== newState) // no type-casting
                return newState;

            return undefined; // no diff
        } else if (oldState.constructor === Array && newState.constructor === Array) {
            // If neither is a dynamic state array, don't compare them as such.
            if (!weavecore.DynamicState.isDynamicStateArray(oldState) && !weavecore.DynamicState.isDynamicStateArray(newState)) {
                if (weavecore.StandardLib.compare(oldState, newState) === 0)
                    return undefined; // no diff
                return newState;
            }

            // create an array of new DynamicState objects for all new names followed by missing old names
            var i;
            var typedState;
            var changeDetected = false;

            // create oldLookup
            var oldLookup = {};
            var objectName;
            var className;
            var sessionState;
            for (i = 0; i < oldState.length; i++) {
                // assume everthing is typed session state
                //note: there is no error checking here for typedState
                typedState = oldState[i];
                objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
                // use '' instead of null to avoid "null"
                oldLookup[objectName || ''] = typedState;
            }
            if (oldState.length !== newState.length)
                changeDetected = true;

            // create new Array with new DynamicState objects
            var result = [];
            for (i = 0; i < newState.length; i++) {
                // assume everthing is typed session state
                //note: there is no error checking here for typedState
                typedState = newState[i];
                objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
                className = typedState[weavecore.DynamicState.CLASS_NAME];
                sessionState = typedState[weavecore.DynamicState.SESSION_STATE];
                var oldTypedState = oldLookup[objectName || ''];
                delete oldLookup[objectName || '']; // remove it from the lookup because it's already been handled

                // If the object specified in newState does not exist in oldState, we don't need to do anything further.
                // If the class is the same as before, then we can save a diff instead of the entire session state.
                // If the class changed, we can't save only a diff -- we need to keep the entire session state.
                // Replace the sessionState in the new DynamicState object with the diff.
                if (oldTypedState !== undefined && oldTypedState[weavecore.DynamicState.CLASS_NAME] === className) {
                    className = null; // no change
                    diffValue = this.computeDiff(oldTypedState[weavecore.DynamicState.SESSION_STATE], sessionState);
                    if (diffValue === undefined) {
                        // Since the class name is the same and the session state is the same,
                        // we only need to specify that this name is still present.
                        result.push(objectName);

                        if (!changeDetected && oldState[i][weavecore.DynamicState.OBJECT_NAME] != objectName)
                            changeDetected = true;

                        continue;
                    }
                    sessionState = diffValue;
                }

                // save in new array and remove from lookup
                result.push(weavecore.DynamicState.create(objectName || null, className, sessionState)); // convert empty string to null
                changeDetected = true;
            }

            // Anything remaining in the lookup does not appear in newState.
            // Add DynamicState entries with an invalid className ("delete") to convey that each of these objects should be removed.
            for (objectName in oldLookup) {
                result.push(weavecore.DynamicState.create(objectName || null, SessionManager.DIFF_DELETE)); // convert empty string to null
                changeDetected = true;
            }

            if (changeDetected)
                return result;

            return undefined; // no diff
        } else // nested object
        {
            var diff = undefined; // start with no diff

            // find old properties that changed value
            for (var oldName in oldState) {
                diffValue = computeDiff(oldState[oldName], newState[oldName]);
                if (diffValue !== undefined) {
                    if (!diff)
                        diff = {};
                    diff[oldName] = diffValue;
                }
            }

            // find new properties
            for (var newName in newState) {
                if (oldState[newName] === undefined) {
                    if (!diff)
                        diff = {};
                    diff[newName] = newState[newName]; // TODO: same object pointer.. potential problem?
                }
            }

            return diff;
        }
    }

    /**
     * This modifies an existing diff to include an additional diff.
     * @param baseDiff The base diff which will be modified to include an additional diff.
     * @param diffToAdd The diff to add to the base diff.  This diff will not be modified.
     * @return The modified baseDiff, or a new diff object if baseDiff is a primitive value.
     * @see #computeDiff()
     */
    p.combineDiff = function (baseDiff, diffToAdd) {
        var baseType = typeof (baseDiff); // the type of null is 'object'
        var diffType = typeof (diffToAdd);

        // special cases
        if (baseDiff === null || baseDiff === undefined || diffToAdd === null || diffToAdd === undefined || baseType !== diffType || baseType !== 'object') {
            if (diffType === 'object') // not a primitive, so make a copy
                baseDiff = Object.create(diffToAdd).__proto__; // temp solution need to find better solution as its array it will work fine
            else
                baseDiff = diffToAdd;
        } else if (Array.isArray(baseDiff) && Array.isArray(diffToAdd)) {
            var i;

            // If either of the arrays look like DynamicState arrays, treat as such
            if (weavecore.DynamicState.isDynamicStateArray(baseDiff) || weavecore.DynamicState.isDynamicStateArray(diffToAdd)) {
                var typedState;
                var objectName;

                // create lookup: objectName -> old diff entry
                // temporarily turn baseDiff into an Array of object names
                var baseLookup = {};
                for (i = 0; i < baseDiff.length; i++) {
                    typedState = baseDiff[i];
                    // note: no error checking for typedState
                    if (typeof typedState === 'string' || typedState instanceof String || typedState === null || typedState === undefined)
                        objectName = typedState;
                    else
                        objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
                    baseLookup[objectName] = typedState;
                    // temporarily turn baseDiff into an Array of object names
                    baseDiff[i] = objectName;
                }
                // apply each typedState diff appearing in diffToAdd
                for (i = 0; i < diffToAdd.length; i++) {
                    typedState = diffToAdd[i];
                    // note: no error checking for typedState
                    if (typeof typedState === 'string' || typedState instanceof String || typedState === null || typedState === undefined)
                        objectName = typedState;
                    else
                        objectName = typedState[weavecore.DynamicState.OBJECT_NAME];

                    // adjust names list so this name appears at the end
                    if (baseLookup.hasOwnProperty(objectName)) {
                        for (var j = baseDiff.indexOf(objectName); j < baseDiff.length - 1; j++)
                            baseDiff[j] = baseDiff[j + 1];
                        baseDiff[baseDiff.length - 1] = objectName;
                    } else {
                        baseDiff.push(objectName);
                    }

                    // apply diff
                    var oldTypedState = baseLookup[objectName];
                    if (typeof oldTypedState === 'string' || oldTypedState instanceof String || oldTypedState === null || oldTypedState === undefined) {
                        if (typeof typedState === 'string' || typedState instanceof String || typedState === null || typedState === undefined)
                            baseLookup[objectName] = typedState; // avoid unnecessary function call overhead
                        else
                            baseLookup[objectName] = Object.create(typedState).__proto__; // Temp solution for Array Copy
                    } else if (!(typeof typedState === 'string' || typedState instanceof String || typedState === null || typedState === undefined)) // update dynamic state
                    {
                        var className = typedState[weavecore.DynamicState.CLASS_NAME];
                        // if new className is different and not null, start with a fresh typedState diff
                        if (className && className != oldTypedState[weavecore.DynamicState.CLASS_NAME]) {
                            baseLookup[objectName] = Object.create(typedState).__proto__; // Temp solution for Array Copy;
                        } else // className hasn't changed, so combine the diffs
                        {
                            oldTypedState[weavecore.DynamicState.SESSION_STATE] = this.combineDiff(oldTypedState[weavecore.DynamicState.SESSION_STATE], typedState[weavecore.DynamicState.SESSION_STATE]);
                        }
                    }
                }
                // change baseDiff back from names to typed states
                for (i = 0; i < baseDiff.length; i++)
                    baseDiff[i] = baseLookup[baseDiff[i]];
            } else // not typed session state
            {
                // overwrite old Array with new Array's values
                i = baseDiff.length = diffToAdd.length;
                while (i--) {
                    var value = diffToAdd[i];
                    if (value === null || value === undefined || typeof value !== 'object')
                        baseDiff[i] = value; // avoid function call overhead
                    else
                        baseDiff[i] = this.combineDiff(baseDiff[i], value);
                }
            }
        } else // nested object
        {
            for (var newName in diffToAdd)
                baseDiff[newName] = this.combineDiff(baseDiff[newName], diffToAdd[newName]);
        }

        return baseDiff;
    }

    Object.defineProperty(SessionManager, 'DIFF_DELETE', {
        value: "delete"
    });

    weavecore.SessionManager = SessionManager;

}());
