(function () {
    'use strict';
    angular.module('NarrowItDownApp',[])
        .controller('NarrowItDownController',NarrowItDownController)
        .service('MenuSearchService',MenuSearchService)
        .constant('BasePath',"https://davids-restaurant.herokuapp.com")
        .directive('foundItems',FoundItems);

    function FoundItems() {
        var ddo ={
            templateUrl:'items.html'
            scope:{
                items:'<',
                onRemover:'&'
            }
        };
        return ddo
    }
    
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var menu = this;
        menu.found = [];

        menu.getMatchItems = function () {
            menu.found = [];
            var promise = MenuSearchService.getMatchItems(menu.searchTerm);

        }
    }
})()