/* eslint-disable no-console */

/* Создание анимированного сайта - занятие 1 */

// ==================================================================== ЗАДАЧА 1 ====================================================================
/* 
    задача 1
    Вывести сообщение несколькими способами:
    - через alert;
    - через console.log;
*/
// alert('Привет');
// console.log('Привет');
// console.dir('Привет');
// console.info('Привет');

// ==================================================================== ЗАДАЧА 2 ====================================================================
/*
    задача 2
    Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.
    Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.
    
*/
// ======================================= 1.1 =======================================
// let age = prompt('Возраст?', '');
// let message;

// if (age >= 14 && age <= 90) {
//     message = 'Возраст не соответствует';
// } else {
//     message = 'Возраст соответствует';
// }

// console.log( message );

// ======================================= 1.2 =======================================
// let age = prompt('Возраст?', '');
// let message;

// if (age < 14) {
//     message = 'Возраст соответствует';
// } else if (age <= 90) {
//     message = 'Возраст не соответствует';
// } else {
//     message = 'Возраст соответствует';
// }

// console.log( message );

// ======================================= 2 =======================================
// let age = prompt('Возраст?', '');
// let message;

// if (!(age < 14) && !(age > 90)) {
//     message = 'Возраст не соответствует';
// } else {
//     message = 'Возраст соответствует';
// }

// console.log( message );

// ==================================================================== ЗАДАЧА 3 ====================================================================
/*
    задача 3
    напишите и вызовите функцию, в которой выводятся все четные числа в диапазоне от 2 до 20 в консоль.
    на каждой итерации проверка на четность должна происходить при помощи стрелочной функции. 
*/
// const parityCheck = num => (num % 2 === 0) ? true : false;

// function evenNumbers(min, max) {
//     for (let i = min; i <= max; i++) {
//         if (parityCheck(i)) {
//             console.log(i);
//         }
//     }
// }

// evenNumbers(2, 20);

// ==================================================================== ЗАДАЧА 4 ====================================================================
/*
    задача 4
    написать код, в котором от пользователя запрашивается возраст числом.
    затем нужно вывести сообщение "вам N лет" "вам N года" по правилам русского языка используя окончание. 
    Для решения задачи нужно использовать switch
    сделать минимальную валидацию (что введена строка, отрицательное число, или число больше 100 - в этом случае выводить уведомление об ошибке)
*/
// =======================================Вариант с if=======================================
// const russianLanguageRules = (value) => {
//     let str = String(value);

//     if (
//         str[str.length - 1] === '1' && 
//         str[str.length - 2] !== '1'
//     ) {
//         return 'год'
//     } else if (
//         (
//             str[str.length - 1] === '2' || 
//             str[str.length - 1] === '3' || 
//             str[str.length - 1] === '4'
//         ) && str[str.length - 2] !== '1'
//     ) {
//         return 'года'
//     } 
    
//     return 'лет'
// };

// const validationNumber = n => (Number.isInteger(+n) && !isNaN(+n)) ? true : false;

// const validationInterval = (num, min, max) => {
//     if (validationNumber(num) && +num >= min && +num <= max) {
//         return true
//     } 
    
//     return false
// };

// function errorFunc() {
//     errorFunc.count = 0;

//     return function wrapper(min, max) {
//         errorFunc.count++;

//         if (errorFunc.count > 3) {
//             console.log(`Значение должно быть: не меньше ${min}, не больше ${max} и не дробным.`);
//             errorFunc.count = 0;
//         } else {
//             console.log('Ошибка! Некорректно указан возраст.');
//         }
//     }
// }
// let errorAlert = errorFunc();

// function age() {
//     let year;
//     let message;
//     let minAge = 0;
//     let maxAge = 100;

//     for (;;) {
//         year = prompt('Возраст?', '');

//         if (year === null) {
//             break
//         } else
//         if (year === '') {
//             console.log('Поле не может быть пустым.');
//         } else
//         if (validationInterval(year, minAge, maxAge)) {
//             message = `Вам ${year} ${russianLanguageRules(year)}`;
//             break;
//         } else {
//             errorAlert(minAge, maxAge);
//         }
//     }

//     if (message) {
//         console.log(message);
//     }
// }

// age();

// =======================================Вариант с switch=======================================
// const russianLanguageRules = (value) => {
//     let str = String(value);

