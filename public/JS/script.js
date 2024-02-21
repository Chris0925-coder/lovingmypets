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
	foto: `<img src="public/img/malosoC.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Bonnie & Clyde</h3>
				<span class="item__role">Se cuenta que hay actualmente entre 10.000 y 15.000 ejemplares en libertad.
				</span>
			</figcaption>`,
	fotoA: `<img src="public/img/malososB.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Bonnie & Clyde</h3>
				<span class="item__role">Afortunadamente, se reporta que el perico verde es una especie clasificada como de preocupación menor.
				</span>
			</figcaption>`,
	fotoB: `<img src="public/img/malosoE.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Bonnie & Clyde</h3>
				<span class="item__role">Sin embargo, la tala de árboles, la minería ilegal, la construcción de poblados, los incendios forestales y la captura para el tráfico ilegal como mascotas disminuyó su población en estado salvaje, haciendo que en un posible futuro, la UICN lo clasifique como especie en peligro de extinción.
				</span>
			</figcaption>`,
	fotoC: `<img src="public/img/malososD.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Bonnie & Clyde</h3>
				<span class="item__role">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</span>
			</figcaption>`,
	fotoD: `<img src="public/img/sweethome.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Bonnie & Clyde</h3>
				<span class="item__role">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</span>
			</figcaption>`
	},
	{ 	
	foto: `<img src="public/img/blackyA.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">BLACKY</h3>
				<span class="item__role">Cuando perros de distinta raza se mezclan, su descendencia manifiesta una amplia variedad de apariencias, algunos se asemejan más a una raza que a otra, mientras que algunos otros exhiben claramente características de ambas.
				</span>
			</figcaption>`,
	fotoA: `<img src="public/img/blackyB.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">BLACKY</h3>
				<span class="item__role">Un perro mestizo o de raza mixta es un perro que no pertenece a ninguna raza reconocida por organizaciones de criadores y que es resultado de una crianza no selectiva.
				</span>
						</figcaption>`,
	fotoB: `<img src="public/img/blackyC.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">BLACKY</h3>
				<span class="item__role">Si los ejemplares se siguen entrecruzando, en las generaciones posteriores poco a poco se irán homogenizando sus características hasta llegar a un aspecto más o menos similar.
				</span>
			</figcaption>`,
	fotoC: `<img src="public/img/blackyD.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">BLACKY</h3>
				<span class="item__role">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</span>
			</figcaption>`
	},
	{ 	
	foto: `<img src="public/img/ladyB.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">En Honduras y El Salvador son muy comunes llamándoles "Aguacateros", en Costa Rica se les conoce como “Zaguates”, en Guatemala como "chuchos", en Ecuador como "runas", en Chile como "quiltros", en Venezuela y Colombia se les llama "criollos", en Panamá se les conoce como “tinaqueros” o "sin raza definida (SRD)".
				</span>
			</figcaption>`,
	fotoA: `<img src="public/img/ladyC.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">La "Raza aleatoria" es un término genético para referirse a un animal, población, o raza que se crio y desarrolló sin la intervención planificada de los seres humanos, y cuyo ancestro y composición son generalmente desconocidos.
				</span>
			</figcaption>`,
	fotoB: `<img src="public/img/ladyD.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">En Perú coloquialmente como "chuscos", "cruzados" o "de raza mixta", en República Dominicana como “viralatas" y en Cuba y Puerto Rico, como "perros satos", los cuales también son muy comunes en las calles, como consecuencia de la falta de leyes para la protección animal en la isla caribeña y en general, en toda América latina.
				</span>
			</figcaption>`,
	fotoC: `<img src="public/img/ladyA.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</span>
			</figcaption>`,
	fotoD: `<img src="public/img/ladyE.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</span>
			</figcaption>`,
	fotoE: `<img src="public/img/ladyF.jpg" alt="#" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</span>
			</figcaption>`
	},
	{ 	
	foto: `<img src="public/img/pakaA.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">PAKA</h3>
				<span class="item__role">
					 Aunque su lenguaje corporal es el mismo, las amazonas panameñas son mucho menos propensas a volverse físicamente agresivas. Muchos otros loros amazónicos se venden erróneamente como amazonas de Panamá, debido a su escasez y popularidad.
				</span>
			</figcaption>`,
	fotoA: `<img src="public/img/pakaB.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">PAKA</h3>
				<span class="item__role">Las amazonas panameñas son extremadamente juguetonas, pueden ser excelentes conversadoras y tienden a ser ruidosas a veces.
				</span>
			</figcaption>`,
	fotoB: `<img src="public/img/pakaC.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">PAKA</h3>
				<span class="item__role">
					Los adultos miden aproximadamente 35 centímetros (13,8 pulgadas).
				</span>
			</figcaption>`,
	fotoC: `<img src="public/img/pakaD.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">PAKA</h3>
				<span class="item__role">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</span>
			</figcaption>`,
	fotoD: `<img src="public/img/pakaE.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">PAKA</h3>
				<span class="item__role">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</span>
			</figcaption>`,
	fotoE: `<img src="public/img/pakaF.jpg" alt="Loro" class="item__image">
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
		<blockquote class="content__secondary"><p>Se denomina perro mestizo al perro sin pedigrí, cuya ascendencia es generalmente desconocida, pero se sabe que tiene características de dos o más tipos de razas, o es descendiente de poblaciones de perros salvajes o callejeros.</p><cite><a href="https://es.wikipedia.org/wiki/Perro_mestizo">Wikipedia</a></cite></blockquote>

	`,
	lady:
	`
	<span class="content__primary" id="titulo__A">LADY</span>
		<blockquote class="content__secondary"><p>Se denomina perro mestizo al perro sin pedigrí, cuya ascendencia es generalmente desconocida, pero se sabe que tiene características de dos o más tipos de razas, o es descendiente de poblaciones de perros salvajes o callejeros.</p><cite><a href="https://es.wikipedia.org/wiki/Perro_mestizo">Wikipedia</a></cite></blockquote>

	`,
	paka:
	`
	<span class="content__primary" id="titulo__A">The Panama amazon</span>
		<blockquote class="content__secondary"><p>La amazona de Panamá, también conocida como amazona de cabeza amarilla de Panamá, (Amazona ochrocephala panamensis) es una subespecie de la amazona de corona amarilla, y es endémica de Panamá (incluidas las Islas de las Perlas y Coiba) y el noroeste de Colombia.  En avicultura, a veces se enumera como una especie separada (Amazona panamensis), y esto es potencialmente correcto; al menos como especie filogenética.</p><cite><a href="https://en.wikipedia.org/wiki/Panama_amazon" target="_blank">Wikipedia</a></cite></blockquote>

	`
};




