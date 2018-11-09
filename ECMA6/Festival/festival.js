(function () {

    function Genre(name) {
        this.name = name;

        this.getData = function () {
            return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
        };
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;

        this.getData = function () {
            return (`${this.title} , ${this.length}min, ${genre.getData()}`);
        };
    }
    function Program(date) {
        this.date = new Date(date);
        this.listOfMoivies = [];
        this.totalNumbersOfMovies = 0;
        this.addMovie = function (newMovie) {
            this.listOfMoivies.push(newMovie);
            this.totalNumbersOfMovies++;

        }
        this.getData = function () {
            var allData = '';
            var movieLength = 0;

            for (let i = 0; i < this.listOfMoivies.length; i++) {
                allData += this.listOfMoivies[i].getData() + '\n';
                movieLength += this.listOfMoivies[i].length;
            }

            return (`${this.date.toDateString()}, ${movieLength},
${allData}`);
        }
    }
    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];

        this.totalNumbersOfMovies = function () {
            let sum = 0;
            for (let i = 0; i < this.listOfPrograms.length; i++) {
                sum += this.listOfPrograms[i].totalNumbersOfMovies;
            }
            return sum;
        };




        this.addProgram = function (newProgram) {
            this.listOfPrograms.push(newProgram);
        }


        this.getData = function () {
            let allFilmsInProgram = (`Weekend festival has ${this.totalNumbersOfMovies()} movies \n`);
            for (let i = 0; i < this.listOfPrograms.length; i++) {
                allFilmsInProgram += (`${this.listOfPrograms[i].getData()} \n`);
            }
            return allFilmsInProgram;
        }
    }





    const genre = new Genre("Action");

    const terminator = new Movie("Terminator", genre, 150);
    const lesi = new Movie("Lesi se vraca kuci", genre, 250);
    const forest = new Movie("forest", genre, 150);
    const misa = new Movie("misa", genre, 250);

    const program1 = new Program('2018,11,25');
    const program2 = new Program('2018,11,26');

    const festival = new Festival('Kan');


    program1.addMovie(terminator);
    program1.addMovie(lesi);

    program2.addMovie(forest);
    program2.addMovie(misa);

    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log(festival.getData());



})();