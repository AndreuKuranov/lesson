/* eslint-disable no-console */

/* Создание анимированного сайта - занятие 8 */

// ==================================================================== ЗАДАЧА 1 ====================================================================
/* 
  задача 1
  Написать функцию, которая добавляет обработчик fn события eventName к элементу target
*/
// let elem = document.createElement('button');
// elem.textContent = 'click';
// document.body.append(elem);

// const test = () => console.log('задача 1');

// function f(eventName, target, fn) {
//   target.addEventListener(eventName, fn);
// }

// f('click', elem, test)

// ==================================================================== ЗАДАЧА 2 ====================================================================
/* 
  задача 2
  Необходимо написать функцию
  Функция должна удалять у элемента target обработчик fn события eventName
*/
// let elem = document.createElement('button');
// elem.textContent = 'click';
// document.body.append(elem);

// const test = () => console.log('задача 2');

// function f(eventName, target, fn) {
//   target.removeEventListener(eventName, fn);
// }

// f('click', elem, test)

// ==================================================================== ЗАДАЧА 3 ====================================================================
/* 
  задача 3
  Необходимо написать функцию
  Функция должна добавить к элементу target такой обработчик на события eventName, чтобы он отменял действия по умолчанию
*/
// let elem = document.createElement('button');
// elem.textContent = 'click';
// document.body.append(elem);

// function f(eventName, target) {
//   target.addEventListener(eventName, function fn(e) {
//     e.preventDefault();
//   });
// }

// f('click', elem);

// ==================================================================== ЗАДАЧА 4 ====================================================================
/* 
  задача 4
  Необходимо написать функцию
  Функция должна эмулировать событие click для элемента target
*/
// let elem = document.createElement('button');
// elem.textContent = 'click';
// document.body.append(elem);

// elem.onclick = () => console.log('задача 4');

// function f(eventName, target) {
//   target.dispatchEvent(new Event(eventName));
// }

// f('click', elem);

// ==================================================================== ЗАДАЧА 5 ====================================================================
/* 
  задача 5
  Создайте страницу с кнопкой.

  При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране 
  Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop Запрещено использовать сторонние библиотеки. 
  Разрешено пользоваться только тем, что встроено в браузер
*/
// ======================================= Вариант 1 =======================================
const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

let elem = document.createElement('button');
elem.textContent = 'click';
elem.style = 'position: relative; z-index: 1;'
document.body.append(elem);
// document.body.style.height = '1500px'

elem.onclick = () => {
  let div = document.createElement('div');
  document.body.append(div);
  div.style = `
    width: ${randomNum(5, 10)}%; 
    height: ${randomNum(5, 10)}%;
    position: absolute;
    top: ${randomNum(0, 90)}%;
    left: ${randomNum(0, 90)}%;
    background-color: rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)});
  `

  div.onpointerdown = function(event) {
    let x = event.clientX - div.getBoundingClientRect().left;
    let y = event.clientY - div.getBoundingClientRect().top;
    
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    let scrollWidth = Math.max(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    );

    div.style.position = 'absolute';
    div.style.zIndex = 1000;
    document.body.append(div);

    function moveAt(pageX, pageY) { 
      div.style.left = pageX + (div.getBoundingClientRect().width - x) > scrollWidth ? `${scrollWidth - div.getBoundingClientRect().width}px`: `${pageX - x}px`;
      div.style.top = pageY + (div.getBoundingClientRect().height - y) > scrollHeight ? `${scrollHeight - div.getBoundingClientRect().height}px` : `${pageY - y}px`;

      if (div.getBoundingClientRect().left < 0) div.style.left = '0px';
      if (div.getBoundingClientRect().top < 0) div.style.top = '0px';
    }
    moveAt(event.pageX, event.pageY);

    const onMouseMove = (event) => moveAt(event.pageX, event.pageY);

    document.addEventListener('pointermove', onMouseMove);

    div.onpointerup = function() {
      document.removeEventListener('pointermove', onMouseMove);
      div.onpointerup = null;
    };

    document.addEventListener ('pointerleave', () => {
      document.removeEventListener('pointermove', onMouseMove);
    });
  };
}

// ======================================= Вариант 2 =======================================
// const randomNum = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

// let elem = document.createElement('button');
// elem.textContent = 'click';
// elem.style = 'position: relative; z-index: 1;'
// document.body.append(elem);
// // document.body.style.height = '1500px'

// elem.onclick = () => {
//   let div = document.createElement('div');
//   document.body.append(div);
//   div.style = `
//     width: ${randomNum(5, 10)}%; 
//     height: ${randomNum(5, 10)}%;
//     position: absolute;
//     top: ${randomNum(0, 90)}%;
//     left: ${randomNum(0, 90)}%;
//     background-color: rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(0, 255)});
//   `

//   div.onpointerdown = function(event) {
//     let x = event.clientX - div.getBoundingClientRect().left;
//     let y = event.clientY - div.getBoundingClientRect().top;
    
//     let scrollHeight = Math.max(
//       document.body.scrollHeight, document.documentElement.scrollHeight,
//       document.body.offsetHeight, document.documentElement.offsetHeight,
//       document.body.clientHeight, document.documentElement.clientHeight
//     );
//     let scrollWidth = Math.max(
//       document.body.scrollWidth, document.documentElement.scrollWidth,
//       document.body.offsetWidth, document.documentElement.offsetWidth,
//       document.body.clientWidth, document.documentElement.clientWidth
//     );

//     div.style.position = 'absolute';
//     div.style.zIndex = 1000;
//     document.body.append(div);

//     function moveAt(pageX, pageY) { 
//       const a = () => {
//         document.removeEventListener('pointermove', onMouseMove);
//         return `${scrollWidth - div.getBoundingClientRect().width}px`
//       }
//       const b = () => {
//         document.removeEventListener('pointermove', onMouseMove);
//         return `${scrollHeight - div.getBoundingClientRect().height}px`
//       }

//       div.style.left = pageX + (div.getBoundingClientRect().width - x) > scrollWidth ? a() : `${pageX - x}px`;
//       div.style.top = pageY + (div.getBoundingClientRect().height - y) > scrollHeight ? b() : `${pageY - y}px`;

//       if (div.getBoundingClientRect().left < 0) {
//         document.removeEventListener('pointermove', onMouseMove);
//         div.style.left = '0px'
//       };
//       if (div.getBoundingClientRect().top < 0) {
//         document.removeEventListener('pointermove', onMouseMove);
//         div.style.top = '0px'
//       };
//     }
//     moveAt(event.pageX, event.pageY);

//     const onMouseMove = (event) => moveAt(event.pageX, event.pageY);

//     document.addEventListener('pointermove', onMouseMove);

//     div.onpointerup = function() {
//       document.removeEventListener('pointermove', onMouseMove);
//       div.onpointerup = null;
//     };
//   };
// }