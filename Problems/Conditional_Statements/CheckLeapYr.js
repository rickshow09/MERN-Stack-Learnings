// Leap Year Check
// Determine whether a given year is a leap year.

var year = 2100;

if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    console.log(`${year} is a Leap Year..!`);
} else {
    console.log(`${year} is not a Leap Year..!`);
}

// Eg : 2100,2000

// Path A: Regular Leap Years
// (year % 4 == 0 && year % 100 != 0)


// Path B: Century Milestone Leap Years
// (year % 400 == 0)
