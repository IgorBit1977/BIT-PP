//1. Write a function that prints all numbers between two provided numbers. 

function between(from, to) {
    
    for(var i = from; i <= to; i++ ){
        console.log(i)
    }

}
between(1,10);

//2 . Write a function that checks if the number is positive or negative.

function isPositive(num) {
    if (num > 0) {
        return "Number: " + num + " is positive"
    } else {
        return "Number" + num + " is negative"
    }
}
    var note = isPositive(-21);
    console.log(note);

// 3. Write a function that outputs array of every second character from the provided string.
      // In case that string is not provided outputs array empty array. 
var string = "This is one basic string";
function everySecond(input) {
    newArray = [];
    for (var i = 0; i < string.length; i += 2) {
        var character = string[i];
        newArray += character;
    }

    if (input == "") {
        return (newArray = []);
    }
    return (newArray);
}
var result = everySecond(string);
console.log(result);

// 4. Write a function that checks if the first and the last element in the array or string are the same.

var array = [0,1,2,3,4,5,6,7,8,0];
function firstEqualsLast(input) {
    if (input[0] == input[input.length - 1]) {
        return "first element: " + input[0] + " and last element: " + input[input.length - 1] + " are equal";
    } else {
        return "first element: " + input[0] + " and last element: " + input[input.length - 1] + " are not equal";
    }
}
var result = firstEqualsLast(array);
console.log(result);

// 5. Write a function that checks if the two arrays are equal.
//   Assume that arrays are equal if they have all the same elements.
//   Also assume that two compared arrays have the same number of elements.

var arrayOne = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var arrayTwo = [1, 0, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function compareArrays(firstArray, secondArray) {
    var i;
    for (i = 0; i < firstArray.length; i++) {
        if (firstArray[i] != secondArray[i]) {
            return false;
        } else {
            return true;
        }
    }
}
var result = compareArrays(arrayOne, arrayTwo);
console.log(result);

    // 6. Write a function that reverses a word or sentence. Cover cases if sentence is not provided.

    var sentence = "I am a super student";
    function reverseSentence(input){
        var j;
        obrnutiString = '';
        if(input == ''){
            console.log("You must write some sentence!")
        }
        for(j = input.length-1; j >= 0; j--){
            var character = input[j];
            obrnutiString += character;
        }
        return obrnutiString;
    }
    var result = reverseSentence(sentence);
    console.log(result);

    // 7. Write a function that prints out number of input arguments of the function.

function howManyArguments(one, two) {
    var i;
    var sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum = arguments[i];
    }
    return sum;
}
var result = howManyArguments(1, 2, 3, 4, 5);
console.log(result);


    // 8. Write a function that sets some global variable to the new value.

        var global = 2017;
        function changeGlobalWithinFunction(){
                global = 2018;
                return global;
        }
        var result = changeGlobalWithinFunction();
        console.log(result);
        console.log(global);

    // 9. Write a function that replaces all white spaces from string with dash (-). 

        var string = "How a lovely evening";
        function replaceAllWhites(input) {
            for (var i = 0; i < string.length; i++) {
                var character = string[i];
                if (character == " ") {
                    character = "-";
                
                }
                console.log(character);
            }
        }
        replaceAllWhites(string);

        // 10. Write object representing a book, an animal and a person. Create constructor functions for same entities.

            var book = {
                title: "Object-oriented JavaScript",
                author: "Ved Antani",
                co_author: 'Stoyan Stefanov',
                published:2017,
                isUnderstandable: false
            }

            var cat = {
                name:'Misko',
                breed: 'Russian Blue',
                color:"grey",
                isTrained: true,
                talk: function(){
                    alert('Meow, meow!!') 
                }
            }

            var person = {
                name:'Petar',
                lastName: 'Petrovic',
                occupation: 'Actor',
                hair_color:'grey',
                age: 36,
                birthday: function(){
                    person.age++;
                }
            }

            function Book(title,author,published,isUnderstandable){
                this.title = title;
                this.author = author;
                this.published = published;
                this.isUnderstandable = isUnderstandable;
            }
            var book1 = new Book('Na Drini cuprija', 'Ivo Andric', 1954, true);
            

            function Cat (name, breed, color){
                this.name = name;
                this.breed = breed;
                this.color = color;
                this.talk = function(){
                    return 'Meow, Meow'
                };
            }
            var cat1 = new Cat('Melinda', 'Persijaner', 'White');
            
                function Person (name,lastName, occupation,age){
                    this.name= name;
                    this.lastName = lastName;
                    this.occupation = occupation;
                    this.age = age;
                    this.birthday = function(){
                        return this.age++;
                    }
                }
                var otherPerson = new Person('Marko', 'Markovic', 'Novinar', 33);