var breakfast = {
  protein: "eggs",
  fats: "bacon",
  carbs: "bread",
  isFried: function() {
    return true;
  },
  isBoiled: function() {
    console.log("Yes");
  },
  isHealty: function(protein, fats, carbs) {
    if (protein == "eggs" && fats == "bacon" && carbs == "oats") {
      return "is healty";
    } else {
      return "not healty";
    }
  }
};

console.log(breakfast.protein);

console.log(breakfast.isHealty(breakfast.protein, breakfast.fats, breakfast.carbs));

function Breakfast(protein, fats, carbs){
    this.protein = protein;
    this.fats = fats;
    this.carbs = carbs;
    this.isFried = function(){
        return true;
    };
    this.isBoiled = function(){
        console.log("yes");
    };
    this.isHealty = function(protein, fats, carbs){
        if(protein == "eggs" && fats == "bacon" && carbs == "oats"){
            return "is healty";
        } else {
            return "not healty";
        }
    };
}

var breakfast2 = new Breakfast("pork", "butter", "rice");
var breakfast3 = new Breakfast("eggs", "bacon", "oats");
console.log(breakfast3.isHealty(breakfast3.protein, breakfast3.fats, breakfast3.carbs));
console.log(breakfast2.carbs);
console.log(breakfast2.isHealty(breakfast2.protein, breakfast2.fats, breakfast2.carbs));
breakfast2.isBoiled();
console.log(breakfast2.isFried());

//Week4


//type caffe-string
//strenth-number
//sugar-number
//milk-boolean

//addSugar
//printInfo

function Coffe (type, strength,sugar,milk){

  //var this= {};
  this.typeofCoffe=type;
  this.coffeStrength=strength;
  this.sugar=sugar;
  this.withMilk=milk;

  this.addSugar =function(){
    this.sugar ++;

  };
this.printInfoo=function(){
  console.log("our coffe is:" + this.typeOfCoffe)
//1 or 2-->weak
//3 or 4-->regular
//5 or 6 -->strong

switch (this.coffeStrength){
case 1:
case 2:
console.log("weak coffe.");
break;
case 3:
case 4:
console.log("Regular coffe");
break;
case 5:
case 6:
console.log("Strong coffe");
break;

}
// > 2 sweet coffee

if (this.sugar>2){
  console.log("Super sweet coffe");
}
else{
  console.log("Not sweet coffe");


  var milkMessage;
  milkMessage = (this.withMilk == true)? "with milk";
  console.log(milk.Message);

var ourCoffe = new Coffe('mocha',6,1,true);
ourCoffe.printInfoo();
ourCoffe.addSugar();

}
}
}

//





