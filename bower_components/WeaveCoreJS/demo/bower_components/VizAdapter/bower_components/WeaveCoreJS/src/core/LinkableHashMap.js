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
 * Allows dynamically creating instances of objects implementing ILinkableObject at runtime.
 * The session state is an Array of DynamicState objects.
 * @see DynamicState
 *
 * @author adufilie
 * @author sanjay1909
 */

(function () {
    function LinkableHashMap(typeRestriction) {
        if (typeRestriction === undefined) typeRestriction = null;

        weavecore.CallbackCollection.call(this);

        this._typeRestriction; // restricts the type of object that can be stored
        this._typeRestrictionClassName; // qualified class name of _typeRestriction

        if (typeRestriction !== null && typeRestriction !== undefined) {
            this._typeRestriction = typeRestriction;
            this._typeRestrictionClassName = typeRestriction.name;
        }

        Object.defineProperty(this, '_childListCallbacks', {
            value: WeaveAPI.SessionManager.registerLinkableChild(this, new weavecore.ChildListCallbackInterface())
        });
        Object.defineProperty(this, '_orderedNames', {
            value: []
        }); // an ordered list of names appearing in _nameToObjectMap
        Object.defineProperty(this, '_nameToObjectMap', {
            value: {}
        }); // maps an identifying name to an object

        Object.defineProperty(this, '_objectToNameMap', {
            value: new Map()
        }); // maps an object to an identifying name
        Object.defineProperty(this, '_nameIsLocked', {
            value: {}
        }); // maps an identifying name to a value of true if that name is locked.
        Object.defineProperty(this, '_previousNameMap', {
            value: {}
        }); // maps a previously used name to a value of true.  used when generating unique names.
    }

    LinkableHashMap.prototype = new weavecore.CallbackCollection();
    LinkableHashMap.prototype.constructor = LinkableHashMap;

    var p = LinkableHashMap.prototype;

    /**
     * The child type restriction, or null if there is none.
     */
    p.__defineGetter__("typeRestriction", function () {
        return this._typeRestriction;
    });


    /**
     * This is an interface for adding and removing callbacks that will get triggered immediately
     * when an object is added or removed.
     * @return An interface for adding callbacks that get triggered when the list of child objects changes.
     */
    p.__defineGetter__("childListCallbacks", function () {
        return this._childListCallbacks;
    });


    /**
     * This function returns an ordered list of names in the hash map.
     * @param filter If specified, names of objects that are not of this type will be filtered out.
     * @return A copy of the ordered list of names of objects contained in this LinkableHashMap.
     */
    p.getNames = function (filter) {
        // set default value for parameter
        if (filter === undefined) filter = null;
        var result = [];
        for (var i = 0; i < this._orderedNames.length; i++) {
            var name = this._orderedNames[i];
            if (filter === null || this._nameToObjectMap[name] instanceof filter)
                result.push(name);
        }
        return result;
    }

    /**
     * This function returns an ordered list of objects in the hash map.
     * @param filter If specified, objects that are not of this type will be filtered out.
     * @return An ordered Array of objects that correspond to the names returned by getNames(filter).
     */
    p.getObjects = function (filter) {
        // set default value for parameter
        if (filter === undefined) filter = null;
        var result = [];
        for (var i = 0; i < this._orderedNames.length; i++) {
            var name = this._orderedNames[i];
            var object = this._nameToObjectMap[name];
            if (filter === null || filter === undefined || object instanceof filter)
                result.push(object);
        }
        return result;
    }

    /**
     * This function gets the object associated with the specified name.
     * @param name The identifying name to associate with an object.
     * @return The object associated with the given name.
     */
    p.getObject = function (name) {
        return this._nameToObjectMap[name];
    }

    /**
     * This function gets the name of the specified object in the hash map.
     * @param object An object contained in this LinkableHashMap.
     * @return The name associated with the object, or null if the object was not found.
     */
    p.getName = function (object) {
        return this._objectToNameMap.get(object);
    }

    /**
     * This will reorder the names returned by getNames().
     * Any names appearing in newOrder that do not appear in getNames() will be ignored.
     * Callbacks will be called if the new name order differs from the old order.
     * @param newOrder The new desired ordering of names.
     */
    p.setNameOrder = function (newOrder) {
        var changeDetected = false;
        var name;
        var i;
        var originalNameCount = this._orderedNames.length; // remembers how many names existed before appending
        var haveSeen = {}; // to remember which names have been seen in newOrder
        // append each name in newOrder to the end of _orderedNames
        for (i = 0; i < newOrder.length; i++) {
            name = newOrder[i];
            // ignore bogus names and append each name only once.
            if (this._nameToObjectMap[name] === undefined || haveSeen[name] !== undefined)
                continue;
            haveSeen[name] = true; // remember that this name was appended to the end of the list
            this._orderedNames.push(name); // add this name to the end of the list
        }
        // Now compare the ordered appended items to the end of the original list.
        // If the order differs, set _nameOrderChanged to true.
        // Meanwhile, set old name entries to null so they will be removed in the next pass.
        var appendedCount = this._orderedNames.length - originalNameCount;
        for (i = 0; i < appendedCount; i++) {
            var newIndex = originalNameCount + i;
            var oldIndex = this._orderedNames.indexOf(this._orderedNames[newIndex]);
            if (newIndex - oldIndex !== appendedCount)
                changeDetected = true;
            this._orderedNames[oldIndex] = null;
        }
        // remove array items that have been set to null
        var out = 0;
        for (i = 0; i < this._orderedNames.length; i++)
            if (this._orderedNames[i] !== null && this._orderedNames[i] !== undefined)
                this._orderedNames[out++] = this._orderedNames[i];
        this._orderedNames.length = out;
        // if the name order changed, run child list callbacks
        if (changeDetected)
            this._childListCallbacks.runCallbacks(null, null, null);
    }

    /**
     * This function creates an object in the hash map if it doesn't already exist.
     * If there is an existing object associated with the specified name, it will be kept if it
     * is the specified type, or replaced with a new instance of the specified type if it is not.
     * @param name The identifying name of a new or existing object.
     * @param classDef The Class of the desired object type.
     * @param lockObject If this is true, the object will be locked in place under the specified name.
     * @return The object under the requested name of the requested type, or null if an error occurred.
     */
    p.requestObject = function (name, classDef, lockObject) {
        var className = classDef ? classDef.name : null;
        var result = this._initObjectByClassName.call(this, name, className, lockObject);
        return classDef ? result : null;
    }

    /**
     * This function will copy the session state of an ILinkableObject to a new object under the given name in this LinkableHashMap.
     * @param newName A name for the object to be initialized in this LinkableHashMap.
     * @param objectToCopy An object to copy the session state from.
     * @return The new object of the same type, or null if an error occurred.
     */
    p.requestObjectCopy = function (name, objectToCopy) {
        if (objectToCopy === null || objectToCopy === undefined) {
            this.removeObject(name);
            return null;
        }

        this.delayCallbacks(); // make sure callbacks only trigger once
        var classDef = objectToCopy.constructor; //ClassUtils.getClassDefinition(className);
        var sessionState = WeaveAPI.SessionManager.getSessionState(objectToCopy);
        var object = requestObject(name, classDef, false);
        if (object !== null && object !== undefined)
            WeaveAPI.SessionManager.setSessionState(object, sessionState);
        this.resumeCallbacks();

        return object;
    }

    /**
     * This function will rename an object by making a copy and removing the original.
     * @param oldName The name of an object to replace.
     * @param newName The new name to use for the copied object.
     * @return The copied object associated with the new name, or the original object if newName is the same as oldName.
     */
    p.renameObject = function (oldName, newName) {
        if (oldName !== newName) {
            this.delayCallbacks();

            // prepare a name order that will put the new name in the same place the old name was
            var newNameOrder = this._orderedNames.concat();
            var index = newNameOrder.indexOf(oldName);
            if (index >= 0)
                newNameOrder.splice(index, 1, newName);

            this.requestObjectCopy(newName, getObject(oldName));
            this.removeObject(oldName);
            this.setNameOrder(newNameOrder);

            this.resumeCallbacks();
        }
        return this.getObject(newName);
    }

    /**
     * If there is an existing object associated with the specified name, it will be kept if it
     * is the specified type, or replaced with a new instance of the specified type if it is not.
     * @param name The identifying name of a new or existing object.  If this is null, a new one will be generated.
     * @param className The qualified class name of the desired object type.
     * @param lockObject If this is set to true, lockObject() will be called on the given name.
     * @return The object associated with the given name, or null if an error occurred.
     */
    p._initObjectByClassName = function (name, className, lockObject) {
        if (className) {
            // if no name is specified, generate a unique one now.
            if (!name)
                name = generateUniqueName(className.split("::").pop());
            if (className !== "delete") // to-do Add Support for class Utils - delete is temp solution
            {
                // If this name is not associated with an object of the specified type,
                // associate the name with a new object of the specified type.
                console.log(className);
                var classDef = eval('weavecore.' + className); //hardcoded weavecore.
                var object = this._nameToObjectMap[name];
                if (!object || object.constructor !== classDef)
                    this._createAndSaveNewObject.call(this, name, classDef, lockObject);
                else if (lockObject)
                    this.lockObject(name);

            } else {
                this.removeObject(name);
            }
        } else {
            this.removeObject(name);
        }
        return this._nameToObjectMap[name];
    }

    /**
     * (private)
     * @param name The identifying name to associate with a new object.
     * @param classDef The Class definition used to instantiate a new object.
     */
    p._createAndSaveNewObject = function (name, classDef, lockObject) {
        if (this._nameIsLocked[name])
            return;

        // remove any object currently using this name
        this.removeObject(name);
        // create a new object
        var object = new classDef();
        // register the object as a child of this LinkableHashMap
        WeaveAPI.SessionManager.registerLinkableChild(this, object);
        // save the name-object mappings
        this._nameToObjectMap[name] = object;
        this._objectToNameMap.set(object, name);
        // add the name to the end of _orderedNames
        this._orderedNames.push(name);
        // remember that this name was used.
        this._previousNameMap[name] = true;

        if (lockObject)
            this.lockObject(name);

        // make sure the callback variables signal that the object was added
        this._childListCallbacks.runCallbacks(name, object, null);
    }

    /**
     * This function will lock an object in place for a given identifying name.
     * If there is no object using the specified name, this function will have no effect.
     * @param name The identifying name of an object to lock in place.
     */
    p.lockObject = function (name) {
        if (name !== null && name !== undefined && this._nameToObjectMap[name] !== null && this._nameToObjectMap[name] !== undefined)
            this._nameIsLocked[name] = true;
    }

    /**
     * This function will return true if the specified object was previously locked.
     * @param name The name of an object.
     */
    p.objectIsLocked = function (name) {
        return this._nameIsLocked[name] ? true : false;
    }

    /**
     * This function removes an object from the hash map.
     * @param name The identifying name of an object previously saved with setObject().
     */
    p.removeObject = function (name) {
        if (!name || this._nameIsLocked[name])
            return;

        var object = this._nameToObjectMap[name];
        if (object === null || object === undefined)
            return; // do nothing if the name isn't mapped to an object.

        //trace(LinkableHashMap, "removeObject",name,object);
        // remove name & associated object
        delete this._nameToObjectMap[name];
        this._objectToNameMap.delete(object);
        var index = this._orderedNames.indexOf(name);
        this._orderedNames.splice(index, 1);

        // make sure the callback variables signal that the object was removed
        this._childListCallbacks.runCallbacks(name, null, object);

        // dispose the object AFTER the callbacks know that the object was removed
        WeaveAPI.SessionManager.disposeObject(object);
    }

    /**
     * This function attempts to removes all objects from this LinkableHashMap.
     * Any objects that are locked will remain.
     */
    p.removeAllObjects = function () {
        this.delayCallbacks();
        var orderedNamesCopy = this._orderedNames.concat();
        for (var i = 0; i < orderedNamesCopy.length; i++) {
            this.removeObject(orderedNamesCopy[i]);
        }
        this.resumeCallbacks();
    }

    /**
     * This function removes all objects from this LinkableHashMap.
     * @inheritDoc
     */
    p.dispose = function dispose() {

        CallbackCollection.prototype.dispose.call(this);

        // first, remove all objects that aren't locked
        this.removeAllObjects();

        // remove all locked objects
        var orderedNamesCopy = this._orderedNames.concat();
        for (var i = 0; i < orderedNamesCopy.length; i++) {
            var name = orderedNamesCopy[i];
            this._nameIsLocked[name] = undefined; // make sure removeObject() will carry out its action
            this.removeObject(name);
        }
    }


    p.generateUniqueName = function (baseName) {
        var count = 1;
        var name = baseName;
        while (this._previousNameMap[name] !== undefined)
            name = baseName + (++count);
        return name;
    }

    /**
     * Override @see LinkableVaribale
     */
    p.getSessionState = function () {
        var result = new Array(this._orderedNames.length);
        for (var i = 0; i < this._orderedNames.length; i++) {
            var name = this._orderedNames[i];
            var object = this._nameToObjectMap[name];
            result[i] = weavecore.DynamicState.create(
                name,
                object.constructor.name,
                WeaveAPI.SessionManager.getSessionState(object)
            );
        }
        return result;
    }

    /**
     * Override @see LinkableVaribale
     */
    p.setSessionState = function (newStateArray, removeMissingDynamicObjects) {
        // special case - no change
        if (newStateArray === null || newStateArray === undefined)
            return;

        this.delayCallbacks();

        // first pass: make sure the types match and sessioned properties are instantiated.
        var i;
        var objectName;
        var className;
        var typedState;
        var remainingObjects = removeMissingDynamicObjects ? {} : null; // maps an objectName to a value of true
        var newObjects = {}; // maps an objectName to a value of true if the object is newly created as a result of setting the session state
        var newNameOrder = []; // the order the object names appear in the vector
        if (newStateArray !== null && newStateArray !== undefined) {
            // initialize all the objects before setting their session states because they may refer to each other.
            for (i = 0; i < newStateArray.length; i++) {
                typedState = newStateArray[i];
                if (!weavecore.DynamicState.isDynamicState(typedState))
                    continue;
                objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
                className = typedState[weavecore.DynamicState.CLASS_NAME];
                // ignore objects that do not have a name because they may not load the same way on different application instances.
                if (objectName === null || objectName === undefined)
                    continue;
                // if className is not specified, make no change
                if (className === null || className === undefined)
                    continue;
                // initialize object and remember if a new one was just created
                if (this._nameToObjectMap[objectName] !== this._initObjectByClassName.call(this, objectName, className))
                    newObjects[objectName] = true;
            }
            // second pass: copy the session state for each property that is defined.
            // Also remember the ordered list of names that appear in the session state.
            for (i = 0; i < newStateArray.length; i++) {
                typedState = newStateArray[i];
                if (typeof (typedState) === "string") {
                    objectName = typedState;
                    if (removeMissingDynamicObjects)
                        remainingObjects[objectName] = true;
                    newNameOrder.push(objectName);
                    continue;
                }

                if (!weavecore.DynamicState.isDynamicState(typedState))
                    continue;
                objectName = typedState[weavecore.DynamicState.OBJECT_NAME];
                if (objectName === null || objectName === undefined)
                    continue;
                var object = this._nameToObjectMap[objectName];
                if (object === null || object === undefined)
                    continue;
                // if object is newly created, we want to apply an absolute session state
                WeaveAPI.SessionManager.setSessionState(object, typedState[weavecore.DynamicState.SESSION_STATE], newObjects[objectName] || removeMissingDynamicObjects);
                if (removeMissingDynamicObjects)
                    remainingObjects[objectName] = true;
                newNameOrder.push(objectName);
            }
        }
        if (removeMissingDynamicObjects) {
            // third pass: remove objects based on the Boolean flags in remainingObjects.
            var orderedNamesCopy = this._orderedNames.concat();
            for (var j = 0; j < orderedNamesCopy.length; j++) {
                var objectName = torderedNamesCopy[j];
                if (remainingObjects[objectName] !== true) {
                    //trace(LinkableHashMap, "missing value: "+objectName);
                    this.removeObject(objectName);
                }
            }
        }
        // update name order AFTER objects have been added and removed.
        this.setNameOrder(newNameOrder);

        this.resumeCallbacks();
    }

    weavecore.LinkableHashMap = LinkableHashMap;
}());
