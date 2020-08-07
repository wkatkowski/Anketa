"use strict";


let firstName = prompt("What is your first name?");
let secondName = prompt("What is your second name?");
let patronymic = prompt("What is your patronymic?");

let ages = prompt('Your age in years?');

// let days = prompt('Your age in days?');
// let start = moment('07/14/1995');
// let future = moment('08/06/2020');
// let d = future.diff(start, 'days'); 
// alert(` ${d} days`);

let sex = prompt("Your sex? Man/Woman");

if (ages > 65 && sex === "Man") {
alert(`
  Your Full Name ${firstName} ${secondName} ${patronymic},
  Your: ${ages} age!,
  Your age in: ${ages * 365} days
  Your Sex: ${sex}, 
  In five years you will be: ${+ages + 5} age!,
  Your can rest`);
} else if (ages > 55 && sex === "Woman") {
  alert(`
  Your Full Name ${firstName} ${secondName} ${patronymic},
  Your: ${ages} age!,
  Your age in: ${ages * 365} days
  Your Sex: ${sex}, 
  In five years you will be: ${+ages + 5} age!,
  Your can rest`);
} else {
  alert(`
  Your Full Name ${firstName} ${secondName} ${patronymic},
  Your: ${ages} age!,
  Your age in: ${ages * 365} days
  Your Sex: ${sex}, 
  In five years you will be: ${+ages + 5} age!,
  Go to work drone!`);
}

