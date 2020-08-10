"use strict";

function init() {
const firstName = prompt("What is your first name?");
const secondName = prompt("What is your second name?");
const patronymic = prompt("What is your patronymic?");
const ages = prompt('Your age in years?');
const sex = confirm('Your sex. Man(ОК)/Woman(ОТМЕНА)');

  if (!firstName || !secondName || !patronymic || !ages || !sex) {
    alert("Строка пуста");
    init();
  }
  alert('Your Full Name: ' + firstName + secondName + patronymic +'\n' +
            'Your age: ' + ages + '\n' +
            'Your age in days: ' + (ages * 365) + '\n' +
            'In five years you will be: ' + (ages + 5) + ' age' + '\n' +
            'Your sex: ' + (sex ? 'Man' : 'Woman') + '\n' +
            'You are retired: ' + ((ages >= 55 && sex === false) || (ages >= 65 && sex === true) ? 'Yes' : 'No'));
}
init();


// function words() {
//   var a = 0;
//   var vowel = ["а", "о", "и", "е", "ё", "э", "ы", "у", "ю", "я"];
//   var string = prompt("Введите строку:");
//   for (var i = 0; i < string.length; i++)
//       for (var b = 0; b < vowel.length; b++)
//           if (string[i] === vowel[b]) {
//               ++a;
//               break;
//           }
//   return a;
// }
// alert("Гласных: " + words());