// console.log(galLeng);
let items = Object.values (galleryItems[0]);
// console.log(items);





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

let boton = document.querySelector('.button__sliders');
let sliderBoton = [
	`<button class="slide"></button>`,
	`<button class="slideA"></button>`,
	`<button class="slideB"></button>`,
	`<button class="slideC"></button>`,
	`<button class="slideD"></button>`,
	`<button class="slideE"></button>`
	];

// let bb = sliderBoton.slice(',');
// [0]
// let v = document.createElement('div');
// let x = v.append(sliderBoton[1]);
// innerHTML
boton.innerHTML = sliderBoton[0] + sliderBoton[1] + sliderBoton[2] + sliderBoton[3] + sliderBoton[4] + sliderBoton[5];

// boton.append(b);
// console.log(bb);
// let a = `<button class="slide"></button>`;
// document.boton.append(`<button class="slide"></button>`);
// console.log(v.innerText);
boton.children[1].style.opacity = "0.2";
boton.children[3].style.display = "none";
boton.children[4].style.display = "none";
boton.children[5].style.display = "none";

boton.children[0].addEventListener('click', () => {

	boton.children[0].style.opacity = 0.2;
	boton.children[1].style.opacity = 1;
	boton.children[2].style.opacity = 1;	
	gallery.innerHTML = galleryItems[0].foto;

});

