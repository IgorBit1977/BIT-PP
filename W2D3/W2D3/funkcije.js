function sum(a, b){
    var result;
    result = a+b;

    return result;
} 
//bez return result, funkcija bi izbacivala undefined
//do sad iskucano je definicija funkcije
    //a, b su parametri  

//pozivanje funkcije
var = final_result;
final_result = sum(3, 5);
//prave vrednosti parametara su argumenti
console.log(final_result);

function sum_of_all_arguments(){
    var result = 0;

    var i;

    for (i = 0; i<arguments.length; i++){
        result = result + arguments[i];
    }
    return result;

}
var s;
s = sum_of_all_arguments(3, 6, 7, 4, 5);
console.log(s);

