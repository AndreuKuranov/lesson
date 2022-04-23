/* eslint-disable no-console */

/* Создание анимированного сайта - занятие 9 */

// ==================================================================== ЗАДАЧА 1 ====================================================================
let modal = document.createElement('div');
modal.classList.add('lesson__modal');

let modalText = document.createElement('div');

let closeDiv = document.createElement('div');
closeDiv.classList.add('lesson__close');

let modalWraooerBtn = document.createElement('div');
modalWraooerBtn.classList.add('lesson__modal--button');

let modalBtn = document.createElement('button');
modalBtn.classList.add('lesson__button');
modalBtn.textContent = 'X';
modalBtn.type = 'button';

modalWraooerBtn.append(modalBtn)
modal.append(modalWraooerBtn, modalText)
document.body.append(modal, closeDiv);

closeDiv.onclick = (e) => {
  modal.classList.remove('lesson__modal--display');
  closeDiv.classList.remove('lesson__modal--display');
}
modalBtn.onclick = (e) => {
  modal.classList.remove('lesson__modal--display');
  closeDiv.classList.remove('lesson__modal--display');
}
// ====================================================================

const array = [
  {
    input: { type: 'text', id: 'name', name: 'name', tabIndex: '1', title: 'name', valid: false, },
    label: { textContent: 'name', htmlFor: 'name', error: 'Не корректные данные', }
  },
  {
    input: { type: 'text', id: 'lastname', name: 'lastname', tabIndex: '2', title: 'lastname', valid: false, },
    label: { textContent: 'lastname', htmlFor: 'lastname', error: 'Не корректные данные', }
  },
  {
    input: { type: 'number', id: 'age', name: 'age', tabIndex: '3', title: 'age', valid: false, },
    label: { textContent: 'age', htmlFor: 'age', error: 'Не корректные данные', }
  },
  {
    input: { type: 'textarea', id: 'message', name: 'message', tabIndex: '4', title: 'message', valid: false, },
    label: { textContent: 'message', htmlFor: 'message', error: 'Сообщение должно содержать не менее 15 символов', }
  }
];

let form = document.createElement('form');
form.classList.add('lesson__form');
form.action = '/';
form.method = 'post';
document.body.append(form);

function getListContent(arr) {
  let fragment = new DocumentFragment();

  for(let item of arr) {
    let div = document.createElement('div');
    div.classList.add('lesson__item');
    form.append(div);

    let label = document.createElement('label');
    label.classList.add('lesson__label');
    label.textContent = item.label.textContent;
    label.htmlFor = item.label.htmlFor;

    let input = (item.input.type === 'textarea') ? document.createElement('textarea') : document.createElement('input');
    input.classList.add('lesson__input');
    if (item.input.type !== 'textarea') input.type = item.input.type;
    input.id = item.input.id;
    input.name = item.input.name;
    input.tabIndex = item.input.tabIndex;
    input.title = item.input.title;
    if (item.input.type === 'textarea') input.minLength = item.input.minLength;
    div.append(label, input)

    fragment.append(div);
  }

  return fragment;
}
form.append(getListContent(array));

let wrapper = document.createElement('div');
wrapper.classList.add('lesson__wrapper');

let buttonReset = document.createElement('button');
buttonReset.classList.add('lesson__button');
buttonReset.textContent = 'Reset'
buttonReset.type = 'reset';
buttonReset.dataset.button = 'reset';

let button = document.createElement('button');
button.classList.add('lesson__button');
button.textContent = 'Отправить'
button.type = 'button';
button.dataset.button = 'submit';

wrapper.append(buttonReset, button);
form.append(wrapper);

const nameValid = new RegExp('^[A-Za-zА-Яа-яЁё]+$');
const ageValid = new RegExp('^[0-9]+$');
const minLength = 15;

