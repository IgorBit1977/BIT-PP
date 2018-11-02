var buttonSelect = document.querySelector("#button");
buttonSelect.onclick = function () {
    var titleInput = document.querySelector("#titleInput").value;
    var lengthInput = document.querySelector("#lengthInput").value;
    var selectInput = document.querySelector("#selectInput").value;
    var lenNum = parseFloat(lengthInput);
    var genre = new Genre(selectInput);
    var movie = new Movie(titleInput, genre, lenNum);
    addMovie(movie);

    var ul = document.querySelector("#ulId");
    ul.innerHTML += "<li>" + movie.getData() + "</li>";

    document.querySelector("#titleInput").value = "";
    document.querySelector("#lengthInput").value = "";
    document.querySelector("#selectInput").value = "-";

    var allMovie = allMoviesLength();
    document.querySelector("#allMoviesLength").innerText = "All movies length: " + allMovie;

}