boton.children[1].addEventListener('click', () => {

	boton.children[1].style.opacity = 0.2;
	boton.children[0].style.opacity = 1;
	boton.children[2].style.opacity = 1;
	gallery.innerHTML = galleryItems[0].fotoA;

});

boton.children[2].addEventListener('click', () => {

	boton.children[2].style.opacity = 0.2;
	boton.children[1].style.opacity = 1;
	boton.children[0].style.opacity = 1;
	gallery.innerHTML = galleryItems[0].fotoB;

});


function QQ(a, c) {
	a.addEventListener('click', () => {
		if(true) {
			boton.children[0].addEventListener('click', () => {

				boton.children[0].style.opacity = 0.2;
				boton.children[1].style.opacity = 1;
				boton.children[2].style.opacity = 1;
				boton.children[3].style.opacity = 1;
				boton.children[4].style.opacity = 1;
				boton.children[5].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].foto;

			});

			boton.children[1].addEventListener('click', () => {

				boton.children[1].style.opacity = 0.2;
				boton.children[0].style.opacity = 1;
				boton.children[2].style.opacity = 1;
				boton.children[3].style.opacity = 1;
				boton.children[4].style.opacity = 1;
				boton.children[5].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].fotoA;

			});

			boton.children[2].addEventListener('click', () => {

				boton.children[2].style.opacity = 0.2;
				boton.children[1].style.opacity = 1;
				boton.children[0].style.opacity = 1;
				boton.children[3].style.opacity = 1;
				boton.children[4].style.opacity = 1;
				boton.children[5].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].fotoB;

			});


			boton.children[3].addEventListener('click', () => {

				boton.children[3].style.opacity = 0.2;
				boton.children[1].style.opacity = 1;
				boton.children[0].style.opacity = 1;
				boton.children[4].style.opacity = 1;
				boton.children[5].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				boton.children[2].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].fotoC;

			});

			boton.children[4].addEventListener('click', () => {

				boton.children[4].style.opacity = 0.2;
				boton.children[1].style.opacity = 1;
				boton.children[0].style.opacity = 1;
				boton.children[3].style.opacity = 1;
				boton.children[2].style.opacity = 1;
				boton.children[5].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].fotoD;

			});

			boton.children[5].addEventListener('click', () => {

				boton.children[5].style.opacity = 0.2;
				boton.children[1].style.opacity = 1;
				boton.children[0].style.opacity = 1;
				boton.children[3].style.opacity = 1;
				boton.children[4].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				boton.children[2].style.opacity = 1;
				gallery.innerHTML = galleryItems[c].fotoE;

			});

			// boton.children[6].addEventListener('click', () => {

			// 	boton.children[6].style.opacity = 0.2;
			// 	boton.children[1].style.opacity = 1;
			// 	boton.children[0].style.opacity = 1;
			// 	boton.children[3].style.opacity = 1;
			// 	boton.children[4].style.opacity = 1;
			// 	boton.children[5].style.opacity = 1;
			// 	boton.children[2].style.opacity = 1;
			// 	gallery.innerHTML = galleryItems[c].fotoB;

			// });
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
	// let slideIndexB = 2;
	prev.addEventListener('click', () => {
			for (i = 0; i < items.length; i++) {
				gallery.innerHTML = items[i];
				boton.children[i].style.opacity = "1";
			}
			slideIndex--;
			if (slideIndex <= 0) {slideIndex = a};
			boton.children[slideIndex-1].style.opacity = "0.2";
			gallery.innerHTML = items[slideIndex-1];
		});

	next.addEventListener('click', () => {
		slideIndex++;
		for (i = 0; i < items.length; i++) {
			gallery.innerHTML = items[i];
			boton.children[i].style.opacity = "1";
		}
		if(slideIndex > items.length) {
		    slideIndex = 1;
		}
		boton.children[slideIndex-1].style.opacity = "0.2";
		gallery.innerHTML = items[slideIndex-1];
	});
};


