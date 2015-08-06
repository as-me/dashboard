 var app, deps;

 deps = ['ui.slider', 'angularBootstrapNavTree'];

 app = angular.module('sliderDemoApp', deps);

 var sc;

 function createNewSession(name) {
     var oo = WeaveAPI.globalHashMap.requestObject(name, weavecore.LinkableNumber, false);
     oo.value = 0;

     return oo;
 }

 app.controller('sliderDemoCtrl', function ($scope, $log, $timeout) {
     sc = $scope;


     $scope.safeApply = function (fn) {
         var phase = this.$root.$$phase;
         if (phase == '$apply' || phase == '$digest') {
             if (fn && (typeof (fn) === 'function')) {
                 fn();
             }
         } else {
             this.$apply(fn);
         }
     };

     // Slider options with event handlers
     $scope.labeledslider = {
         'options': {
             start: function (event, ui) {
                 $log.info('Event: Slider start');
             },
             stop: function (event, ui) {
                 $log.info('Event: Slider stop');
                 handleSliderValueChange(ui);
             }
         }
     }

     $scope.log = new weavecore.SessionStateLog(WeaveAPI.globalHashMap);
     $scope.testVar = createNewSession("testNum") // this will cause issue as in session new object is created, tthe reference is changed
     $scope.testVar.value = 0;

     // $scope.log.clearHistory();

     var cc = WeaveAPI.SessionManager.getCallbackCollection($scope.log);
     cc.addGroupedCallback({}, updateSliderValues, true);

     function updateSliderValues() {
         $scope.sliderPosition = $scope.log._undoHistory.length;
         // since this function is called programatically in next frame in next frame ,
         // and not called by UI event , we need to manually trigger digest cycle.
         console.log('UpdateSliderValues called')
         $scope.safeApply();
     }



     function handleSliderValueChange(ui) {
         var delta = ui.value - $scope.log.undoHistory.length;
         if (delta < 0)
             $scope.log.undo(-delta);
         else
             $scope.log.redo(delta);

         $scope.$apply();

     }

     var tree;
     $scope.my_tree_handler = function (branch) {
         var _ref;
         $scope.output = "You selected: " + branch.label;
         if ((_ref = branch.data) != null ? _ref.description : void 0) {
             return $scope.output += '(' + branch.data.description + ')';
         }
     };

     $scope.my_tree = tree = {};

     WeaveAPI.SessionManager.addTreeCallback({}, updateSessionNavigator);
     updateSessionNavigator();




     // $scope.my_tree.collapse_all();

     function updateSessionNavigator() {

         var tr = WeaveAPI.SessionManager.getSessionStateTree(WeaveAPI.globalHashMap, 'weave');
         console.log(tr);
         var newTr = {};
         TestItem(tr, newTr);
         console.log(newTr);
         $scope.my_data = [newTr];
         /* $scope.my_data = [{ label: 'hee', children: [{ label: 'inner', children: null }, { label: 'inner 2', children: null }] }]*/
         //$scope.$apply();
     }

     function TestItem(tree, newtree) {
         newtree.label = tree.label;
         if (tree.children && tree.children.constructor === Function) {
             newtree.children = tree.children = tree.children(tree);
         };
         if (tree.children && tree.children.constructor === Array) {
             newtree.children = []
             for (var i = 0; i < tree.children.length; i++) {
                 var newTr = {};
                 TestItem(tree.children[i], newTr);
                 newtree.children[i] = newTr;
             }
         };
     }









 });
