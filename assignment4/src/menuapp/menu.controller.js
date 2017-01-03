(function(){
	'use strict';

	angular.module('MenuApp')
	.controller('MenuController', MenuController);

	MenuController.$inject=['categories'];

	function MenuController(categories) {
		var menu= this;
		menu.categories = categories.data;


		// menu.categoryShortName="L";
		// var promise =MenuDataService.getAllCategories();

		// 	 promise.then(function(response){
		// 	 	menu.categories=response.data;
		// 	 	console.log(menu.categories);
		// 	 })
		// 	 .catch(function(error){
		// 	 	console.log("something wrong");
		// 	 });
		// menu.items =function(){
		// 	var promise = MenuDataService.getItemsForCategory(menu.categoryShortName);
		// 	return promise;
		// }
	}


})();