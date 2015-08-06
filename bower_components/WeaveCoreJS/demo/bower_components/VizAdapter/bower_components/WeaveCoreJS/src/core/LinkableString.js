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
 * This is a LinkableVariable which limits its session state to string values.
 * @author adufilie
 * @author sanjay1909
 */
(function() {
    function LinkableString(defaultValue,verifier, defaultValueTriggersCallbacks ){
        // set default values for Parameters
        if(defaultValue === undefined) defaultValue = null;
        if(verifier === undefined) verifier = null;
        if(defaultValueTriggersCallbacks === undefined) defaultValueTriggersCallbacks = true;

        weavecore.LinkableVariable.call(this,"string",verifier,defaultValue,defaultValueTriggersCallbacks );
    }

    LinkableString.prototype = new weavecore.LinkableVariable();
    LinkableString.prototype.constructor = LinkableBoolean;

    var p = LinkableString.prototype;

    p.__defineGetter__("value", function(){
        return this._sessionStateExternal;
    });
    p.__defineSetter__("value", function(val){
        this.setSessionState(val);
    });

    p.setSessionState = function(val){
        if (val !== null)
				val = String(val);
        weavecore.LinkableVariable.prototype.setSessionState.call(this, val);
    }

    weavecore.LinkableBoolean = LinkableBoolean;

}());
