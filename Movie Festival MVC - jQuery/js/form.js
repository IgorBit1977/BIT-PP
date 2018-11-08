
var createMovieButton = document.querySelector("#createMovieButton");

$createMovieButton.addEventListener('click', createMovie);

function createMovie() {
    var inputTitle = document.querySelector("#inputTitle").value;
    var inputLength = document.querySelector("#inputLength").value;
    var inputGenre = document.querySelector("#inputGenre").value;

    var inputLength = parseFloat(inputLength);
    var genre = new Genre(inputGenre);
    var movie = new Movie(inputTitle, genre, inputLength);
    addMovie(movie);

    var ul = document.querySelector("#movieListPrint");
    ul.innerHTML += "<li>" + movie.getData() + "</li>";

    document.querySelector("#inputTitle").value = "";
    document.querySelector("#inputLength").value = "";
    document.querySelector("#inputGenre").value = "Chose genre...";

    var movies = getMovies();
    var allMovie = allMoviesLength(movies);

    document.querySelector("#allMoviesLength").innerText =
        "All movies length: " + allMovie;

    var select = document.querySelector("#selectOfMovies");
    select.innerHTML += "<option>" + movie.getData() + "</option>";


};

var createProgramButton = document.querySelector("#createProgramButton");

createProgramButton.onclick = function () {
    var inputDate = document.querySelector("#inputDate").value;

    var program = new Program(inputDate);
    addProgram(program);

    var programs = getPrograms();
    updateSelectAndList(programs)

    document.querySelector("#inputDate").value = "";

};

var addMovieToProgramButton = document.querySelector("#addMovieToProgramButton");

addMovieToProgramButton.onclick = function () {
    var inputFilm = document.querySelector("#selectOfMovies").value;
    var inputProgram = document.querySelector("#selectOfPrograms").value;

    var movies = getMovies();
    var movie;
    for (var i = 0; i < movies.length; i++) {
        if (inputFilm == movies[i].getData()) {
            movie = movies[i];
            break;
        }
    }

    var programs = getPrograms();
    var program;
    for (var i = 0; i < programs.length; i++) {
        if (inputProgram == programs[i].print()) {
            program = programs[i];
            break;
        }
    }

    program.addMovie(movie);
    updateSelectAndList(programs);

    document.querySelector("#selectOfMovies").value = "-";

};
