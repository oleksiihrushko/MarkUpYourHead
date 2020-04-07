let burgerbtn = document.querySelector('.header__burder-menu-span'),
	closebtn = document.querySelector('.burder-close-icon'),
	burgertoggle = document.querySelector('.bd-modal-burger'),
	headermenu = document.querySelector('.header-top-menu');

burgerbtn.onclick = function(){
	burgertoggle.style.display = 'block';
	headermenu.style.visibility = 'hidden';
};
closebtn.onclick = function(){
	burgertoggle.style.display = 'none';
	headermenu.style.visibility = 'visible';
};

