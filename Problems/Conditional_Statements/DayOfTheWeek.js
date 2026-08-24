// Day of the Week
// Take a number (1–7) as input and print the corresponding day of the week.


let dayNumber = 7; 
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "It's Monday";
        break;
    case 2:
        dayName = "It's Tuesday";
        break;
    case 3:
        dayName = "It's Wednesday";
        break;
    case 4:
        dayName = "It's Thursday";
        break;
    case 5:
        dayName = "It's Friday";
        break;
    case 6:
        dayName = "It's Saturday";
        break;
    case 7:
        dayName = "It's Sunday.....!!";
        break;
    default:
        dayName = "Invalid day number! Please choose a number between 1 and 7.";
}

console.log(dayName); 
