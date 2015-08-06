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
 * This is a LinkableVariable which limits its session state to Boolean values.
 * @author adufilie
 * @author sanjay1909
 */
(function() {
    function LinkableBoolean(defaultValue,verifier, defaultValueTriggersCallbacks ){
        // set default values for Parameters
        if(verifier === undefined) verifier = null;
        if(defaultValueTriggersCallbacks === undefined) defaultValueTriggersCallbacks = true;

        weavecore.LinkableVariable.call(this,"boolean",verifier,defaultValue,defaultValueTriggersCallbacks );
    }

    LinkableBoolean.prototype = new weavecore.LinkableVariable();
    LinkableBoolean.prototype.constructor = LinkableBoolean;

    var p = LinkableBoolean.prototype;

    p.__defineGetter__("value", function(){
        return this._sessionStateExternal;
    });
    p.__defineSetter__("value", function(val){
        this.setSessionState(val);
    });

    p.setSessionState = function(val){
        if(typeof(val) === "string"){
            val = weavecore.ObjectUtil.stringCompare(val, "true", true) === 0;
        }
        weavecore.LinkableVariable.prototype.setSessionState.call(this, val ? true : false);
    }

    weavecore.LinkableBoolean = LinkableBoolean;

}());
