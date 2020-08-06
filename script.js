

//Четвертое задание

// let firstName = prompt("What is your first name?");
// alert(`Your Name ${firstName} `);
// let secondName = prompt("What is your second name?");
// alert(`Your Name ${secondName} `);
// let patronymic = prompt("What is your patronymic?");
// alert(`Your Name ${patronymic} `);
// let age = prompt("How old are you?");
// alert(`Your Name ${age} `);
// let sex = confirm("Your sex is a man?");



let firstNames = prompt("What is your Full name?");
alert(`Your Full Name ${firstNames} `);

let ages = prompt('Your age in years?');
alert(` ${ages} age!`);

let days = prompt('Your age in days?');
let start = moment('07/14/1995');
let future = moment('08/06/2020');
let d = future.diff(start, 'days'); 
alert(` ${d} days`);

let number = prompt('How old are you across five years?');
alert(`In five years you will be ${-number - 5} age!`);

let sex = prompt("Your sex? Man/Woman");
alert(`Your Sex ${sex} `);

    
let retired = prompt('You are retired?');

if (ages >= 65) {
  alert('Your can rest');
}  else if (ages  >= 55) {
  alert('Your can rest');
} else {
  alert('Go to work drone!');
}


if (Sex == Man) {
  alert( 'Your can rest');
} else if (sex == Woman) {
  alert( 'Your can rest' );
} else {
  alert( 'Go to work drone!' );
}


