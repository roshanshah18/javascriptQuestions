// Write a program to check if a given year is a leap year.
function leapyear(year) {
  if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
    console.log("It is a leap Year");
  } else {
    console.log("It is not a leap year");
  }
}
let year = 1700;
leapyear(year);
