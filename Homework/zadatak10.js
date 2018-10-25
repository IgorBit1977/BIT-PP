// 10. Write object representing a book, an animal and a person. Create constructor functions for same entities.

var book = {
    title: "Object-oriented JavaScript",
    author: "Ved Antani",
    co_author: 'Stoyan Stefanov',
    published: 2017,
    isUnderstandable: false
}

var cat = {
    name: 'Misko',
    breed: 'Russian Blue',
    color: "grey",
    isTrained: true,
    talk: function () {
        alert('Meow, meow!!')
    }
}

var person = {
    name: 'Petar',
    lastName: 'Petrovic',
    occupation: 'Actor',
    hair_color: 'grey',
    age: 36,
    birthday: function () {
        person.age++;
    }
}

function Book(title, author, published, isUnderstandable) {
    this.title = title;
    this.author = author;
    this.published = published;
    this.isUnderstandable = isUnderstandable;
}
var book1 = new Book('Na Drini cuprija', 'Ivo Andric', 1954, true);


function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.talk = function () {
        return 'Meow, Meow'
    };
}
var cat1 = new Cat('Melinda', 'Persijaner', 'White');

function Person(name, lastName, occupation, age) {
    this.name = name;
    this.lastName = lastName;
    this.occupation = occupation;
    this.age = age;
    this.birthday = function () {
        return this.age++;
    }
}
var otherPerson = new Person('Marko', 'Markovic', 'Novinar', 33);