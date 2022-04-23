/* Создание анимированного сайта - занятие 3 */

/* 
    задача 1
    Создайте функцию-конструктор Circle, который создаёт объекты с тремя методами:
    - read() запрашивает значение радиуса при помощи prompt и сохраняет его значение в свойство объекта.
    - square() возвращает площадь окружности
    - length() возвращает длину окружности
*/
// function Circle() {
//     this.read = function() {
//         this.radius = +prompt('Радиус?', '')
//     };
//     this.square = function() {
//         return `Площадь окружности = ${(this.radius ** 2 * Math.PI).toFixed(2)}`;
//     };
//     this.lengthR = function() {
//         return `Длина окружности = ${(2 * Math.PI * this.radius).toFixed(2)}`;
//     };
// }

// let circle = new Circle();
// circle.read();

// console.log( circle.square() );
// console.log( circle.lengthR() );

/*
    задача 2
    Написать функцию подсчета суммы с использование каррирования для бесконечного количества аргументов:
    Пример вызова:
    sum(1)(2)(3)(4)(5)(19)
*/

// ======================================= Вариант 1 =======================================
// const check = (arr) => arr.length > 0 ? arr.reduce((velue, item) => velue += item) : 0; 

// function sum(a = 0, ...args) {
//     let count = 0;
//     count += a + check(args);

//     function wrapper(b = 0, ...args2) {
//         count += b + check(args2);
//         return wrapper;
//     }

//     wrapper.valueOf = function() {
//         return count;
//     };

//     return wrapper;
// }

// console.log( +sum(1, -5, -2)(3) ); // -3
// console.log( +sum()(-1)(5)(-4) ); // 0
// console.log( +sum(6)(-1)(-2, 4, 6, 1)()(1) ); // 15
// console.log( +sum(0)(1)(2)()(4)(5, 5) ); // 17

// ======================================= Вариант 2 =======================================

// const infiniteCurry = (fn, seed) => {
//     const reduceValue = (args, seedValue) =>
//         args.reduce((acc, a) => fn.call(fn, acc, a), seedValue);

//         const next = (...args) => {
//             return (...x) => {
//                 if (!x.length) {
//                     return reduceValue(args, seed);
//                 }
//                 return next(...args, reduceValue(x, seed));
//             };
//         };
//     return next();
// };

// const iSum = infiniteCurry((x, y) => x + y, 0);

// console.log(iSum(1)(3)(5)(7, 8, 9)());
// console.log(iSum(1)(3, 4)(5, 6, 7)(8)());
// console.log(iSum(1)(3, 4)(5, 6)(7, 8, 9)());