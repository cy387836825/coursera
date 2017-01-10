(function(){
	'use strict';
	angular.module('public').
	controller('SignUpController', SignUpController);

    SignUpController.$inject=['MenuService'];
	function SignUpController(MenuService){
		var signUp=this;
		signUp.shortNameError=false;
		signUp.submitted=false;
		signUp.checkShortName = function(favoriteDish) {
			MenuService.getItemsShortName(favoriteDish)
			.then(function(response){
				signUp.shortNameError=false;
				signUp.submitted=true;
				MenuService.addUser(signUp.firstName, signUp.lastName, signUp.email, signUp.phone, response.data);
				console.log("favorite dish is", response.data);
			})
			.catch(function(error){
				signUp.shortNameError=true;
			})
			};
		// signUp.submit = function(favoriteDish){
		// 	signUp.checkShortName(favoriteDish);
		// 	if (signUp.shortNameError !=true) {
		// 		MenuService.addUser(signUp.firstName, signUp.lastName, signUp.email, signUp.phone, signUp.favoriteDish);
		// 		signUp.submitted=true;
		// 		console.log(MenuService.addUser(signUp.firstName, signUp.lastName, signUp.email, signUp.phone, signUp.favoriteDish));
		// 	}else{

		// 	}
			
		// }
		};
})();


