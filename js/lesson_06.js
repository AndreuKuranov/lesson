/* eslint-disable no-console */

/* Создание анимированного сайта - занятие 6 */

// ==================================================================== ЗАДАЧА 1 ====================================================================
/* 
  задача 1
  Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунд
  Пример  delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
*/

// function delayPromise(n) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve('ok'), n * 1000);
//     // setTimeout(() => reject(new Error("Whoops!")), n * 1000);
//   });
// }
// let promise = delayPromise(3);

// promise.then(
//   result => console.log(result)
// ).catch(
//   err => console.log(err)
// )

// ==================================================================== ЗАДАЧА 2 ====================================================================
/* 
  задача 2
  Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения.
  Массив городов можно получить отправив асинхронный запрос по https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
*/

// function f() {
//   return new Promise((resolve, reject) => { 
//     resolve(
//       fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
//         .then(r => r.json())
//         .then(r => r.map(item => item.name))
//     )
//   })
// }

// console.log(f());
// f().then(
//   r => console.log(r)
// ).catch(
//   err => console.log(err)
// )

// ==================================================================== ЗАДАЧА 3 ====================================================================
/* 
  задача 3
  Элементы полученного массива из задачи 3 должны быть отсортированы по имени города
  loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
  Страница должна предварительно загрузить список городов из этого адреса и отсортировать в алфавитном порядке.

  При вводе в текстовое поле, под ним должен появляться список тех городов, в названии которых, хотя бы частично, есть введенное значение.
  Регистр символов учитываться не должен, то есть "Moscow" и "moscow" - одинаковые названия.
  Во время загрузки городов, на странице должна быть надпись "Загрузка..." После окончания загрузки городов, надпись исчезает и появляется текстовое поле.
  Запрещено использовать сторонние библиотеки.
  Разрешено пользоваться только тем, что встроено в браузер.
*/

// создает элементы страницы
function createElementFunc(element, obj, ...agr) {
  let x = document.createElement(element);

  for (let key in obj) {
    if (key === 'textContent') x.textContent = obj[key];
    if (key === 'style') x.style = obj[key];
    if (key === 'type') x.type = obj[key];
    if (key === 'placeholder') x.placeholder = obj[key];
  }

  if (agr.length > 0) agr[0].append(x);

  return x
}

let body = document.querySelector('body');
body.style = 'font-size: 18px;';

let newInput = createElementFunc('input', {
  style: 'padding: 5px; font-size: inherit; min-width: 50%;',
  type: 'text',
  placeholder: 'поиск',
}, body);
let listMatch = createElementFunc('ul', {}, body);

// блок загрузки
// =============
let div = createElementFunc('div', {
  style: 'width: 100%; height: 100%; position: absolute; top: 0; left: 0; z-index: 1; background-color: #fff; padding: 20px; font-size: 30px; text-align: center;',
  textContent: 'Загрузка...',
});
const loading = velue => velue ? body.append(div) : div.remove();
// =============

// минимальная обработка ошибки
const errorFunc = (err, n) => {
  createElementFunc('li', {
    style: 'list-style: none;',
    textContent: `Что-то пошло не так: "${err.stack}"`,
  }, n);
}

// генерирует список совпадений
const elementAllFunc = (arr, n, value) => {
  let elementAll = document.querySelectorAll('li');
  elementAll.forEach(item => item.remove());

  arr.forEach((item, index) => {
    let check = item.toLowerCase().indexOf(value, 0);
    let match = check + value.length;
    const checkFunc = (i, a, b) => i.split('').slice(a, b).join('');

    n.append(document.createElement('li'));
    let e = document.querySelectorAll('li');
    e[index].textContent = checkFunc(item, 0, check);

    createElementFunc('b', { style: 'font-size: 20px', textContent: checkFunc(item, check, match), }, e[index]);
    createElementFunc('span', { textContent: checkFunc(item, match, item.length), }, e[index]);
  })

  if (value.length > 0 && arr.length === 0) {
    let searchResults = createElementFunc('li', { style: 'list-style: none;',  textContent: 'По запросу ', }, n);

    createElementFunc('b', { style: 'font-size: 20px',  textContent: value, }, searchResults);
    createElementFunc('span', { textContent: ' ничего не найдено', }, searchResults);
  }
}

// запрос
async function getJson() {
  let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
  let response = await fetch(url);
  let commits = await response.json();
  let arr = await commits.map(item => item.name).sort();

  return arr;
}

async function loadAndSortTowns() {
  try {
    loading(true);
    let arr = await getJson();

    newInput.oninput = () => {
      let currentValue = newInput.value.toLowerCase();
      let arrayMatch = arr
        .filter(item => item.toLowerCase().includes(currentValue) && currentValue.length > 0)
        .sort((a, b) => a.toLowerCase().indexOf(currentValue, 0) - b.toLowerCase().indexOf(currentValue, 0));

      elementAllFunc(arrayMatch, listMatch, currentValue);
    }

    return arr; // можно не чего не возвращать, но по заданию loadAndSortTowns().then(towns => console.log(towns))  
  } catch(e) {
    errorFunc(e, listMatch);
  } finally {
    setTimeout(loading, 500, false); // таймер поставил, для наглядности 
  }
}

loadAndSortTowns().then(towns => console.log(towns))

// ==================================================================== ЗАДАЧА 4 ====================================================================
/* 
  задача 4
  перепишите задачу 2 используя async/await
*/

// async function f() {
//   return fetch('https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json')
//     .then(r => r.json())
//     .then(r => r.map(item => item.name))
// }

// f().then(
//   r => console.log(r)
// ).catch(
//   err => console.log(err)
// )

//===============================================================================================

// async function f() {
//   try {
//     console.log('loaded');

//     let url = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
//     let response = await fetch(url);
//     let commits = await response.json();
//     let arr = await commits.map(item => item.name);

//     return arr
//   } catch(err) {
//     console.log(err);
//   } finally {
//     console.log('ok');
//   }
// }

// // console.log(f());
// f().then(r => console.log(r));
