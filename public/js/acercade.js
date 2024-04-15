const navBoton = document.querySelector(".nav__menu");
const navLink = document.querySelector(".nav__link");
const navBotonClose = document.querySelector('.nav__close');

navBotonClose.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

navBoton.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

const content = document.getElementById("backgroundIMG");
// console.log(content);

const aboutIMG = [
	"public/img/slideabout.jpg",
	"public/img/slideaboutC.jpeg",
	"public/img/slideaboutB.jpg",
	"public/img/slideaboutA.jpg"
];
// console.log(aboutIMG);
let slideIndex = 0;

content.style.backgroundImage = `url(${aboutIMG[3]})`;
// function slide() {
// 	for (let i = 0; i<aboutIMG.length; i++) {
// 		content[0].style.backgroundImage = aboutIMG[i]
// 	}

// 	slideIndex++;
// 	if(slideIndex > aboutIMG.length){slideIndex=0};
// 	content[0].style.backgroundImage = aboutIMG[slideIndex-1]
// }
function slide() {
	// let con = content[0];
	for (let i = 0; i < aboutIMG.length; i++) {
		content.style.backgroundImage =  `url(${aboutIMG[i]})`;
	}

	slideIndex++;
	if(slideIndex > aboutIMG.length){slideIndex=1};
	content.style.backgroundImage =`url(${aboutIMG[slideIndex-1]})`;
};
setInterval(slide, 6000);

let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());