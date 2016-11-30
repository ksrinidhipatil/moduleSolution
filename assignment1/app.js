(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('LunchCheckController', LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.items = "";
        $scope.output = function () {
            var value = rateFood($scope.items);
            $scope.outputValue = value;
        }
    }
    function rateFood(string) {
        var message = "";
        var dishes = string.split(',');
        if (string.length == 0) message = "Please enter a valid dish!";
        else if (dishes.length > 0 && dishes.length <= 3){
           for(var i = 0; i < dishes.length ; i++){
               if(dishes[i].length > 0){
                    message = "Enjoy!"
           }
           else{
                   message = "invalid entry!";
                   break;
               }
        }
        }
        else if (dishes.length > 3){
            message = "Too Much!";
        }

        return message;
    }

})();