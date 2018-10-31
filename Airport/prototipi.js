var obj = {
  x: 10,
  y: 5
};
console.log(obj);

var obj = Object.create();
obj.x = 10;
obj.y = 5;

Object.defineProperty(obj, "x", {
  value: 10,
  writable: true
});

var obj = Object.create({ z: 20 });
obj.x = 10;
obj.y = 5;
console.log(obj);
obj.x;
obj.y;
console.log(obj.z);

obj.z = 30;

// dodali smo svojstvo nasem obj objektu, a proto z je ostalo z = 20;
console.log(obj.z);

// obj._proto_.z = 100; // pristupamo proto objeektu i menjamo z
// obj._proto_.c = 200; // pristupamo proto objektu i dodajemo mu svojstvo c;

// console.log(obj._proto_.c);

Object.getPrototypeOf(obj);
console.log(Object.getPrototypeOf(obj));

/////////////////////////////////////////////////////////////////////////////////////////

///objekti koje mi napravimo

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

Person.prototype.print = function() {
  return this.name + " " + this.surname; // metoda print() koju dele svi objekti i zato je iz
}; // pojedinacnih objekata izmestamo u prototip

Person.prototype.email = "test@gmail.com";

var pera = new Person("pera", "peric");
var zika = new Person("zika", "zikic");
var laza = new Person("laza", "lazic");
// console.log(pera);
// console.log(pera.email);
console.log(pera.print());

var personPrototype = Object.getPrototypeOf(pera);
Object.getPrototypeOf(personPrototype).message = "Hello!";

console.log(laza.message);

var obj = Object.create({ y: 20 });
obj.x = 10;
console.log(obj.message);

function Programmer(name, surname, email, favouriteLanguage) {
//   this.name = name;
//   this.surname = surname;
//   this.email = email;
Person.call(this, name, surname, email);

  this.favouriteLanguage = favouriteLanguage;
}

Programmer.prototype = Object.create(Person.prototype);
Programmer.prototype.constructor = Programmer;

Programmer.prototype.print = function() {
    //ime, preime + programski jezik

    var personPrototype = Object.getPrototypeOf(Programmer.prototype);
    var nameSurname = personPrototype.print.call(this);

    return nameSurname + " " + this.favouriteLanguage;
}
var laza = new Programmer('laza','lazic','l@gmail','JS');
console.log(laza.print());
