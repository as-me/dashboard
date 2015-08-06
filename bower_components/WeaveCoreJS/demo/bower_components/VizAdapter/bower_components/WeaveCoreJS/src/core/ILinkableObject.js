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

if(!this.weavecore)
    this.weavecore = {};

/**
 * An object that implements this empty interface has an associated CallbackCollection and session state,
 * accessible through the global functions in the WeaveAPI Object. In order for an ILinkableObject to
 * be created dynamically at runtime, it must not require any constructor parameters.
 *
 * @author adufilie
 * @author sanjay1909
 */
(function(){
    function ILinkableObject(){
    }

    weavecore.ILinkableObject = ILinkableObject;

}());
