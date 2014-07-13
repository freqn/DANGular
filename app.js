(function(){
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){
      this.products = gems;
    });

    var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: 'This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. ',
      canPurchase: true,
      soldOut: false,
    },
    {
      name: 'Pentagonal Gem',
      price: 5.95,
      description: 'This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. This is a test description. ',
      canPurchase: false,
      soldOut: false,
    }
  ];
})();
