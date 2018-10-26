//"use strict";
(function () {
    function Product(name, price, expirationDate) {
        this.productId = (function () {
            return Math.ceil(Math.random() * (99999 - 9999) + 9999);
        })();
        this.name = name;
        this.price = parseFloat(price.toFixed(2));
        this.expirationDate = expirationDate;
        this.getInfo = function () {
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
    var p3 = new Product('tunjevina', 300, new Date("2018-12-27"))
    // console.log(p2.getInfo());
    // console.log(p1.price);
    function ShopingBag() {
        this.allowToShopingList = [];
        this.addProduct = function (product) {
            if (product.expirationDate > new Date()) {
                this.allowToShopingList.push(product);
                console.log("lista:" + this.allowToShopingList);
            } else {
                console.log("Istekao rok trajanja");
            }
        };

        this.averagePrice = function () {
            var sumOfShoppingBag = 0;
            for (var i = 0; i < this.allowToShopingList.length; i++) {
                sumOfShoppingBag += this.allowToShopingList[i].price;
            }

            sumOfShoppingBag /= this.allowToShopingList.length;
            sumOfShoppingBag = parseFloat(sumOfShoppingBag.toFixed(3));
            return sumOfShoppingBag;
        };

        this.mostExpensive = function () {
            var najskupljiArtikl;
            najskupljiArtikl = this.allowToShopingList[0].price;

            for (var i = 0; i < this.allowToShopingList.length; i++) {
                if (najskupljiArtikl < this.allowToShopingList[i].price) {
                    najskupljiArtikl = this.allowToShopingList[i].price;
                }
            }
            return najskupljiArtikl;
        }
        this.calculateTotalPrice = function () {
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
    shopingBag.addProduct(p3);
    console.log(shopingBag);
    console.log("Prosecna cena proizvoda u korpi je: " + shopingBag.averagePrice() + " dinara");
    console.log("Cena najskupljeg pojedinacnog proizvoda u korpi je: " + shopingBag.mostExpensive() + " dinara");
    console.log("Ukupna vrednost proizvoda u korpi je: " + shopingBag.calculateTotalPrice() + " dinara");

    function PaymentCard(validityDate) {
        this.accBalance = (function () {
            var balance = 0;
            balance = Math.floor(Math.random() * (999999 - 1) + 1);
            balance = parseFloat(balance.toFixed(2));
            return balance;
        })();

        this.validityDate = validityDate;

        this.cardStatus = (function (accBalance, validityDate) {
           
            if (accBalance > 0 && validityDate > new Date()) {
                return true;
            } else {
                return false;
            }
        }) (this.accBalance, this.validityDate);
    }
    var card = new PaymentCard( new Date("2018-12-30") );
    

    var validityDate = new Date("2018-12-30");
    // var now = new Date();
    // console.log(validityDate > now);
    // console.log(this.accBalance)
    console.log(card.accBalance, card.cardStatus);
    function Payment(checkoutAndBuy){
        this.checkoutAndBuy = (function(totalSum, balance, cardStatus){
            if(balance > totalSum && cardStatus == true) {
                return "Purchase is successfull";
            } else {
                return "You need " + totalSum-balance;
            }
        })(this.totalSum, this.balance, this.cardStatus);
    }
    var payment = new Payment(checkoutAndBuy);
    
})();