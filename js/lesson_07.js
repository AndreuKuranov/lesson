/* eslint-disable no-console */

/* Создание анимированного сайта - занятие 7 */

// ==================================================================== ЗАДАЧА 1 ====================================================================
/* 
  задача 1
  написать функцию, которая создает div на странице и добавляет в него текст, переданный в параметр text
*/
// const createElementUI = (text) => { 
//   let element = document.createElement('div')
//   element.textContent = text;
//   document.body.append(element);
// }

// createElementUI('задача 1');

// ==================================================================== ЗАДАЧА 2 ====================================================================
/* 
  задача 2
  Необходимо написать функцию
  Функция должна добавлять на страницу таблицу
  Параметры, переданные в функцию должны служить текстом для строк таблицы (одна колонка)
*/
function getListContent(arr) {
  let fragment = new DocumentFragment(); // let array = [];

  for(let item of arr) {
    let tr = document.createElement('tr');

    let td = document.createElement('td');
    td.style = 'border: 1px solid black; padding: 3px 5px;';
    td.textContent = item;
    tr.append(td);

    fragment.append(tr); // array.push(tr);
  }

  return fragment; // array
}

const createElementUI = (...text) => {
  let table = document.createElement('table');
  table.style = 'border-collapse: collapse;';
  document.body.append(table);

  table.append(getListContent(text)); //table.append(...getListContent(text));
}

createElementUI('задача 1', 'задача 2', 'задача 3');

// ==================================================================== ЗАДАЧА 3 ====================================================================
/* 
  задача 3
  Необходимо написать функцию
  Функция должна перебрать все дочерние узлы элемента переданного в параметре where и удалить из него все текстовые узлы.
  Задачу необходимо решить без использования рекурсии, то есть можно не уходить вглубь дерева. Так же будьте внимательны при удалении узлов, т.к. можно получить неожиданное поведение при переборе узлов
*/
// ======================================= Вариант 1 =======================================
// const textNodeDelete = (where) => Array.from(where.childNodes).forEach(item => item.nodeName === '#text' ? item.remove() : item);

// textNodeDelete(document.body);
// console.log(document.body.childNodes);

// ======================================= Вариант 2 =======================================

// const textNodeDelete = (where) => { 

//   if (where.children.length > 0) Array.from(where.children).forEach(item => textNodeDelete(item)); 

//   Array.from(where.childNodes).forEach(item => item.nodeName === '#text' ? item.remove() : item);
// }

// textNodeDelete(document.body);
// console.log(document.body.childNodes);

// ==================================================================== ЗАДАЧА 4 ====================================================================
/* 
  задача 4
  Необходимо написать функцию
  Функция должна перебрать все дочерние элементы узла, переданного в параметре where
  Функция должна вернуть массив, состоящий из тех дочерних элементов, следующим соседом которых является элемент с тегом <p>
*/
// const createElementUI = (value, text) => { 
//   let element = document.createElement(value)
//   element.textContent = text;
//   document.body.append(element);
// }

// createElementUI('h1', '1');
// createElementUI('p', 'p');
// createElementUI('div', '2');
// createElementUI('div', '3');
// createElementUI('p', 'p');
// createElementUI('p', 'p');

// const filterNodesElement = (where) => Array.from(where.children).filter((item, index, array) => index < array.length - 1 && item.nextElementSibling.nodeName === 'P' && item.nodeName !== 'P');

// console.log(filterNodesElement(document.body));

// ==================================================================== ЗАДАЧА 5 ====================================================================
/* 
  задача 5
  Необходимо собрать статистику по всем узлам внутри элемента переданного в параметре root и вернуть ее в виде объекта.

  Статистика должна содержать:

  количество текстовых узлов
  количество элементов каждого класса
  количество элементов каждого тега
  Для работы с классами рекомендуется использовать classList. Постарайтесь не создавать глобальных переменных
*/
const pushInObj = (x, obj) => x in obj ? obj[x]++ : obj[x] = 1;

function nodeStatistics(n) {
  let obj = {};

  const textNodeDelete = (where) => { 

    if (where.children.length > 0) Array.from(where.children).forEach(item => textNodeDelete(item));

    Array.from(where.childNodes).forEach(item => {
      pushInObj(item.nodeName, obj);

      if (item.classList && item.classList.length > 0) item.classList.forEach(item => pushInObj(item, obj));
    });
  }

  textNodeDelete(n);
  return obj
}

console.log(nodeStatistics(document.querySelector(':root')));
