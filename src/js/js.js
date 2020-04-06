let burgerbtn = document.querySelector('.header__burder-menu-span'),
	closebtn = document.querySelector('.burder-close-icon'),
	burgertoggle = document.querySelector('.bd-modal-burger');

burgerbtn.onclick = function(){
	burgertoggle.style.display = 'block';
};
closebtn.onclick = function(){
	burgertoggle.style.display = 'none';
};

