"use strict";

// function init() {
//   const firstName = prompt("What is your first name?");
//   const secondName = prompt("What is your second name?");
//   const patronymic = prompt("What is your patronymic?");
//   const ages = prompt('Your age in years?');
//   const sex = confirm('Your sex. Man(ОК)/Woman(ОТМЕНА)');
  
  
//   if (!firstName || !secondName || !patronymic || ages === '' || isNaN(ages)) {
//         alert("Строка пуста");
//         init();
//       }
//     alert('Your Full Name: ' + firstName + secondName + patronymic +'\n' +
//               'Your age: ' + ages + '\n' +
//               'Your age in days: ' + (ages * 365) + '\n' +
//               'In five years you will be: ' + (+ages + 5) + ' age' + '\n' +
//               'Your sex: ' + (sex ? 'Man' : 'Woman') + '\n' +
//               'You are retired: ' + ((ages >= 55 && sex === false) || (ages >= 65 && sex === true) ? 'Yes' : 'No'));
//   }
//   init();
  





const firstName = prompt("What is your first name?");
string(firstName); 

const secondName = prompt("What is your second name?");
string(secondName); 

const patronymic = prompt("What is your patronymic?");
string(patronymic); 

const ages = prompt('Your age in years?');


const sex = confirm('Your sex. Man(ОК)/Woman(ОТМЕНА)');


function string (value) {
    if (value === '' || value  === ' ') {
      alert('Строка пуста')
    } 
}

  function found(userName, userSurname, userPatronymic, userAge, userSex)
{

  alert('Your Full Name: ' + userName + ' ' + userSurname + ' ' + userPatronymic +'\n' +
    'Your age: ' + userAge + '\n' +
    'Your age in days: ' + (userAge * 365) + '\n' +
    'In five years you will be: ' + (+userAge + 5) + ' age' + '\n' +
    'Your sex: ' + (userSex ? 'Man' : 'Woman') + '\n' +
    'You are retired: ' + ((userAge >= 55 && userSex === false) || (userAge >= 65 && userSex === true) ? 'Yes' : 'No')
    )
}

found(firstName, secondName, patronymic, ages, sex)




