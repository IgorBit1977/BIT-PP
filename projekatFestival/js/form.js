var button = document.querySelector("#button");

button.onclick = function() {
  var titleInput = document.querySelector("#titleInput").value; // pravimo node titleInput
  var lengthInput = document.querySelector("#lengthInput").value; // pravimo node lengthInput
  console.log(typeof lengthInput);
  var selectInput = document.querySelector("#selectInput").value; // pravimo node SelectInput
  console.log(selectInput);

  //pokupili smo sve vrednosti imputa koje je korisnik ukucao

  if (titleInput == "") {
    var tittleForm = document.querySelector("#titleInput");
    tittleForm.classList.add("borderStyle");
    alert("You must provide valid data for title!");
  }
  if (lengthInput == "") {
    var lengthForm = document.querySelector("#lengthInput");
    lengthForm.classList.add("borderStyle");
    alert("You must provide valid data for length!");
  }
  if (selectInput == "-") {
    var selectForm = document.querySelector("#selectInput");
    selectForm.classList.add("borderStyle");
    alert("You must pick a genre!");
  }

  var lengthNum = parseFloat(lengthInput); // vrednost lengtha pretvaramo u number
  var genre = new Genre(selectInput); // pravimo novi objekat naziv zanra (Action)
  var movie = new Movie(titleInput, genre, lengthNum); //pravimo novi objekat movie

  addMovie(movie); // dodajemo movie u movieList [];

  var ul = document.querySelector("#ulId"); // pravimo node ul
  ul.innerHTML += "<li>" + movie.getData() + "</li>"; // u njega upisujemo string sa vrednoscu
  //'<li>' i unutar njega metodu movie.getData() '</li>' zatvaramo li.

  var titleInput = (document.querySelector("#titleInput").value = "");
  var lengthInput = (document.querySelector("#lengthInput").value = ""); // resetujemo formu
  var selectInput = (document.querySelector("#selectInput").value = "-");

  var allMovie = allMoviesLength(); // deklarisemo promenljivu za upis duzine svih filmova
  document.querySelector("#allMoviesLength").innerText =
    "All movies length" + allMovie;
  // u tu promenljivu upisujemo text kao string i  promenljivu koja nosi return sum iz funkcije allMoviesLength();
};

//*******************************program************************************ */

var programButton = document.querySelector("#programButton");

programButton.onclick = function() {
  var dateInput = document.querySelector("#dateInput").value;
  var selectInputMovies = document.querySelector("#selectInputMovies").value;
  var selectInputProgram = document.querySelector("#selectInputProgram").value;
};
