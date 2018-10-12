// Write a function to calculate how many years there are left until retirement
// based on the year of birth.Retirement for men is at age of 65 and for women at age of 60.
// If someone is already retired, a proper message should be displayed.

function retirement(yearOfBirth, pol) {
  var trenutnaGodina = 2018;
  var brojGodina = trenutnaGodina - yearOfBirth;
  console.log(brojGodina);
  var pol_ind;
  if (pol == "zenski") {
    pol_ind = true;
  } else {
    pol_ind = false;
  }
  if (brojGodina > 60 && pol_ind) {
    console.log("Vec si u penziji, uzivaj!!!");
  } else if (brojGodina > 65 && !pol_ind) {
    console.log("Vec si u penziji, uzivaj!!!");
  } else if (brojGodina < 60 && pol_ind) {
    console.log("Do penzije ti je ostalo " + (60 - brojGodina) + " godina");
  } else if (brojGodina < 65 && !pol_ind) {
    console.log("Do penzije ti je ostalo " + (65 - brojGodina) + " godina");
  }
}
retirement(1957, "zenski");
