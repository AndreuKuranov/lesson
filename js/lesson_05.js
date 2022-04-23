/* Создание анимированного сайта - занятие 5 */

// ==================================================================== ЗАДАЧА 1 ====================================================================
/* 
  задача 1
  написать таймер, который выводит в консоль обратный отсчет. количество секунд передается аргументом при запуске таймера
*/
// ======================================= Вариант 1 c Декоратором =======================================
// function timeout(tim) {
//   let count = tim;

//   function tick() {
//     console.log(count);
//     count--;
//     if (count >= 0) setTimeout(tick, 1000)
//   };
//   tick();
// }

// function delay(f, ms) {
//   return function() {
//     setTimeout(() => f.apply(this, arguments), ms);
//   };
// }

// let func = delay(timeout, 1000);
// func(5);

// ======================================= Вариант 2 =======================================
// function timeout(tim) {
//   let count = tim;

//   let x = setInterval(function tick() {
//     console.log(count);
//     if (count <= 0) clearInterval(x)
//     count--;
//   }, 1000);
// }

// timeout(5)

// ==================================================================== ЗАДАЧА 2 ====================================================================
/* 
  задача 2
  нужно вывести в цикле все города из json-объекта https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json
*/
// ======================================= Вариант 1 =======================================
// let arrJson = JSON.stringify(
//   [
//     {name: "Frank"},
//     {name: "Cotopaxi"},
//     {name: "Teasdale"},
//     {name: "Belfair"},
//     {name: "Emory"},
//     {name: "Toftrees"},
//     {name: "Osage"},
//     {name: "Dotsero"},
//     {name: "Muir"},
//     {name: "Nicut"},
//     {name: "Camas"},
//     {name: "Freelandville"},
//     {name: "Romeville"},
//     {name: "Welch"},
//     {name: "Belleview"},
//     {name: "Troy"},
//     {name: "Bladensburg"},
//     {name: "Worton"},
//     {name: "Mappsville"},
//     {name: "Colton"},
//     {name: "Vaughn"},
//     {name: "Boonville"},
//     {name: "Tuskahoma"},
//     {name: "Madrid"},
//     {name: "Garberville"},
//     {name: "Shrewsbury"},
//     {name: "Flintville"},
//     {name: "Harmon"},
//     {name: "Ellerslie"},
//     {name: "Moscow"},
//     {name: "Topaz"},
//     {name: "Marne"},
//     {name: "Laurelton"},
//     {name: "Worcester"},
//     {name: "Advance"},
//     {name: "Sterling"},
//     {name: "Irwin"},
//     {name: "Chesterfield"},
//     {name: "Conestoga"},
//     {name: "Wikieup"},
//     {name: "Hampstead"},
//     {name: "Brule"},
//     {name: "Warren"},
//     {name: "Springville"},
//     {name: "Noblestown"},
//     {name: "Saranap"},
//     {name: "Frierson"},
//     {name: "Kilbourne"},
//     {name: "Cliffside"},
//     {name: "Jacksonwald"}
//   ]
// );

// JSON.parse(arrJson).map(item => console.log(item.name));
// // или
// // JSON.parse(arrJson, (key, value) => typeof value === 'string' ? console.log(value) : null);

// ======================================= Вариант 2 =======================================
// let requestURL = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   let superHeroes = request.response;
//   superHeroes.map(item => console.log(item.name));
// }

// ==================================================================== ЗАДАЧА 3 ====================================================================
/* 
  задача 3
  вывести в консоль города по очереди из json предыдущей задачи с интервалом в 1 секунду
*/
// ======================================= Вариант 1 =======================================
// let arrJson = JSON.stringify(
//   [
//     {name: "Frank"},
//     {name: "Cotopaxi"},
//     {name: "Teasdale"},
//     {name: "Belfair"},
//     {name: "Emory"},
//     {name: "Toftrees"},
//     {name: "Osage"},
//     {name: "Dotsero"},
//     {name: "Muir"},
//     {name: "Nicut"},
//     {name: "Camas"},
//     {name: "Freelandville"},
//     {name: "Romeville"},
//     {name: "Welch"},
//     {name: "Belleview"},
//     {name: "Troy"},
//     {name: "Bladensburg"},
//     {name: "Worton"},
//     {name: "Mappsville"},
//     {name: "Colton"},
//     {name: "Vaughn"},
//     {name: "Boonville"},
//     {name: "Tuskahoma"},
//     {name: "Madrid"},
//     {name: "Garberville"},
//     {name: "Shrewsbury"},
//     {name: "Flintville"},
//     {name: "Harmon"},
//     {name: "Ellerslie"},
//     {name: "Moscow"},
//     {name: "Topaz"},
//     {name: "Marne"},
//     {name: "Laurelton"},
//     {name: "Worcester"},
//     {name: "Advance"},
//     {name: "Sterling"},
//     {name: "Irwin"},
//     {name: "Chesterfield"},
//     {name: "Conestoga"},
//     {name: "Wikieup"},
//     {name: "Hampstead"},
//     {name: "Brule"},
//     {name: "Warren"},
//     {name: "Springville"},
//     {name: "Noblestown"},
//     {name: "Saranap"},
//     {name: "Frierson"},
//     {name: "Kilbourne"},
//     {name: "Cliffside"},
//     {name: "Jacksonwald"}
//   ]
// );

// function timeout(tim) {
//   let count = tim.length;

//   let y = setInterval(function tick() {
//     console.log(tim[tim.length - count].name);
//     count--;
//     if (count <= 0) clearInterval(y);
//   }, 100); // поставил 0.1 сек, что бы быстрей выполнялось
// }
// timeout(JSON.parse(arrJson));

// ======================================= Вариант 2 =======================================
// let requestURL = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();

// request.onload = function() {
//   let superHeroes = request.response;
//   let arr = superHeroes.map(item => item.name);

//   function timeout(tim) {
//     let count = tim.length;

//     setTimeout(function tick() {
//       console.log(tim[tim.length - count]);
//       count--;
//       if (count > 0) setTimeout(tick, 100) // поставил 0.1 сек, что бы быстрей выполнялось
//     }, 0);
//   }
//   timeout(arr);
// }

// ==================================================================== ЗАДАЧА 4 ====================================================================
/* 
  задача 4
  написать экранные часы https://prnt.sc/qpuapikyE8mb
  время должно актуализироваться каждую секунду
*/
// ======================================= Вариант 1 =======================================
// let body = document.querySelector('body');
// let newElement = document.createElement('div');

// newElement.style = 'padding: 20px; font-size: 20px;';
// body.append(newElement);

// const check = value => value < 10 ? `0${value}` : value; 

// function timeout() {
//   function tick() {
//     newElement.textContent = `${check(new Date().getHours())}:${check(new Date().getMinutes())}:${check(new Date().getSeconds())}`;
//   };
//   tick();
//   setInterval(tick, 1000);
// }
// timeout();

// ======================================= Вариант 2 =======================================
// const check = value => value < 10 ? `0${value}` : value; 

// function timeout() {
//   setInterval(function tick() {
//     console.clear();
//     console.log(`${check(new Date().getHours())}:${check(new Date().getMinutes())}:${check(new Date().getSeconds())}`);
//   }, 1000);
// }
// timeout();

