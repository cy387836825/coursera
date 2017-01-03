(function(){
	'use strict';

	angular.module('MenuApp')
	.controller('CategoryDetailController', CategoryDetailController);

	CategoryDetailController.$inject=['items'];

	function CategoryDetailController(items) {
		var categoryDetail= this;
		categoryDetail.items = items.data.menu_items;
		console.log("categoryDetail.items=",categoryDetail.items );

	}


})();