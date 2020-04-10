'use strict';

var burgerbtn = document.querySelector('.header__burder-menu-span'),
  closebtn = document.querySelector('.burder-close-icon'),
  burgertoggle = document.querySelector('.bd-modal-burger'),
  headermenu = document.querySelector('.header__top-menu'),
  btnlink = document.querySelector('.header__link--burger'),
  nav = document.querySelector('.nav'),
  display = document.querySelector('.display'),
  header__link = document.querySelector('.header__link'),
  registration__form = document.querySelector('.registration__form-btn');

burgerbtn.onclick = function () {
  burgertoggle.style.display = 'block';
  headermenu.style.visibility = 'hidden';
};

closebtn.onclick = function () {
  burgertoggle.style.display = 'none';
  headermenu.style.visibility = 'visible';
};

btnlink.onclick = function () {
  nav.style.display = 'none';
  btnlink.style.display = 'none';
  display.style.display = 'block';
};

header__link.onclick = function () {
  burgertoggle.style.display = 'block';
  headermenu.style.visibility = 'hidden';
  nav.style.display = 'none';
  display.style.display = 'block';
  btnlink.style.display = 'none';
};

var form = document.querySelector('.form');

registration__form.onclick = function () {
  var formdata = new FormData(form);

  if (document.querySelector('.registration__form-input--name').value === '') {
    alert('Введите свое имя');
  } else if (
    document.querySelector('.registration__form-input--tell').value === ''
  ) {
    alert('Введите свой телефон');
  } else {
    ajaxPost(formdata);
  }
};

function ajaxPost(params) {
  var request = new XMLHttpRequest();

  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      if (request.responseText == 1) {
        document.querySelector('#result').innerHTML =
          'Спасибо, мы вам перезвоним вам в течение 10 минут';
        document.querySelector('#result').style.color = 'green';
        document.querySelector('#result').style.fontSize = '30px';
        registration__form.style.display = 'none';
        form.style.display = 'none';
      } else {
        document.querySelector('#result').innerHTML =
          'Заказ не прошел, повторите пожалуйста действия';
        document.querySelector('#result').style.color = 'red';
        document.querySelector('#result').style.fontSize = '20px';
      }
    }
  };

  request.open('POST', 'info.php');
  request.send(params);
}
