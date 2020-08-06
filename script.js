

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

let ages = prompt('Your age in years?');

// let days = prompt('Your age in days?');
// let start = moment('07/14/1995');
// let future = moment('08/06/2020');
// let d = future.diff(start, 'days'); 
// alert(` ${d} days`);


let sex = prompt("Your sex? Man/Woman");


let retired = prompt('You are retired?');

if (ages > 65 && sex === "Man") {
  alert(`Your Full Name: ${firstNames},
  Your: ${ages} age!,
  Your age in: ${ages * 365} days
  Your Sex: ${sex}, 
  In five years you will be: ${-ages - 5} age!,
  Your can rest`);
} else if (ages > 55 && sex === "Woman") {
  alert(`
  Your Full Name: ${firstNames},
  Your: ${ages} age!,
  Your age in: ${ages * 365} days
  Your Sex: ${sex}, 
  In five years you will be: ${-ages - 5} age!,
  Your can rest`);
} else {
  alert(`
  Your Full Name: ${firstNames},
  Your: ${ages} age!,
  Your age in: ${ages * 365} days
  Your Sex: ${sex}, 
  In five years you will be: ${-ages - 5} age!,
  Go to work drone!`);
}

