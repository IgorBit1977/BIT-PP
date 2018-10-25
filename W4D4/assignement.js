// In your IDE of choice, create a new JavaScript file named shopping.js and make it so that all code written in the file follows strict mode.

// Create an anonymous immediately - invoking function that will hold the main execution of all program calls.Writing a simple command console.log(“Hi”) inside this function and running the code should output “Hi“ in the console.

// Create constructor functions with properties representing the following “things”:
// Product - product id(random number of 5 digits generated on every product creation), name, price(with 2 decimal places), expiration date
// ShoppingBag - a list of products(initially empty; function constructor does not have any input parameters)

// Add getInfo method to Product.It should return a formatted string containing product code(the first and last letter of the name together with the product id), name and price.
// "Banana" -> BA32784, Banana, 129.31

// Add addProduct method to ShoppingBag.It should receive a Product and add it to the product list.You can add a product to the list only if it has a valid expiration date.

// Add a method to ShoppingBag that calculates the average product price of products in your product list and prints out this value with the precision of three decimals.

// Add getMostExpensive method that finds the most expensive product and prints out its info.

// Add calculateTotalPrice method to ShoppingBag that calculates the total price of products in the shopping bag list.

// Create a constructor function with properties representing the following:

// PaymentCard - account balance(number with 2 decimal places), active or inactive status, valid until date

// Create checkoutAndBuy function which receives shopping bag and payment card and prints if the purchase is successful or not.Purchase is successful only if the amount on the card is greater or equal to the total price of products in the shopping bag.If there is not enough money, print out the amount that is missing to complete the purchase.

//"use strict";

(function() {
  function Product(name, price, expirationDate) {
    this.productId = (function() {
      return Math.floor(Math.random() * 100000);
    })();
    this.name = name;
    this.price = parseInt(price.toFixed(2));

    this.expirationDate = expirationDate;

    this.getInfo = function() {
      var letters = "";
      var fullProductInfo = "";
      var finalBarcode = "";
      letters = this.name.charAt(0) + this.name.charAt(this.name.length - 1);
      finalBarcode = letters.toUpperCase() + this.productId;
      fullProductInfo =
        finalBarcode +
        "," +
        this.name +
        "," +
        this.expirationDate.getFullYear() +
        "-" +
        this.expirationDate.getMonth();
      return fullProductInfo;
    };
  }
  var p1 = new Product("banana", 100, new Date("2018-12-30"));
  var p2 = new Product("mleko", 120, new Date("2018-12-12"));
  console.log(p2.getInfo());
  console.log(p1.price);

  function ShopingBag() {
    this.allowToShopingList = [];

    this.addProduct = function(product) {
      if (product.expirationDate > new Date()) {
        this.allowToShopingList.push(product);
        console.log("lista:" + this.allowToShopingList);
      } else {
        console.log("Istekao rok trajanja");
      }
    };
    this.averagePrice = function() {
      var sumOfShoppingBag = 0;
      for (var i = 0; i < this.allowToShopingList.length; i++) {
        sumOfShoppingBag += this.allowToShopingList[i].price;
      }
     
     return sumOfShoppingBag / this.allowToShopingList.length;
     
    };
    this.mostExpensive = function(){
        var najskupljiArtikl;
        najskupljiArtikl = this.allowToShopingList[0].price;
      
        for(var i = 0; i <this.allowToShopingList[i].length; i++) {
            if(najskupljiArtikl < this.allowToShopingList[i].price){
                najskupljiArtikl = this.allowToShopingList[i].price;
            }
            console.log('ok.');
        }
        return najskupljiArtikl;
    }
    this.calculateTotalPrice = function() {
        var totalSum = 0;
        for (var i = 0; i < this.allowToShopingList.length; i++) {
            totalSum += this.allowToShopingList[i].price;
          }
        return totalSum;
    }

  }

  var shopingBag = new ShopingBag();

  shopingBag.addProduct(p1);
  shopingBag.addProduct(p2);

  console.log(shopingBag);
  console.log(shopingBag.averagePrice());
  console.log(shopingBag.mostExpensive());
  console.log(shopingBag.calculateTotalPrice());
})();
