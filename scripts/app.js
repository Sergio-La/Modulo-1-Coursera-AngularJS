(function (){

    'use strict';

    angular.module('lunchApp',[])
    .controller('LunchControler',LunchControler);

    LunchControler.$inject = ['$scope'];
    
    function LunchControler ($scope){
        $scope.lunch = "";
        $scope.message = "";

        $scope.lunchMessage = function () {
            var longString = $scope.lunch.split(',').length;
            if (longString <= 3){
                $scope.message = "Enjoy!";
            } else if (longString > 3){
                $scope.message ="Too much!";
            } 
        }
    }

})();