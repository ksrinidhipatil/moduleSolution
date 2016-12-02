(function () {
    'use strict';

    angular.module('ShoppingListCheckOff',[])
        .controller('ToBuyShoppingController',ToBuyShoppingController)
        .controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
        .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

        ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
        AlreadyBoughtShoppingController.$inject =['ShoppingListCheckOffService'];

        function ToBuyShoppingController(ShoppingListCheckOffService) {
            var ToBuyAlias = this;

            ToBuyAlias.listOfItems = ShoppingListCheckOffService.getToBuyList();
            ToBuyAlias.buyItem = function (index) {
                ShoppingListCheckOffService.buyItem(index);
            };
        };

        function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
            var AlreadyBoughtAlias = this;
            AlreadyBoughtAlias.itemsBought = ShoppingListCheckOffService.getBoughtList();
        };


        function ShoppingListCheckOffService() {
            var service = this;
            var toBuyList =  [
                { name: "cookies", quantity: 10 },
                { name: "milk", quantity: 1 },
                { name: "chips", quantity: 5},
                { name: "sugary drinks", quantity: 10 },
                { name: "peptin bezmo", quantity: 2 }
            ];
            var toBought = [];

            service.getToBuyList = function () {
                return toBuyList;
            };

            service.getBoughtList = function () {
                return toBought;
            };

            service.buyItem = function (itemIndex) {
                var item = toBuyList[itemIndex];
                toBuyList.splice(itemIndex,1);
                toBought.push(item)
            };


        }
}());