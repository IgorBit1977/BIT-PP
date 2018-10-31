(function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
        this.getDataPerson = function(){
            var result = name + ',' +  surname;
            return result; 
        }
    }
    var person1 = new Person('Pera', 'Peric');
    console.log(person1);
    // console.log( 'person ' + person1.getDataPerson());
    function Seat(number, category) {
        this.number = (function(number){
            if(number == undefined) {
                number = Math.floor(Math.random()*(100-10)+10);
            }
            return number;
        })(number);
       
        this.category = (function(category){
            var finallCategory;
            if (category == undefined || category == "e") {
                var category = 'e';
                finallCategory = category.toUpperCase()
                return(finallCategory);
            } else {
                category = 'b';
                finnalCategory = category.toUpperCase()
                return (finnalCategory);
            }
        }) (category); 
        this.getDataSeat = function(){
            var seatData = this.number +"," + this.category;
            return seatData;
        }
            
        }
    
    var seat1 = new Seat()
    console.log('seat '+seat1.getDataSeat());

    function Passenger(person,seat){
        this.person = person;
        this.seat = seat;
        this.getData = function(){
            var passengerData;
            passengerData = person.getDataPerson() + "," + seat.getDataSeat();
            return passengerData;
            
        }

    };

    var passenger = new Passenger(person1, seat1);
    console.log(passenger.getData());


    function Flight(relation, date) {
        this.relation = relation;
        this.date = new Date(date) ;
        this.listOfPassingers = [];

        this.addPassenger = function(passenger){
            this.listOfPassingers.push(this.passenger);
            return this.listOfPassingers;
        }
    }
    var flight = new Flight('New York', new Date(2018-12-12));
    console.log(flight.addPassenger());

    function Airport(name){
        this.name='Nikola Tesla';
        this.listOfFlights = [];
    }
})()