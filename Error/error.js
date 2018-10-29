a = [3, 8, 11, 24, 6];

var i = 6;

try {

    if (typeof i != 'number') {
        var typeError = new TypeError("Type error, i must be number!")
        throw typeError;
    }
    if (i < 0 || i > a.length) {
        var rangeError = new RangeError('Range error , i must be valid number between 0 and a.length')
        throw rangeError;
    } else {
        console.log(a[i]);
    }

}
catch (error) {
    if (error instanceof TypeError) {
        console.log("Type error: ", error.message);
    } else {
        console.log("Range error: ", error.message);
    }

}


// 
