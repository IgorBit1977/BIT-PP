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
