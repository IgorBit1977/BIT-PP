var dataModule = (function () {

    var data = {
        movieList: [],
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
        data.movieList.push(movie);
    }

    function allMoviesLength(movie) {
        return data.sum += movie.length;

    }

    return {
        createMovie: createMovie,
        addMovie: addMovie,
        allMoviesLength: allMoviesLength
    }
})();

var uiModule = (function () {
    var $inputTitle = document.querySelector("#inputTitle");
    var $inputLength = document.querySelector("#inputLength");
    var $inputGenre = document.querySelector("#inputGenre");
    var $ul = document.querySelector("#movieListPrint");
    var $allLength = document.querySelector("#allMoviesLength");

    function collectFormInput() {
        var title = $inputTitle.value;
        var length = parseFloat($inputLength.value);
        var genre = $inputGenre.value;

        return {
            titleMovie: title,
            lengthMovie: length,
            genreMovie: genre
        }
    }

    function printMovies(data) {
        $ul.innerHTML += "<li>" + data + "</li>";
    }

    function printAllMovieLength(data) {
        $allLength.innerText = "All movies length: " + data;
    }

    return {
        printMovies: printMovies,
        collectFormInput: collectFormInput,
        printAllMovieLength: printAllMovieLength
    }

})();

var controler = (function (ui, data) {

    var $createMovieButton = document.querySelector("#createMovieButton");
    $createMovieButton.addEventListener('click', function () {

        var collectInput = ui.collectFormInput();
        var movie = data.createMovie(collectInput.titleMovie, collectInput.genreMovie, collectInput.lengthMovie);
        console.log(movie);
        data.addMovie(movie);
        ui.printMovies(movie.getData());
        ui.printAllMovieLength(data.allMoviesLength(movie));
    });

})(uiModule, dataModule);
