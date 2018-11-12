
const dataModel = (function () {
    const data = {
        movies: []
    }

    class Movie {
        constructor(title, genre, length) {
            this.title = title;
            this.genre = genre;
            this.length = length;
        }
        getData() {
            return `${this.title}, duration: ${this.length} min, genre: ${this.genre}`;
        }
    }
    let createMovieData = ({ title, genre, length }) => new Movie(title, genre, length);

    let addMovieToList = (movie) => {
        data.movies.push(movie);
    }

    return {
        createMovieData,
        addMovieToList
    }
})();

const uiModel = (function () {

    const $title = document.querySelector("#title");
    const $movieLength = document.querySelector("#movieLength");
    const $genre = document.querySelector("#genre");

    const collectFormInput = () => {
        const parseFloatMovieLength = Number.parseFloat($movie.value);
        const movieTitle = $title.value.trim();
        const movieLength = parseFloatMovieLength;
        const movieGenre = $genre.value;

        return {
            movieTitle,
            movieLength,
            movieGenre
        }
    }

})();

const controler = (function (data, ui) {
    const $createMovie = document.querySelector('#createMovie');
    $createMovie.addEventListener('click', () => {

        const inputData = ui.collectFormInput();
        const movie = data.createMovieData(inputData);

        data.addMovieToList(movie);
        ui.displeyMovieData(movie.getData());

    });


})();