// По хорошему, наверное (я точно не уверен), не event надо передавать, а значение, то есть создать переменную ей присвоить значение из ивента и уже прокидывать переменную 
const labelClass = (element, e) => element.querySelector(`label[for=${e.target.id}]`);
const validTest = (valid, e) => valid.test(String(e.target.value));
const checkMinLength = (valid, e) => e.target.value.length >= valid;
const idCheck = (id, e) => e.target.id === id;

const errorValid = (element, e, valid) => {
  if (valid) {
    labelClass(element, e).classList.remove('lesson__label--error');
    labelClass(element, e).classList.add('lesson__label--ok');

    array.forEach(item => {
      if (item.input.id === e.target.id) item.input.valid = true;
      if (item.label.htmlFor === e.target.id) labelClass(element, e).textContent = item.label.textContent; // значение по умолчанию
    });
  } else {
    labelClass(element, e).classList.remove('lesson__label--ok');
    labelClass(element, e).classList.add('lesson__label--error');

    array.forEach(item => {
      if (item.input.id === e.target.id) item.input.valid = false;
    });

    if (String(e.target.value).length === 0) {
      labelClass(element, e).textContent = 'Поле не может быть пустым'
    } else {
      array.forEach(item => {
        if (item.label.htmlFor === e.target.id) labelClass(element, e).textContent = item.label.error; // текст для каждого поля может отличатся, поэтому значения беру из объекта 
      });
    }
  }
}

let arrInput = form.querySelectorAll('.lesson__input');
let arrLabel = form.querySelectorAll('.lesson__label');

const resetForm = (inputArr, labelArr) => {
  Array.from(inputArr).forEach(item => {
    item.value = '';
  });
  Array.from(labelArr).forEach(item => {
    ['lesson__label--top', 'lesson__label--ok', 'lesson__label--error'].forEach(i => item.classList.remove(i));
    array.forEach(i => {
      i.input.valid = false;
      if (i.label.htmlFor === item.htmlFor) item.textContent = i.label.textContent;
    })
  });
}

const checkInput = (element, e) => {
  if (idCheck('name', e) || idCheck('lastname', e)) {
    errorValid(element, e, validTest(nameValid, e));
  }
  if (idCheck('age', e)) {
    errorValid(element, e, validTest(ageValid, e));
  }
  if (idCheck('message', e)) {
    errorValid(element, e, checkMinLength(minLength, e));
  }
}

const messageUser = () => {
  if (array.every(item => item.input.valid === true)) {
    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');

    modal.classList.add('lesson__modal--display');
    closeDiv.classList.add('lesson__modal--display');

    modalText.textContent = `Спасибо ${name.value} ${lastname.value}, Ваше сообщение принято!`

    let x = {};
    for (let i of arrInput) {
      x[i.id] = i.value
    }
    console.log(JSON.stringify(x));

    resetForm(arrInput, arrLabel);
  } else {
    for (let item of array) {
      if (item.input.valid === false) {
        Array.from(arrInput).forEach( i => {
          if (i.id === item.input.id) i.focus();
        });
        break
      }
    }
  }
}

// можно и через просто focus/blur, но тогда придется вешать на каждый инпут обработчик
form.addEventListener('focusin', function(e) {
  if (e.target.className === 'lesson__input') {
    labelClass(this, e).classList.add('lesson__label--top');
  }

  checkInput(this, e);
});

form.addEventListener('focusout', function(e) {
  if (e.target.className === 'lesson__input' && String(e.target.value).length === 0) {
    labelClass(this, e).classList.remove('lesson__label--top');
  }
});

form.addEventListener('input', function(e) {
  checkInput(this, e);
});

// клик сделал тоже через делегирование, в данном случае думаю уместно, т.к. кнопки в отдельном контейнере и событие не будет срабатывать при каждом клике по форме  
wrapper.addEventListener('click', function(e) {
  if (e.target.dataset.button === 'reset') { 
    resetForm(arrInput, arrLabel);
  }
  if (e.target.dataset.button === 'submit') {
    messageUser();
  }
});
