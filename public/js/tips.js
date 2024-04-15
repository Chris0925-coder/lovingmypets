const navBoton = document.querySelector(".nav__menu");
const navLink = document.querySelector(".nav__link");
const navBotonClose = document.querySelector('.nav__close');

navBotonClose.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

navBoton.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});



let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());