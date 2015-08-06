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

(function() {

    function ChildListCallbackInterface(){

        // specify the preCallback function in super() so list callback
        // variables will be set before each change callback.
        weavecore.CallbackCollection.call(this,this._setCallbackVariables);

        this._lastNameAdded = null; // returned by public getter
        this._lastObjectAdded = null; // returned by public getter
        this._lastNameRemoved = null; // returned by public getter
        this._lastObjectRemoved = null; // returned by public getter

    }

    ChildListCallbackInterface.prototype = new weavecore.CallbackCollection();
    ChildListCallbackInterface.prototype.constructor = ChildListCallbackInterface;

    var p = ChildListCallbackInterface.prototype;
    /**
     * This function will set the list callback variables:
     *     lastNameAdded, lastObjectAdded, lastNameRemoved, lastObjectRemoved, childListChanged
     * @param name This is the name of the object that was just added or removed from the hash map.
     * @param objectAdded This is the object that was just added to the hash map.
     * @param objectRemoved This is the object that was just removed from the hash map.
     */
     p._setCallbackVariables = function (name, objectAdded, objectRemoved){
		this._lastNameAdded = objectAdded ? name : null;
		this._lastObjectAdded = objectAdded;
		this._lastNameRemoved = objectRemoved ? name : null;
		this._lastObjectRemoved = objectRemoved;
	}

	p.runCallbacks = function (name, objectAdded, objectRemoved){
        // remember previous values
        var _name = this._lastNameAdded || this._lastNameRemoved;
        var _added = this._lastObjectAdded;
        var _removed = this._lastObjectRemoved;

        this._runCallbacksImmediately(name, objectAdded, objectRemoved);

        // restore previous values (in case an external JavaScript popup caused us to interrupt something else)
        this._setCallbackVariables.call(this,_name, _added, _removed);
    }

	/**
     * This is the name of the object that was added prior to running callbacks.
     */
	p.__defineGetter__("lastNameAdded", function(){
        return this._lastNameAdded;
    });

    /**
     * This is the object that was added prior to running callbacks.
     */
	p.__defineGetter__("lastObjectAdded", function(){
        return this._lastObjectAdded;
    });

    /**
     * This is the name of the object that was removed prior to running callbacks.
     */
	p.__defineGetter__("lastNameRemoved", function(){
        return this._lastNameRemoved;
    });

    /**
     * This is the object that was removed prior to running callbacks.
     */
	p.__defineGetter__("lastObjectRemoved", function(){
        return this._lastObjectRemoved;
	});

    weavecore.ChildListCallbackInterface = ChildListCallbackInterface;

}());
