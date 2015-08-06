(function (angular) {
    'use strict';

    var app = angular.module('puzzleApp', ['slidingPuzzle', 'ui.slider']);




    var sc;

    app.controller('sliderDemoCtrl', function ($scope, $log) {
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

        $scope.log = weavecore.log = new weavecore.SessionStateLog(WeaveAPI.globalHashMap);
        $scope.testVar = WeaveAPI.globalHashMap.requestObject('testVar', weavecore.LinkableNumber, false);
        $scope.testVar.value = 0;
        $scope.log.clearHistory();

        var cc = WeaveAPI.SessionManager.getCallbackCollection($scope.log);
        cc.addGroupedCallback({}, updateSliderValues, true);

        function updateSliderValues() {
            $scope.sliderPosition = $scope.log._undoHistory.length;
            // since this function is called programatically in next frame in next frame ,
            // and not called by UI event , we need to manually trigger digest cycle.
            $scope.$apply();
        }



        function handleSliderValueChange(ui) {
            var delta = ui.value - $scope.log.undoHistory.length;
            if (delta < 0)
                $scope.log.undo(-delta);
            else
                $scope.log.redo(delta);

            $scope.$apply();

        }

    });






})(window.angular);
