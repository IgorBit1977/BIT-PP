var dataModule = (function () {

    var storage = {
        movieList: [],
        listOfPrograms: [],
        sum: 0
    }
    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }
    Movie.prototype.getData = function () {
      
        return (this.title + ", duration: " + this.length + "min" + ", genre: " + this.genre);
    };

    function createMovie(title, genre, length) {
        return new Movie(title, genre, length);
    }

    function addMovie(movie) {
        storage.movieList.push(movie);
    }

    function allMoviesLength(movie) {
       return storage.sum += movie.length;

    }


    // Program

    function Program(date) {
        this.date = date;
        this.movies = [];
    }

    Program.prototype.getData = function() {
          var dd = this.date.getDate();
          var mm = this.date.getMonth() + 1;
          var yyyy = this.date.getFullYear();
          if (dd < 10) {
            dd = "0" + dd;
          }
          if (mm < 10) {
            mm = "0" + mm;
          }
          return dd + "." + mm + "." + yyyy;
        };
    
    function createProgram(date) {
        var program =  new Program(date);
        return program;
    }
    
    function addProgram(program) {
        storage.listOfPrograms.push(program);

    }
    
    return {
        createMovie: createMovie,
        addMovie: addMovie,
        allMoviesLength: allMoviesLength,
        createProgram: createProgram,
        addProgram: addProgram
    }
})();