(function () {

    function Country(name, odds, continent) {
        this.name = name;
        this.odds = odds;
        this.continent = continent;
        this.firstTwoCountryLetters = '';

    }

    function Person(name, surname, dateOfBirth) {
        this.name = name;
        this.surname = surname;
        this.dateOfBirth = dateOfBirth;
        this.getPersonData = function () {
            var finalPersonData = '';
            return finalPersonData = this.name + ', ' + this.surname + ', ' + this.dateOfBirth;
        }
    }

    function Player(person, betAmount, country, ) {
        this.person = person;
        this.betAmount = betAmount;
        this.country = country;
        this.getPlayerData = function (country, address, person) {
            var oddsTimesBet = 0;
            oddsTimesBet = country.odds * this.betAmount;
            var finalPlayerData = '';
            finalPlayerData = country.finalCountryData + ', ' + this.oddsTimesBet + ', ' + person.name + ', ' + person.surname + ', ' + ', ' + person.dateOfBirth;
        }
    }

    function Address(country, city, postalCode, street, number) {
        this.country = country;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.number = number;
        this.getAddressData = function () {
            var finalCountryData = '';
            finalCountryData = this.country.slice(0, 2).toUpperCase();
            var finalAddress = '';
            return finalAddress = this.street + ', ' + this.number + ', ' + this.postalCode + ', ' + this.city + ', ' + finalCountryData;

            //var sum of all bets at that address
        }
    }

    function BettingPlace(address) {
        this.address = address;
        this.listOfPlayers = [];
        this.addPlayerTo
        this.bettingPlaceData = function (address) {
            var finalBettingPlaceData = '';
            finalBettingPlaceData = address.street + ', ' + address.postalCode + '. ' + address.city + ', ' + address.sumOfAllBetsAtThatAddress;
        }
    }

    function BettingHouse(competition, listOfBettingPlaces, numberOfPlayers) {
        this.competition = competition;
        this.listOfBettingPlaces = [];
        this.numberOfPlayers = numberOfPlayers;
    }

    function Continent(asia, europe, northAmeric) {
        this.name =
    }

    var continent1 = new Continent()
})();