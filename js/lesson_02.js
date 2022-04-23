/* eslint-disable no-console */

/* Создание анимированного сайта - занятие 2 */

// ==================================================================== ЗАДАЧА 1 ====================================================================
/* 
    задача 1
    Сделать аналог метода splice массива
    Важно! запрещено использовать метод slice!
*/

// function customSplice(array, index, deleteCount, ...elemN) { 
//     let arrNew = [];
//     let arrDelete = [];
//     let indexСheck = (index >= 0) ? index : ((index + array.length) < 0) ? 0 : index + array.length;
//     let deleteCountСheck = (deleteCount >= 0) ? deleteCount : 0;

//     for ( let i = 0; i < array.length; i++) {
//         if (i < indexСheck) {
//             arrNew.push(array[i]);
//         } 
//         if (elemN.length > 0 && (i === indexСheck || (i === (array.length - 1) && indexСheck > (array.length - 1)))) {
//             for (let j = 0; j < elemN.length; j++) {
//                 arrNew.push(elemN[j]);
//             }
//         }
//         if (i > (indexСheck + deleteCountСheck - 1)) {
//             arrNew.push(array[i]);
//         }
//         if (i >= indexСheck && i < (indexСheck + deleteCountСheck)) {
//             arrDelete.push(array[i]);
//         }
//     } 

//     array.length = 0;
//     for (let l = 0; l < arrNew.length; l++) {
//         array.push(arrNew[l]);
//     }

//     return arrDelete;
// }

function customSplice(array, index, deleteCount, ...elemN) { 
    let arrNew = [];
    let arrDelete = [];
    let indexСheck = (index >= 0) ? index : ((index + array.length) < 0) ? 0 : index + array.length;
    let deleteCountСheck = (deleteCount >= 0) ? deleteCount : 0;

    for ( let i = 0; i < array.length; i++) {
        if (i < indexСheck) {
            arrNew[arrNew.length] = array[i];
        } 
        if (elemN.length > 0 && (i === indexСheck || (i === (array.length - 1) && indexСheck > (array.length - 1)))) {
            for (let j = 0; j < elemN.length; j++) {
                arrNew[arrNew.length] = elemN[j];
            }
        }
        if (i > (indexСheck + deleteCountСheck - 1)) {
            arrNew[arrNew.length] = array[i];
        }
        if (i >= indexСheck && i < (indexСheck + deleteCountСheck)) {
            arrDelete[arrDelete.length] = array[i];
        }
    } 

    array.length = 0;
    for (let l = 0; l < arrNew.length; l++) {
        array[l] = arrNew[l];
    }

    return arrDelete;
}

// test
for (let t = -9; t < 9; t++) {
    console.log(`============ ${t} ============`);

    let arrClone = [1, 2, 3, 4, 5, 6, 7];
    let x = arrClone.splice(t, 2, 'a', ['b'], {});

    let arr = [1, 2, 3, 4, 5, 6, 7]
    let y = customSplice(arr, t, 2, 'a', ['b'], {});

    console.log(x);
    console.log(y);
    console.log(arrClone);
    console.log(arr);
}

// ==================================================================== ЗАДАЧА 2 ====================================================================
/*
    задача 2
    Сделать функцию, которая возвращает двумерный массив заданного размера. 
    Функция принимает один параметр - размер двумерного массива. Ячейки массива должны быть заполнены случайными числами.
*/
// const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// function array2d(sizeArr) {
//     let arrNew = [];
//     for (let i = 0; i < sizeArr; i++) {
//         arrNew.push([randomNum(1, 100)])
//     }
//     return arrNew;
    
// }

// console.log(array2d(5));

// ==================================================================== ЗАДАЧА 3 ====================================================================
/*
    задача 3
    Сделать страницу, при загрузке которой, у пользователя просят ввести дату его рождения в формате “ДД.ММ.ГГ.”
    Показать пользователю на экране его возраст, и сколько дней осталось до его дня рождения. В случае если день его рождения совпадает с текущим - поздравить 
*/
// const validationNumber = n => (Number.isInteger(+n) && !isNaN(+n));
// const dataValid = (value) => value.split('.').slice(0,3).every((item, index, array) => item.length === 2 && validationNumber(item) && +array[0] <= 31 && +array[1] <= 12); // косяк этой функции, она проверяет только первые 3 нужных значения, хотя после третей точке не должно быть значений, не доработал 
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

