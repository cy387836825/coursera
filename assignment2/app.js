(function () {
	angular.module('ShoppingListCheckOff',[])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListService", ShoppingListService);


ToBuyController.$inject =['ShoppingListService'];
function ToBuyController(ShoppingListService){
	var toBuyList = this;
	toBuyList.items = ShoppingListService.getToBuyItems();
	

	toBuyList.buyItem= function(itemIndex) {
		try{ShoppingListService.addItem(itemIndex);
		ShoppingListService.removeItem(itemIndex);}
		catch(error){
			toBuyList.message = error.message;
		}
	}
}


AlreadyBoughtController.$inject=['ShoppingListService']
function AlreadyBoughtController(ShoppingListService){
	var boughtList=this;
	boughtList.items = ShoppingListService.getBoughtItems();
	boughtList.isBoughtListEmpty = function(){
		return boughtList.items.length === 0;
};
}
function ShoppingListService() {
	var service = this;
	var toBuyItems = [
				{name:"Cookie",
				quantity:"1"},
				{name:"Cookie",
				quantity:"2"},
				{name:"Cookie",
				quantity:"3"},
				{name:"Cookie",
				quantity:"4"},
				{name:"Cookie",
				quantity:"5"},
				{name:"Cookie",
				quantity:"6"}];
	var boughtItems =[];
	var boughtListMessage = "Nothing bought yet.";

	service.addItem = function(itemIndex){
		boughtItems.push(toBuyItems[itemIndex]);
		// boughtListMessage = undefined;

	}
	service.removeItem = function(itemIndex){

       toBuyItems.splice(itemIndex, 1);
       if (toBuyItems.length ===0) {
       	throw new Error("Everything is bought!");
       }
		
	}

	service.getToBuyItems =function (){
		return toBuyItems;
	}
	service.getBoughtItems = function () {
		return boughtItems;
	}

}




})();