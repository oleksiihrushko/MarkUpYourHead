let burgerbtn = document.querySelector('.header__burder-menu-span'),
  closebtn = document.querySelector('.burder-close-icon'),
  burgertoggle = document.querySelector('.bd-modal-burger'),
  headermenu = document.querySelector('.header__top-menu'),
  btnlink = document.querySelector('.header__link--burger'),
  nav = document.querySelector('.nav'),
  display = document.querySelector('.display'),
  header__link = document.querySelector('.header__link');

burgerbtn.onclick = function () {
  burgertoggle.style.display = 'block';
  headermenu.style.visibility = 'hidden';
};
closebtn.onclick = function () {
  burgertoggle.style.display = 'none';
  headermenu.style.visibility = 'visible';
  location.reload();
};
btnlink.onclick = function(){
	nav.style.display = 'none';
	btnlink.style.display = 'none';
	display.style.display = 'block';
}
header__link.onclick = function(){
	burgertoggle.style.display = 'block';
	headermenu.style.visibility = 'hidden';
	nav.style.display = 'none';
	display.style.display = 'block';
	btnlink.style.display = 'none';
}