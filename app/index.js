(function(){

  var app = angular.module('app', []);

  app.controller('StoreController', function(){
    this.products = [
      {
        name: 'lista01',
        price: 300.00,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },

      {
        name: 'lista02',
        price: 450.00,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },

      {
        name: 'lista03',
        price: 600.00,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },

      {
        name: 'lista04',
        price: 750.00,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      }
    ];

    this.total = 0;
    this.selectedProducts = [];

    this.selectProduct = function(product){
      var index = this.selectedProducts.indexOf(product);
      if (index == -1) {
        this.selectedProducts.push(product);
      } else {
        this.selectedProducts.splice(index, 1);
      }
      this.updateTotal();
    };

    this.isSelected = function(product){
      return this.selectedProducts.indexOf(product) != -1;
    };


    this.updateTotal = function(){
      this.total = 0
      for (var i = this.selectedProducts.length - 1; i >= 0; i--) {
        this.total += this.selectedProducts[i].price;
      };
    };
  });

})();
