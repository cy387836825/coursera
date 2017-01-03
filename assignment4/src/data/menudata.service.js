(function(){
	'use strict';

	angular.module('data')
	.service('MenuDataService', MenuDataService)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject =['$http', 'ApiBasePath'];
	
function MenuDataService($http, ApiBasePath) {
		var service=this;

		 // return a promise which is a result of using the $http service
		service.getAllCategories= function(){
			var response=$http({
				method: "GET",
				url:(ApiBasePath + "/categories.json"),
			});
			return response;

		};

		service.getItemsForCategory= function(categoryShortName){
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName),
			});
		};
	}
})();