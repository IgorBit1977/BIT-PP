

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

var movieList = [];
 function addMovie(movie) {
     movieList.push(movie);
 }

 function allMoviesLength() {
     var sum = 0;
     for(var i = 0; i < movieList.length; i++) {
         sum += movieList[i].length;
     }
     return sum;
 }

 function Program(date) {
    // properties
    this.date = date;
    this.movieList = [];
}

// methods
Program.prototype.getProgramDuration = function () {
    var programLength = 0;

    // Alternative way to loop arrays
    this.movieList.forEach(function (movie) {
        programLength += movie.length;
    }, this);

    return programLength;
};

Program.prototype.addMovie = function (movie) {
    this.movieList.push(movie);
};

Program.prototype.getData = function () {
    var date = this.date;
    var movies = this.movieList;
    var programDuration = this.getProgramDuration();
    var dateStr = date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear();

    var outputStr = dateStr + ", program duration " + programDuration + "min\n";

    for (var i = 0; i < movies.length; i++) {
        var movie = movies[i];
        outputStr += "\t\t" + movie.getData() + "\n";
    }

    return outputStr;
};
