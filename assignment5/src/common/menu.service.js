(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  service.user= new Object();
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getItemsShortName = function(shortName){
      return $http({
        method: "GET",
        url: (ApiPath + "/menu_items/"+shortName+".json"),
      });  };
  service.addUser = function(firstName, lastName, email, phone, favoriteDish){
    
    service.user.firstName=firstName;
    service.user.lastName=lastName;
    service.user.email=email;
    service.user.phone=phone;
    service.user.favoriteDish=favoriteDish;
    return service.user;
  }

}


})();
