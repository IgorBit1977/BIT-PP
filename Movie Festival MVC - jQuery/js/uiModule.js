var uiModule = (function () {
    var $inputTitle = $("#inputTitle");
    var $inputLength = $("#inputLength");
    var $inputGenre = $("#inputGenre");
    var $ul = $("#movieListPrint");
    var $allLength = $("#allMoviesLength");
    var $inputDate = $("#inputDate");


    function collectFormInput() {
        var title = $inputTitle.val();
        var length = parseFloat($inputLength.val());
        var genre = $inputGenre.val();

        return {
            titleMovie: title,
            lengthMovie: length,
            genreMovie: genre
        }
    }

    function printMovies(data) {
        var $li = $("<li>").text(data);
        $ul.append($li);
        
    }

    function printAllMovieLength(data) {
        $allLength.text("All movies length: " + data);
    }

    function clearInputs(){
        var title = $inputTitle.val("");
        var length =  $inputLength.val("");
        var genre =  $inputGenre.val("Chose genre...");

        return {
            titleMovie: title,
            lengthMovie: length,
            genreMovie: genre
        }
    }

    // Program

    function collectDateInput() {
        var dateInput = $inputDate.val();
        console.log(dateInput);

        return {
            dateInput: dateInput
        }
    }

    return {
        printMovies: printMovies,
        collectFormInput: collectFormInput,
        printAllMovieLength: printAllMovieLength,
        clearInputs: clearInputs,
        collectDateInput: collectDateInput
    }

    

})();