//     switch (str[str.length - 1]) {
//         case '1':
//             switch (str[str.length - 2]) {
//                 case '1':
//                     return 'лет';
//                 default:
//                     return 'год';
//             }
//         case '2':
//         case '3':
//         case '4':
//             switch (str[str.length - 2]) {
//                 case '1':
//                     return 'лет';
//                 default:
//                     return 'года';
//             }
//         default:
//             return 'лет';
//     }
// };

// const validationNumber = (num) => {
//     let n = +num;

//     switch (true) {
//         case Number.isInteger(n):
//             switch (true) {
//                 case !isNaN(n):
//                     return true;
//                 default:
//                     return false;
//             }
//         default:
//             return false;
//     }
// };

// const validationInterval = (value, min, max) => {
//     let num = +value;

//     if (validationNumber(num) && num >= min && num <= max) {
//         return value
//     } 
    
//     return false
// };

// function errorFunc() {
//     errorFunc.count = 0;

//     return function wrapper(min, max) {
//         errorFunc.count++;

//         switch (errorFunc.count) {
//             case 4:
//                 console.log(`Значение должно быть: не меньше ${min}, не больше ${max} и не дробным.`);
//                 errorFunc.count = 0;
//                 break;
//             default:
//                 console.log('Ошибка! Некорректно указан возраст.');
//         }
//     }
// }
// let errorAlert = errorFunc();

// function age() {
//     let year;
//     let message;
//     let minAge = 0;
//     let maxAge = 100;

//     let i = 0;

//     do {
//         year = prompt('Возраст?', '');

//         switch (year) {
//             case null:
//                 i++;
//                 break;
//             case '':
//                 console.log('Поле не может быть пустым.');
//                 break;
//             case validationInterval(year, minAge, maxAge):
//                 message = `Вам ${year} ${russianLanguageRules(year)}`;
//                 i++;
//                 break;
//             default:
//                 errorAlert(minAge, maxAge);
//         }
//     } while (i < 1);

//     if (message) {
//         console.log(message);
//     }
// }

// age();

// ==================================================================== ЗАДАЧА 5 ====================================================================
/*
    задача 5
    переделайте задачу 2 с использованием тернарного оператора
*/
// ======================================= 1.1 =======================================
// let age = prompt('Возраст?', '');

// let message = (age >= 14 && age <= 90) ? 'Возраст не соответствует' : 'Возраст соответствует';

// console.log( message );

// ======================================= 1.2 =======================================
// let age = prompt('Возраст?', '');

// let message = (age < 14) ? 'Возраст соответствует' : (age <= 90) ? 'Возраст не соответствует' : 'Возраст соответствует';

// console.log( message );

// ======================================= 2 =======================================
// let age = prompt('Возраст?', '');

// let message = (!(age < 14) && !(age > 90)) ? 'Возраст не соответствует' : 'Возраст соответствует';

// console.log( message );
// ===========================================================================================================================================================================
// Привет, можешь пожалуйста не комментировать js код
// задание 1 - ок
// задание 2 - ок
// задание 3 - ок
// задание 4 - сильно, принято
// можно было написать короче, к примеру:
// let number = +prompt('Введите возраст');
// if(number < 0){
//     alert('Ошибка! Число < 0!');
// } else if (number > 100 ) {
//     alert('Ошибка! Число > 100!');
// } else if (isNaN(number)) {
//     alert ('Ошибка! Введена строка');
// } else {
// let count = number % 10;
// if (number >=11 && number <=14) {
//     count = number;
// } else if (count < 1) {
//     count *= 10;
// }
// switch(count){
//     case 1:
//         alert(`вам ${number} год`);
//         break;
//     case 2:
//     case 3:
//     case 4:
//         alert(`вам ${number} года`);
//         break;
//     default:
//         alert(`вам ${number} лет`);
//     }
// }
// задание 5 - ок
// на будущее
// https://gitlab.webprofy.ru/kokoc-school/js/2022_01/js_kuranov/-/blob/lesson_01/src/index.js#L112 можно записать короче return (validationNumber(num) && +num >= min && +num <= max)
// https://gitlab.webprofy.ru/kokoc-school/js/2022_01/js_kuranov/-/blob/lesson_01/src/index.js#L68 то же самое что и const parityCheck = num => (num % 2 === 0)
// дело в том что операторы сравнения (<, >, ==, и другие) сами по себе возвращают true/false
// занятие принято))