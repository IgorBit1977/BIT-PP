(function () {

    function Person(name, surname) {
        this.name = name; //
        this.surname = surname;
        this.getData = function () {
            var returnData = '';
            returnData = this.name.charAt(0).toUpperCase() + ' ' + this.surname.charAt(0).toUpperCase();
            return returnData;
        }
    }
    //Creating persons
    var person1 = new Person('john', 'snow');
    var person1 = new Person('carsei', 'lanniester');
    var person1 = new Person('daenerys', 'targeryen');
    var person1 = new Person('tyrion', 'lanniester');

    function Seat(number, category) {
        this.number = (function (number) {
            if (number == undefined) {
                return Math.floor(Math.random() * (100 - 10) + 10);
            }
            else {
                return number;
            }

        })(number);

        this.category = (function (category) {
            if (this.category == 'b') {
                this.category = 'b';
            }
            if (this.category != undefined || this.category == 'e') {
                this.category = 'e';
            } else {
                this.category = 'e';
            }
            return category;
        })(category);

        this.getSeatData = function () {
            var seatData = '';
            return seatData = this.number + ' ' + this.category.toUpperCase();
            // this.getSeatData = function (person) {
            //     var seatData = '';
            //    return seatData = this.number + ' ' + this.category.toUpperCase() + ' ' + person.name + ' '+person.surname;
            // } KADA SE PROSLEDJUJE INSTANCA NEKOG OBJEKTA U FUNKCIJU DRUGOG OBJEKTA KAO PARAMETAR SE
            // PROSLEDJUJE NAZIV OBJEKTA ALI MALIM POCETNIM SLOVOM I U FUNKCIJI SE PISE IME OBJEKTA.SVOJSTVO
        }
    }
        //Creating seets
        var seat1 = new Seat(12, 'b');
        var seat2 = new Seat()

        function Passenger(person, seat) {
            this.person = person;
            this.seat = seat;

        }
        //Creating passengers
        var passenger1 = new Passenger(person1, seat1);
        var passenger2 = new Passenger(person2, seat2);

        function Flight(relation, date) {
            this.relation = relation;
            this.date = date;
            var listOfPassengers = [];
            this.addPassenger = function (passenger) {
                this.listOfPassengers.push(this.passenger);
            }
        }
    
    //Creating flights
    var flight1 = new Flight('Belgrade - New York', new Date(2018 - 12 - 22));
    var flight2 = new Flight('Barcelona - Belgrade', new Date(2018 - 10 - 18));

    function Airport(name) {
        this.name = 'Nikola Tesla';
        this.listOfFLights = [];
        this.addFlight = function(flight) {
            this.listOfFLights.push(this.flight);
        }
        this.getAirportData = function(airport, flight, person, ) {

        }
    }


})()