inicio.addEventListener('click', () => {
	boton.children[3].style.display = "block";
	boton.children[4].style.display = "block";
	boton.children[5].style.display = "none";
	// slideIndex = 0;
 	// slideIndexB = 0;
	items = Object.values (galleryItems[0]);
	prev.style.display = "block";
	next.style.display = "block";
	arrows(5);
	// gallery.style.backgroundColor = "#ffffff00";
	gallery.style.background = 'linear-gradient(336deg, rgb(90 200 90 / 0.7) 0%, rgba(0, 0, 0, 0.0)100%)';
	gallery.innerHTML = begin[0];
	galleryContent.innerHTML = galleryCont.malosos;
	boton.children[1].style.opacity = 0.2;
	boton.children[0].style.opacity = 1;
	boton.children[2].style.opacity = 1;
	boton.children[3].style.opacity = 1;
	boton.children[4].style.opacity = 1;
	// boton.children[5].style.opacity = 1;

});


blacky.addEventListener('click', () => {
	boton.children[3].style.display = "block";
	boton.children[4].style.display = "none";
	boton.children[5].style.display = "none";
	prev.style.display = "block";
	next.style.display = "block";
	items = Object.values (galleryItems[1]);
	arrows(4);
	// gallery.style.backgroundColor = "#654321";
	gallery.style.background = 'linear-gradient(336deg, #654321 0%, rgba(0, 0, 0, 0.0)100%)';
	gallery.innerHTML = begin[1];
	galleryContent.innerHTML = galleryCont.blacky;
	boton.children[1].style.opacity = 0.2;
	boton.children[0].style.opacity = 1;
	boton.children[2].style.opacity = 1;
	boton.children[3].style.opacity = 1;
});

lady.addEventListener('click', () => {
	boton.children[3].style.display = "block";
	boton.children[4].style.display = "block";
	boton.children[5].style.display = "block";
	// slideIndex = 0;
 	// slideIndexB = 0;
	prev.style.display = "block";
	next.style.display = "block";
	items = Object.values (galleryItems[2]);
	arrows(6);
	// gallery.style.backgroundColor = "#404040";
	gallery.style.background = 'linear-gradient(336deg, #404040 0%, rgba(0, 0, 0, 0.0)100%)';
	gallery.innerHTML = begin[2];
	galleryContent.innerHTML = galleryCont.lady;
	boton.children[1].style.opacity = 0.2;
	boton.children[0].style.opacity = 1;
	boton.children[2].style.opacity = 1;
	boton.children[3].style.opacity = 1;
	boton.children[4].style.opacity = 1;
	boton.children[5].style.opacity = 1;

});

paka.addEventListener('click', () => {
	boton.children[3].style.display = "block";
	boton.children[4].style.display = "block";
	boton.children[5].style.display = "block";
	prev.style.display = "block";
	next.style.display = "block";
	items = Object.values (galleryItems[3]);
	arrows(6);
	// gallery.style.backgroundColor = "#ffffff00";
	gallery.style.background = 'linear-gradient(336deg, rgb(90 200 90 / 0.7) 0%, rgba(0, 0, 0, 0.0)100%)';
	gallery.innerHTML = begin[3];
	galleryContent.innerHTML = galleryCont.paka;
	boton.children[1].style.opacity = 0.2;
	boton.children[0].style.opacity = 1;
	boton.children[2].style.opacity = 1;
	boton.children[3].style.opacity = 1;
	boton.children[4].style.opacity = 1;
	boton.children[5].style.opacity = 1;

});
// if (f) {
// gallery.style.backgroundColor = "none";
// } else if (k) {
// 	gallery.innerHTML = begin[2];
// } else {
	gallery.innerHTML = begin[0];
	galleryContent.innerHTML = galleryCont.malosos;
// };

let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());