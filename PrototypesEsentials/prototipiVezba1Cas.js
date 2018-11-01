function Person(name, surname, email) { //konstruktor funkcija za 
    this.name = name;                   // kreiranje objekata
    this.surname = surname;
    this.email = email;
}

Person.prototype.print = function(){       // kreiramo prototip print objekta Person
    return this.name + " " + this.surname; // koji stampa ime i prezime objekta
}

var pera = new Person('Pera', 'Peric', 'p@gmail' ); //pravimo novi objekat Pera
console.log(pera.print());      // pozivamo metodu print prototipa Person za objekat Pera.


function Programmer(name, surname, email, favouriteLanguage) {
   // this.name = name;
   // this.surname = surname;       obicno bi pisali ovako, ali posto imamo ove podatke u 
   // this.email = email;           objektu Person, mozemo ih pozvati sa Person.call(this.....)
   Person.call(this, name, surname, email);
   this.favouriteLanguage = favouriteLanguage;
}

Programmer.prototype = Object.create(Person.prototype); //pravimo Programmer prototype i 
                                                // povezujemo ga sa Person.prototype.

Programmer.prototype.constructor = Programmer;//ukazujemo da je konstruktor Programmer prototipa
                                                // Programmer objekat.

Programmer.prototype.print = function(){
    var personPrototype = Object.getPrototypeOf(Programmer.prototype);
    var getInfo = personPrototype.print.call(this);
    return getInfo + ' ' + this.favouriteLanguage;
}

var laza = new Programmer('Laza','Lazic','l@gmail','JS');
console.log(laza.print());