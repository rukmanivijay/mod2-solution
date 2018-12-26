(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ShoppingListBoughtController', ShoppingListBoughtController)
.controller('ShoppingListAlreadyBoughtController', ShoppingListAlreadyBoughtController)
.service('ShoppingListService', ShoppingListService);

ShoppingListBoughtController.$inject = ['ShoppingListService'];
function ShoppingListBoughtController(ShoppingListService) {
    var itemAdder = this;
    itemAdder.items = ShoppingListService.getShoppingList();
    itemAdder.addItem = function (item) {
      ShoppingListService.addItem(item);
      ShoppingListService.removeItem(item);
  }
}


ShoppingListAlreadyBoughtController.$inject = ['ShoppingListService'];
function ShoppingListAlreadyBoughtController(ShoppingListService) {
  var showList = this;

  showList.alreadyBoughtList = ShoppingListService.getAlreadyBoughtShoppingList();
}


function ShoppingListService() {
  var service = this;

  // List of shopping items
  var shoppingList = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
  ];
  var alreadyBoughtList = [];

  service.addItem = function (item) {
    alreadyBoughtList.push(item);
    console.log( "alreadyBoughtList" + alreadyBoughtList.length );
  };

  service.removeItem = function (item) {
    var index = shoppingList.indexOf(item);
    shoppingList.splice(index, 1);
    console.log( "shoppingList" + shoppingList.length );
  };

  service.getShoppingList = function () {
    return shoppingList;
  };

  service.getAlreadyBoughtShoppingList = function () {
    return alreadyBoughtList;
  };
}

})();

// (function () {
// 'use strict';
//
// angular.module('ShoppingListApp', [])
// .controller('ShoppingListAddController', ShoppingListAddController)
// .controller('ShoppingListShowController', ShoppingListShowController)
// .service('ShoppingListService', ShoppingListService);
//
// ShoppingListAddController.$inject = ['ShoppingListService'];
// function ShoppingListAddController(ShoppingListService) {
//   var itemAdder = this;
//
//   itemAdder.itemName = "";
//   itemAdder.itemQuantity = "";
//
//   itemAdder.addItem = function () {
//     ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
//   }
// }
//
//
// ShoppingListShowController.$inject = ['ShoppingListService'];
// function ShoppingListShowController(ShoppingListService) {
//   var showList = this;
//
//   showList.items = ShoppingListService.getItems();
//
//   showList.removeItem = function (itemIndex) {
//     ShoppingListService.removeItem(itemIndex);
//   };
// }
//
//
// function ShoppingListService() {
//   var service = this;
//
//   // List of shopping items
//   var items = [];
//
//   service.addItem = function (itemName, quantity) {
//     var item = {
//       name: itemName,
//       quantity: quantity
//     };
//     items.push(item);
//   };
//
//   service.removeItem = function (itemIdex) {
//     items.splice(itemIdex, 1);
//   };
//
//   service.getItems = function () {
//     return items;
//   };
// }
//
// })();
