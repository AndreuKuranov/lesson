/* Создание анимированного сайта - занятие 4 */

/* 
    задача 1
    Исправьте функцию, теряющую "this"
    Исправьте последнюю строку, чтобы работало, других строк менять не надо
*/
// ======================================= Вариант 1 =======================================
function askPassword(ok, fail) {
  let password = prompt("Password?", '');
  (password === "rockstar") ? ok() : fail();
}

let user = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// ======================================= Вариант 2 =======================================
// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   (password === "rockstar") ? ok() : fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     console.log(`${this.name} logged in`);
//   },

//   loginFail() {
//     console.log(`${this.name} failed to log in`);
//   },
// };

// for (let key in user) {
//     if (typeof user[key] == 'function') {
//         user[key] = user[key].bind(user);
//     }
// }

// askPassword(user.loginOk, user.loginFail);