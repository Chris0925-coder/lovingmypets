const gallery = document.querySelector('.gallery__item');
const blacky = document.getElementById("blacky");
const lady = document.getElementById("lady");
const paka = document.getElementById("paka");
const inicio = document.getElementById("inicio");
const galleryContent = document.querySelector(".gallery__content--titulo");
const navBoton = document.querySelector(".nav__menu");
const navLink = document.querySelector(".nav__link");
const navBotonClose = document.querySelector('.nav__close');
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

navBotonClose.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

navBoton.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");

});

let galleryItems = [{
	foto: `<img src="public/img/malosoC.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">Bonnie & Clyde</h3>
							<span class="item__role">Se cuenta que hay actualmente entre 10.000 y 15.000 ejemplares en libertad.
							</span>
						</figcaption>`,
	fotoA: `<img src="public/img/malososB.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">Bonnie & Clyde</h3>
							<span class="item__role">Afortunadamente, se reporta que el perico verde es una especie clasificada como de preocupación menor.
							</span>
						</figcaption>`,
	fotoB: `<img src="public/img/malosoE.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">Bonnie & Clyde</h3>
							<span class="item__role">Sin embargo, la tala de árboles, la minería ilegal, la construcción de poblados, los incendios forestales y la captura para el tráfico ilegal como mascotas disminuyó su población en estado salvaje, haciendo que en un posible futuro, la UICN lo clasifique como especie en peligro de extinción.
							</span>
						</figcaption>`,
	fotoC: `<img src="public/img/malososD.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">Bonnie & Clyde</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoD: `<img src="public/img/sweethome.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">Bonnie & Clyde</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`
	},
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
						</figcaption>`,
	fotoC: `<img src="public/img/blackyD.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`
	},
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
						</figcaption>`,
	fotoC: `<img src="public/img/ladyA.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoD: `<img src="public/img/ladyE.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">LOREM</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoE: `<img src="public/img/ladyF.jpg" alt="#" class="item__image">
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
							<h3 class="item__name">PAKA</h3>
							<span class="item__role">
								 Aunque su lenguaje corporal es el mismo, las amazonas panameñas son mucho menos propensas a volverse físicamente agresivas. Muchos otros loros amazónicos se venden erróneamente como amazonas de Panamá, debido a su escasez y popularidad.
							</span>
						</figcaption>`,
	fotoA: `<img src="public/img/pakaB.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">PAKA</h3>
							<span class="item__role">Las amazonas panameñas son extremadamente juguetonas, pueden ser excelentes conversadoras y tienden a ser ruidosas a veces.
							</span>
						</figcaption>`,
	fotoB: `<img src="public/img/pakaC.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">PAKA</h3>
							<span class="item__role">
								Los adultos miden aproximadamente 35 centímetros (13,8 pulgadas).
							</span>
						</figcaption>`,
	fotoC: `<img src="public/img/pakaD.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">PAKA</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoD: `<img src="public/img/pakaE.jpg" alt="#" class="item__image">
						<figcaption class="item__description">
							<h3 class="item__name">PAKA</h3>
							<span class="item__role">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua.
							</span>
						</figcaption>`,
	fotoE: `<img src="public/img/pakaF.jpg" alt="#" class="item__image">
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
	<span class="content__primary" id="titulo__A">Brotogeris tirica</span>
			      <blockquote class="content__secondary"><p>El periquito verde, catita tirica o perico rico (Brotogeris tirica) es una especie de ave psitaciforme de la familia Psittacidae que se distribuye en Brasil y Bolivia. Su hábitat natural son los bosques tropicales de baja altitud, los bosques montanos y las zonas degradadas. En estado natural, los periquitos verdes tienen una dieta muy variada, pudiendo consumir desde semillas, frutas y flores hasta pequeños insectos y larvas. Su esperanza de vida es de aproximadamente 15 años.</p><cite><a href="https://es.wikipedia.org/wiki/Brotogeris_tirica#:~:text=El%20periquito%20verde%2C%20catita%20tirica%20o%20perico%20rico,altitud%2C%20los%20bosques%20montanos%20y%20las%20zonas%20degradadas." target="_blank">Wikipedia</a></cite></blockquote>

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
	<span class="content__primary" id="titulo__A">The Panama amazon</span>
			      <blockquote class="content__secondary"><p>La amazona de Panamá, también conocida como amazona de cabeza amarilla de Panamá, (Amazona ochrocephala panamensis) es una subespecie de la amazona de corona amarilla, y es endémica de Panamá (incluidas las Islas de las Perlas y Coiba) y el noroeste de Colombia.  En avicultura, a veces se enumera como una especie separada (Amazona panamensis), y esto es potencialmente correcto; al menos como especie filogenética.</p><cite><a href="https://en.wikipedia.org/wiki/Panama_amazon" target="_blank">Wikipedia</a></cite></blockquote>

	`
};




// console.log(galLeng);
let items = Object.values (galleryItems[0]);
console.log(items);





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

// const wrap = document.querySelector('.primary__gallery--wrapper');

function arrows(a) {
	let slideIndex = 2;
	let slideIndexB = 2;
	prev.addEventListener('click', () => {
			// for (i = a; i < items.length; i--) {
			// 	gallery.innerHTML = items[i];
			// }
			slideIndex--;
			if (slideIndex <= 0) {slideIndex = a};
			gallery.innerHTML = items[slideIndex-1];
		});

	next.addEventListener('click', () => {
		slideIndexB++;
		for (i = 0; i < items.length; i++) {
			gallery.innerHTML = items[i];
		}
		if(slideIndexB > items.length) {
		    slideIndexB = 1;
		}
		gallery.innerHTML = items[slideIndexB-1];
	});
};


inicio.addEventListener('click', () => {
	// slideIndex = 0;
 	// slideIndexB = 0;
	items = Object.values (galleryItems[0]);
	prev.style.display = "block";
	next.style.display = "block";
	arrows(5);

	gallery.innerHTML = begin[0];
	galleryContent.innerHTML = galleryCont.malosos;
	boton[0].children[1].style.opacity = 0.2;
	boton[0].children[0].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;

});


blacky.addEventListener('click', () => {
	prev.style.display = "block";
	next.style.display = "block";
	items = Object.values (galleryItems[1]);
	arrows(4);
	gallery.innerHTML = begin[1];
	galleryContent.innerHTML = galleryCont.blacky;
	boton[0].children[1].style.opacity = 0.2;
	boton[0].children[0].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;
});

lady.addEventListener('click', () => {
	// slideIndex = 0;
 	// slideIndexB = 0;
	prev.style.display = "block";
	next.style.display = "block";
	items = Object.values (galleryItems[2]);
	arrows(6);
	gallery.innerHTML = begin[2];
	galleryContent.innerHTML = galleryCont.lady;
	boton[0].children[1].style.opacity = 0.2;
	boton[0].children[0].style.opacity = 1;
	boton[0].children[2].style.opacity = 1;
});

paka.addEventListener('click', () => {
	prev.style.display = "block";
	next.style.display = "block";
	items = Object.values (galleryItems[3]);
	arrows(6);
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