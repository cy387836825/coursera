(function(){
	'use strict';
	angular.module('public')
	.controller('MyInfoController', MyInfoController);

	MyInfoController.$inject=['MenuService','ApiPath'];
	function MyInfoController(MenuService, ApiPath){
      var myInfo=this;
      console.log(MenuService.user);
      myInfo.firstName= MenuService.user.firstName;
      myInfo.lastName = MenuService.user.lastName;
      myInfo.email = MenuService.user.email;
      myInfo.phone = MenuService.user.phone;
      myInfo.favoriteDish = MenuService.user.favoriteDish;
      myInfo.basePath = ApiPath;
      console.log("firstName:", myInfo.firstName);
	}
})();