// const birthday = (value) => {
//     let x = value.split('.'); 
//     let currentDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 0); // почему так, а не просто new Date(), потому что были косяки с расчетами, из за это обнулил все что после дня
//     let year = String(currentDate.getFullYear()).split('').filter((item, index) => index > 1).join(''); // две последние цифры текущего года 
//     let century = x[2] > year ? `19${x[2]}` : `20${x[2]}`; // корректный год
//     let arr = [century, (x[1] - 1), x[0]]; // для удобства, можно было и не создовать

//     const numberDays = (n) => (new Date(new Date().getFullYear() + n, arr[1], arr[2], 0) - currentDate) / 1000 / 60 / 60 / 24; // сколько дней осталось до дня рождения

//     let age = currentDate.getFullYear() - arr[0];
//     let bd = numberDays(0);

//     if (+arr[1] < +currentDate.getMonth()) {
//         bd = numberDays(1);
//     } else if (+arr[1] > +currentDate.getMonth()) {
//         age -= 1;
//     } else {
//         if (+arr[2] > +currentDate.getDate()) {
//             age -= 1;
//         } else if (+arr[2] < +currentDate.getDate()) {
//             bd = numberDays(1);
//         } else {
//             bd = 0;
//         }
//     }

//     return `Вам ${age} ${russianLanguageRules(age)}. ${bd === 0 ? `С Днем Рождения!` : `Дней осталось до дня рождения: ${bd}`}`;
// }

// const birthdayError = () => {
//     let birthdayUser;

//     while (true) {
//         birthdayUser = prompt('Введите дату рождения в формате "ДД.ММ.ГГ."', '');

//         if (birthdayUser === null) {
//             break
//         } else
//         if (birthdayUser === '') {
//             console.log('Поле не может быть пустым.');
//         } else
//         if (dataValid(birthdayUser)) {
//             console.log(birthday(birthdayUser));
//             break
//         } else {
//             console.log('Ошибка! Некорректно указана дата.');
//         }
//     }
// }

// birthdayError();

// ==================================================================== ЗАДАЧА 4 ====================================================================
/*
    задача 4
    Создайте функцию sqrtNumeric(obj), которая возводит в квадрат все числовые свойства  объекта obj.
*/
// let test = {
//     value1: 4,
//     value2: 5,
//     value3: "str",
//     value4: 2,
// };

// const sqrtNumeric = (obj) => {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] **= 2;
//         }
//     }
// }

// sqrtNumeric(test);
// console.log(test);

// // можно так, но тогда не изменяются значения объекта, а создаем новый объект с измененными значениями
// let test = {
//     value1: 4,
//     value2: 5,
//     value3: "str",
//     value4: 2,
// };

// const sqrtNumeric = (obj) => Object.fromEntries( Object.entries(obj).map( ([key, value]) => (typeof value === 'number') ? [key, value ** 2] : [key, value] ) );

// console.log(test);
// console.log(sqrtNumeric(test));

// ==================================================================== ЗАДАЧА 5 ====================================================================
/*
    задача 5
    Создайте функцию  notUnique(arr), которая возвращает массив, содержащий только не уникальные элементы arr.
*/
// Не совсем понял задание, он должен возвращать элементы в единственном экземпляре или то количество раз, которое они повторяются
// И еще, нужно вернуть новый массив или изменить имеющийся 

// =======================================Вариант с возвратом повторов=======================================
// let array = [1, 2, 2, 4, 3, 4, 4, 'a', 'c', 'c','j', 'c', 'l', 'l', 9, 11, 11, 2];
// const notUnique = (arr) => arr.filter((item, index, array) => array.indexOf(item, (index + 1)) > 0);
// console.log(notUnique(array));

// =======================================Вариант с озвратом значений которые повторяются=======================================
// let array = [1, 2, 2, 4, 3, 4, 4, 'a', 'c', 'c','j', 'c', 'l', 'l', 9, 11, 11, 2];
// const notUnique = (arr) => {
//     let arrNew = [];
//     for (let i = 0; i < arr.length; i++) {
//         let x = arr[i];
//         let count = 0;

//         for (let j = 0; j < array.length; j++) {
//             let y = array[j];

//             if (x === y) {
//                 count++
//             }
//         }

//         if (count > 1 && !arrNew.includes(x)) {
//             arrNew.push(x);
//         }
//     }
//     return arrNew;
// }
// console.log(notUnique(array));
