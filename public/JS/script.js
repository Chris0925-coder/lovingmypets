const gallery = document.querySelector('.gallery__item');
const blacky = document.getElementById("blacky");
const lady = document.getElementById("lady");
const paka = document.getElementById("paka");
const inicio = document.getElementById("inicio");
const galleryContent = document.querySelector(".gallery__content--titulo");


let galleryItems = [{
	foto: `<img src="public/img/malosoC.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoA: `<img src="public/img/malososA.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoB: `<img src="public/img/malososB.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`},
	{ 	
	foto: `<img src="public/img/blackyA.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoA: `<img src="public/img/blackyB.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoB: `<img src="public/img/blackyC.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`},
	{ 	
	foto: `<img src="public/img/ladyB.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoA: `<img src="public/img/ladyC.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoB: `<img src="public/img/ladyD.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`
	},
	{ 	
	foto: `<img src="public/img/pakaA.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoA: `<img src="public/img/pakaB.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoB: `<img src="public/img/pakaC.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`
}];

let galleryCont = {
	malosos:
	`
	<span class="content__primary" id="titulo__A">MALOSOS</span>
			      <span class="content__secondary"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			      consequat.</p></span>

	`,
	blacky:
	`
	<span class="content__primary" id="titulo__A">BLACKY</span>
			      <span class="content__secondary"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			      consequat.</p></span>

	`,
	lady:
	`
	<span class="content__primary" id="titulo__A">LADY</span>
			      <span class="content__secondary"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			      consequat.</p></span>

	`,
	paka:
	`
	<span class="content__primary" id="titulo__A">PAKA</span>
			      <span class="content__secondary"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
			      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
			      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
			      consequat.</p></span>

	`
};



// console.log(galleryItems);
const begin = [
	galleryItems[0].fotoA,
	galleryItems[1].fotoA,
	galleryItems[2].fotoA,
	galleryItems[3].fotoA
];
// gallery.appendChild(galleryItems.foto);
// boton[0].children[1].style.opacity = 0.2;
// let i = gallery.innerHTML = begin[0];
// galleryItems.style.zIndex = -1;

const boton = document.getElementsByClassName('button__sliders');

boton[0].children[1].style.opacity = 0.2;

boton[0].children[0].addEventListener('click', () => {

	boton[0].children[0].style.opacity = 0.2;
	boton[0].children[1].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;
	gallery.innerHTML = galleryItems[0].foto;

});

boton[0].children[1].addEventListener('click', () => {

	boton[0].children[1].style.opacity = 0.2;
	boton[0].children[0].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;
	gallery.innerHTML = galleryItems[0].fotoA;

});

boton[0].children[2].addEventListener('click', () => {

	boton[0].children[2].style.opacity = 0.2;
	boton[0].children[1].style.opacity = 1;
	boton[0].children[0].style.opacity = 1;
	gallery.innerHTML = galleryItems[0].fotoB;

});


function QQ(a, c) {
	a.addEventListener('click', () => {
		if(true) {
			boton[0].children[0].addEventListener('click', () => {

				boton[0].children[0].style.opacity = 0.2;
				boton[0].children[1].style.opacity = 1;
				boton[0].children[2].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].foto;

			});

			boton[0].children[1].addEventListener('click', () => {

				boton[0].children[1].style.opacity = 0.2;
				boton[0].children[0].style.opacity = 1;
				boton[0].children[2].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].fotoA;

			});

			boton[0].children[2].addEventListener('click', () => {

				boton[0].children[2].style.opacity = 0.2;
				boton[0].children[1].style.opacity = 1;
				boton[0].children[0].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].fotoB;

			});
		}
	})
};

QQ(inicio, 0);
QQ(blacky, 1);
QQ(lady, 2);
QQ(paka, 3);

inicio.addEventListener('click', () => {
	gallery.innerHTML = begin[0];
	galleryContent.innerHTML = galleryCont.malosos;
	boton[0].children[1].style.opacity = 0.2;
	boton[0].children[0].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;
});

blacky.addEventListener('click', () => {
	gallery.innerHTML = begin[1];
	galleryContent.innerHTML = galleryCont.blacky;
	boton[0].children[1].style.opacity = 0.2;
	boton[0].children[0].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;
});

lady.addEventListener('click', () => {
	gallery.innerHTML = begin[2];
	galleryContent.innerHTML = galleryCont.lady;
	boton[0].children[1].style.opacity = 0.2;
	boton[0].children[0].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;
});

paka.addEventListener('click', () => {
	gallery.innerHTML = begin[3];
	galleryContent.innerHTML = galleryCont.paka;
	boton[0].children[1].style.opacity = 0.2;
	boton[0].children[0].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;
});
// if (f) {
	
// } else if (k) {
// 	gallery.innerHTML = begin[2];
// } else {
	gallery.innerHTML = begin[0];
	galleryContent.innerHTML = galleryCont.malosos;
// };