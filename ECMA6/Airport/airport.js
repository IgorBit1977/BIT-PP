(function () {
    const totalPassenger = [1];
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;

        this.getData = function () {
            return (`${this.name} ${this.surname}`);
        };
    }
    function Seat(number, category) {
        number = number || Math.round(Math.random() * 90 + 10);
        this.number = number;
        category = category || "e";
        this.category = category.toUpperCase();
        this.getData = function () {
            return this.category;
        };
    }
    function Passenger(person, seat) {
        this.person = person;
        this.seat = seat;
        this.getData = function () {
            return (`${this.seat.getData()} ,${this.person.getData()}`);
        };
    }

    function Flight(relation, date) {
        this.relation = relation;
        this.date = date;
        this.listOfPassenger = [];
        this.addPassenger = function (passenger) {
            this.listOfPassenger.push(passenger);

        };
        this.getData = function () {
            const firstLine = (`${this.date.toLocaleDateString()} , ${this.relation}  \n`);
            let other = "";
            for (let i = 0; i < this.listOfPassenger.length; i++) {
                other += (`\t\t ${totalPassenger[totalPassenger.length - 1]}  , ${this.listOfPassenger[i].getData()} \n`);
                totalPassenger.push(totalPassenger[totalPassenger.length - 1] + 1);
            }
            return firstLine + other;
        };
    }
    function Airport() {
        this.name = "Nikola Tesla";
        this.listOfFlights = [];
        this.addFlight = function (flight) {
            this.listOfFlights.push(flight);
        };
        this.getData = function () {
            var totalPassengers = 0;
            for (let i = 0; i < this.listOfFlights.length; i++) {
                totalPassengers += this.listOfFlights[i].listOfPassenger.length;
            }
            var firstLine = "Airport: " + this.name + ", total passenger: " + totalPassengers + "\n";
            var other = "";
            for (var i = 0; i < this.listOfFlights.length; i++) {
                other += (`\t  ${this.listOfFlights[i].getData()}  \n`);
            }
            return firstLine + other;
        };
    }

    function createFlight(relation, date) {
        return new Flight(relation, date);
    }
    function createPassenger(name, surname, seatNumber, category) {
        var person = new Person(name, surname);
        var seat = new Seat(seatNumber, category);
        return new Passenger(person, seat);
    }

    const airportObj = new Airport();
    const flightOne = createFlight("Belgrade - New York", new Date("Oct 25 2017"));
    const flightTwo = createFlight("Barcelona - Belgrade", new Date("Nov 11 2017"));

    const passenger1 = createPassenger("John", "Snow", 1, "b");
    const passenger2 = createPassenger("Cersei", "Lannister", 2, "e");
    const passenger3 = createPassenger("Daenerys", "Targaryen", 14);
    const passenger4 = createPassenger("Tyrion", "Lannister");

    flightOne.addPassenger(passenger1);
    flightOne.addPassenger(passenger2);
    flightTwo.addPassenger(passenger3);
    flightTwo.addPassenger(passenger4);

    airportObj.addFlight(flightOne);
    airportObj.addFlight(flightTwo);

    console.log(airportObj.getData());

})();