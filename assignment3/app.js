(function(){
	'use strict';

	angular.module('NarrowItDownApp',[])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService',MenuSearchService)
	.directive('foundItems', FoundItems)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
;


function FoundItems(){
	var ddo={
		restrict:'E',
		scope:{
			found:'<',
			onRemove: '&'
		},
		controller:FoundItemsDirectiveController,
		controllerAs:'FoundItems',
		bindToController:true,
		templateUrl:'foundItems.html'
	};
	return ddo;
}

function FoundItemsDirectiveController() {
}




NarrowItDownController.$inject =['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	var ctrl = this;
	ctrl.searchTerm="";
	ctrl.getMatchedMenuItems = function (){
		console.log(ctrl.searchTerm);
		var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
	    promise.then(function(response){
	    console.log(response.length);
		ctrl.found=response;
	});
	}
	ctrl.removeItem =function(itemIndex) {MenuSearchService.removeItem(itemIndex);} 	
}




MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		var service = this;
		var foundItems =[];
		service.getMatchedMenuItems = function(searchTerm) {
			 return $http({
			      method: "GET",
			      url: (ApiBasePath + "/menu_items.json")
			    }).then(function(result){
					foundItems =[];
					foundItems = result.data.menu_items.filter(function (item) {
						return item.description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
					},service);
					if(searchTerm===""){
						foundItems=[];
					}
			    return foundItems;
			    });
		}

		service.removeItem = function(itemIndex){
			foundItems.splice(itemIndex,1);
			console.log(foundItems.length);
		}

	}
})();
