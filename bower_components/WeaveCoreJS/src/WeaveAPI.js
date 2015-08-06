createjs.Ticker.setFPS(50);
//createjs.Ticker.

// constructor:

if (typeof window === 'undefined') {
    this.WeaveAPI = this.WeaveAPI || {};
} else {
    window.WeaveAPI = window.WeaveAPI || {};
}

//Object.defineProperty(WeaveAPI, '_sessionManager', {
// value: new SessionManager()
//});
//Object.defineProperty(WeaveAPI, '_stageUtils', {
//value: new weave.core.StageUtils()
//});

Object.defineProperty(WeaveAPI, 'TASK_PRIORITY_IMMEDIATE', {
    value: 0
});

Object.defineProperty(WeaveAPI, 'TASK_PRIORITY_HIGH', {
    value: 1
});

Object.defineProperty(WeaveAPI, 'TASK_PRIORITY_NORMAL', {
    value: 2
});

Object.defineProperty(WeaveAPI, 'TASK_PRIORITY_LOW', {
    value: 3
});

/* WeaveAPI.__defineGetter__("SessionManager", function(){
     return WeaveAPI._sessionManager;
 });

 WeaveAPI.__defineGetter__("StageUtils", function(){
     return WeaveAPI._stageUtils;
 });*/
WeaveAPI.SessionManager = new weavecore.SessionManager();
WeaveAPI.globalHashMap = new weavecore.LinkableHashMap();
