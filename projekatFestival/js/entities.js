function Genre(name) {
    this.name = name;
}
Genre.prototype.getData = function () {
    return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
}

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

}
Movie.prototype.getData = function () {
    return this.title + ", " + this.length + "min" + ", " + this.genre.getData();
}


var movieLists = [];
function addMovie(movie) {
    movieLists.push(movie);
}
function allMoviesLength() {
    var sum = 0;
    for (var i = 0; i < movieLists.length; i++) {
        sum += movieLists[i].length;
    }
    return sum;
}