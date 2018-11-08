var controler = (function(ui, data) {
  
    function init(){
        setupEventListeners();

    }

    function setupEventListeners() {
    var $createMovieButton = $("#createMovieButton");
    $createMovieButton.on("click", createMovie);

    var $createProgramButton = $("#createProgramButton");
    $createProgramButton.on("click", createProgram);
    }

    function createMovie() {
    var collectInput = ui.collectFormInput();
    var movie = data.createMovie( collectInput.titleMovie,collectInput.genreMovie,collectInput.lengthMovie);
    data.addMovie(movie);
    ui.printMovies(movie.getData());
    ui.printAllMovieLength(data.allMoviesLength(movie));
    console.log(data.allMoviesLength(movie));
    ui.clearInputs();
    }

    function createProgram(){
        var collectDate = ui.collectDateInput().dateInput;
        var program = data.createProgram(new Date(collectDate));

        data.addProgram(program.getData);
        

    }


    return {
        init : init
    }


    
})(uiModule, dataModule);
