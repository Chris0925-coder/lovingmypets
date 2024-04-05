const gallery = document.querySelector('.gallery__item');
const galleryB = document.querySelector('.gallery__itemB');
const galleryC = document.querySelector('.gallery__itemC');
const galleryD = document.querySelector('.gallery__itemD');
// const blacky = document.getElementById("blacky");
// const lady = document.getElementById("lady");
// const paka = document.getElementById("paka");
// const inicio = document.getElementById("inicio");
const galleryContent = document.querySelector(".gallery__content--titulo");
const galleryContentB = document.querySelector(".gallery__content--tituloB");
const galleryContentC = document.querySelector(".gallery__content--tituloC");
const galleryContentD = document.querySelector(".gallery__content--tituloD");
const firstTitle = document.querySelector(".primary__gallery--title");
const firstTitleB = document.querySelector(".primary__gallery--titleB");
const firstTitleC = document.querySelector(".primary__gallery--titleC");
const firstTitleD = document.querySelector(".primary__gallery--titleD");
const rowGal = document.querySelector(".primary__gallery--content");
const rowGalB = document.querySelector(".primary__gallery--contentB");
const rowGalC = document.querySelector(".primary__gallery--contentC");
const rowGalD = document.querySelector(".primary__gallery--contentD");
// const galleryPrimaryB = document.querySelector(".primary__galleryB");
// const ss = rowGalB.querySelector(".item:first-child");
const navBoton = document.querySelector(".nav__menu");
const navLink = document.querySelector(".nav__link");
const navBotonClose = document.querySelector('.nav__close');
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const prevB = document.querySelector(".prevB");
const nextB = document.querySelector(".nextB");
const prevC = document.querySelector(".prevC");
const nextC = document.querySelector(".nextC");
const prevD = document.querySelector(".prevD");
const nextD = document.querySelector(".nextD");
navBotonClose.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

navBoton.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

let title = [
	"PAKA ALEJANDRA",
	"LOS MALOSOS",
	"LADY MARGOT",
	"BLACKY MATEO"
];

let galleryItems = [{
	foto: `<img src="public/img/malososB.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Perico Barbinaranja</h3>
				<h4 class="item__role">
					<span>Brotogeris jugularis</span>
					<span>Orange-chinned Parakeet</span>
				</h4>
			</figcaption>`,
	fotoA: `<img src="public/img/malosoC.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Perico Barbinaranja</h3>
				<h4 class="item__role">
					<span>Brotogeris jugularis</span>
					<span>Orange-chinned Parakeet</span>
				</h4>

			</figcaption>`,
	fotoB: `<img src="public/img/malosoE.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Perico Barbinaranja</h3>
				<h4 class="item__role">
					<span>Brotogeris jugularis</span>
					<span>Orange-chinned Parakeet</span>
				</h4>
			</figcaption>`,
	fotoC: `<img src="public/img/malososD.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Perico Barbinaranja</h3>
				<h4 class="item__role">
					<span>Brotogeris jugularis</span>
					<span>Orange-chinned Parakeet</span>
				</h4>
			</figcaption>`,
	fotoD: `<img src="public/img/sweethome.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Perico Barbinaranja</h3>
				<h4 class="item__role">
					<span>Brotogeris jugularis</span>
					<span>Orange-chinned Parakeet</span>
				</h4>
			</figcaption>`,
	fotoE: `<img src="public/img/bebe.jpg" alt="periquitos verdes" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Perico Barbinaranja</h3>
				<h4 class="item__role">
					<span>Brotogeris jugularis</span>
					<span>Orange-chinned Parakeet</span>
				</h4>
			</figcaption>`		
	},
	{ 	
	foto: `<img src="public/img/blackyA.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">BLACKY</h3>
				<span class="item__role">
				</span>
			</figcaption>`,
	fotoA: `<img src="public/img/blackyB.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">BLACKY</h3>
				<span class="item__role">
				</span>
						</figcaption>`,
	fotoB: `<img src="public/img/blackyC.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">BLACKY</h3>
				<span class="item__role">
				</span>
			</figcaption>`,
	fotoC: `<img src="public/img/blackyD.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">BLACKY</h3>
				<span class="item__role">
				</span>
			</figcaption>`
	},
	{ 	
	foto: `<img src="public/img/ladyB.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
				</span>
			</figcaption>`,
	fotoA: `<img src="public/img/ladyC.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
				</span>
			</figcaption>`,
	fotoB: `<img src="public/img/ladyD.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
				</span>
			</figcaption>`,
	fotoC: `<img src="public/img/ladyA.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
				</span>
			</figcaption>`,
	fotoD: `<img src="public/img/ladyE.jpg" alt="perro mestizo" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
				</span>
			</figcaption>`,
	fotoE: `<img src="public/img/ladyF.jpg" alt="#" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">LADY</h3>
				<span class="item__role">
				</span>
			</figcaption>`
	},
	{ 	
	foto: `<img src="public/img/paka.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Loro Coroniamarillo</h3>
				<h4 class="item__role">
					<span>Amazona ochrocephala</span>
					<span>Yellow-crowned Parrot</span>
				</h4>
			</figcaption>`,
	fotoA: `<img src="public/img/pakaenlarama.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Loro Coroniamarillo</h3>
				<h4 class="item__role">
					<span>Amazona ochrocephala</span>
					<span>Yellow-crowned Parrot</span>
				</h4>
			</figcaption>`,
	fotoB: `<img src="public/img/pakapica.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Loro Coroniamarillo</h3>
				<h4 class="item__role">
					<span>Amazona ochrocephala</span>
					<span>Yellow-crowned Parrot</span>
				</h4>
			</figcaption>`,
	fotoC: `<img src="public/img/ojopaka.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Loro Coroniamarillo</h3>
				<h4 class="item__role">
					<span>Amazona ochrocephala</span>
					<span>Yellow-crowned Parrot</span>
				</h4>
			</figcaption>`,
	fotoD: `<img src="public/img/pakaE.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Loro Coroniamarillo</h3>
				<h4 class="item__role">
					<span>Amazona ochrocephala</span>
					<span>Yellow-crowned Parrot</span>
				</h4>
			</figcaption>`,
	fotoE: `<img src="public/img/pakaD.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Loro Coroniamarillo</h3>
				<h4 class="item__role">
					<span>Amazona ochrocephala</span>
					<span>Yellow-crowned Parrot</span>
				</h4>
			</figcaption>`,
	fotoF: `<img src="public/img/pakaB.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Loro Coroniamarillo</h3>
				<h4 class="item__role">
					<span>Amazona ochrocephala</span>
					<span>Yellow-crowned Parrot</span>
				</h4>
			</figcaption>`,
	fotoG: `<img src="public/img/pakaC.jpg" alt="Loro" class="item__image">
			<figcaption class="item__description">
				<h3 class="item__name">Loro Coroniamarillo</h3>
				<h4 class="item__role">
					<span>Amazona ochrocephala</span>
					<span>Yellow-crowned Parrot</span>
				</h4>
			</figcaption>`,
	// fotoH: `<img src="public/img/.jpg" alt="Loro" class="item__image">
	// 		<figcaption class="item__description">
	// 			<h3 class="item__name">Loro Coroniamarillo</h3>
	// 			<h4 class="item__role">
	// 				<span>Amazona ochrocephala</span>
	// 				<span>Yellow-crowned Parrot</span>
	// 			</h4>
	// 		</figcaption>`
}];

let galleryCont = {
	malosos:
	`
	<span class="content__primary" id="titulo__A">Brotogeris jugularis</span>
		<blockquote class="content__secondary"><p>El periquito bronceado o catita churica (Brotogeris jugularis) es una especie de ave psitaciforme de la familia de los psitácidos extendida por el Neotrópico, desde el sur de México hasta Colombia y Venezuela.</p> 
			<p>Tanto el macho como la hembra adultos tienen un plumaje que va del amarillo verdoso al verde oliva, un toque azul en la corona, una mancha naranja en la garganta, y un toque azul en la parte baja del dorso.</p><cite><a href="https://es.wikipedia.org/wiki/Brotogeris_jugularis" target="_blank">Wikipedia</a></cite></blockquote>

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
	<span class="content__primary" id="titulo__A">Los amazonas o loros amazónicos</span>
		<blockquote class="content__secondary"><p>Son un grupo de psitácidas originarias de las selvas de centroamérica y sudamérica. Además del brillante plumaje y su potente y variada vocalización, se caracterizan por su gran inteligencia. En la naturaleza son animales muy sociales, que viven en grandes bandadas. Como animal de compañía suelen tener un buen temperamento, llegando a ser muy divertidos.</p><br>

			<P><span class="ale">Paka Alejandra</span> llegó a nuestra familia el 2 de abril de 2020. No sabemos con exactitud si es hembra o macho, pero le hemos consentido como si fuese hembra. Paka es muy inteligente y curiosa, le gusta comer de todo (las frutas le encantan), también le gusta cantar, que le hagan piojitos... pero lo que más disfruta es pasear.</p></blockquote>

	`
};

// <span class="content__primary" id="titulo__A">The Panama amazon</span>


// console.log(galLeng);
// let items = Object.values (galleryItems[0]);
// console.log(items);





// console.log(galleryItems);
const begin = [
	galleryItems[0].fotoA,
	galleryItems[1].fotoA,
	galleryItems[2].fotoA,
	galleryItems[3].fotoA
];

// console.log(begin);
// gallery.appendChild(galleryItems.foto);
// boton[0].children[1].style.opacity = 0.2;
// let i = gallery.innerHTML = begin[0];
// galleryItems.style.zIndex = -1;

let boton = document.querySelector('.button__sliders');
let botonB = document.querySelector('.button__slidersB');
let botonC = document.querySelector('.button__slidersC');
let botonD = document.querySelector('.button__slidersD');
let sliderBoton = [
	`<button class="slide"></button>`,
	`<button class="slideA"></button>`,
	`<button class="slideB"></button>`,
	`<button class="slideC"></button>`,
	`<button class="slideD"></button>`,
	`<button class="slideE"></button>`,
	`<button class="slideF"></button>`,
	`<button class="slideG"></button>`
	// `<button class="slideH"></button>`
];

// let bb = sliderBoton.slice(',');
// [0]
// let v = document.createElement('div');
// let x = v.append(sliderBoton[1]);
// innerHTML
boton.innerHTML = sliderBoton[0] + sliderBoton[1] + sliderBoton[2] + sliderBoton[3] + sliderBoton[4] + sliderBoton[5] + sliderBoton[6] + sliderBoton[7];
botonB.innerHTML = sliderBoton[0] + sliderBoton[1] + sliderBoton[2] + sliderBoton[3] + sliderBoton[4] + sliderBoton[5] + sliderBoton[6] + sliderBoton[7];
botonC.innerHTML = sliderBoton[0] + sliderBoton[1] + sliderBoton[2] + sliderBoton[3] + sliderBoton[4] + sliderBoton[5] + sliderBoton[6] + sliderBoton[7];
botonD.innerHTML = sliderBoton[0] + sliderBoton[1] + sliderBoton[2] + sliderBoton[3] + sliderBoton[4] + sliderBoton[5] + sliderBoton[6] + sliderBoton[7];
 // + sliderBoton[8]
// boton.append(b);
// console.log(bb);
// let a = `<button class="slide"></button>`;
// document.boton.append(`<button class="slide"></button>`);
// console.log(v.innerText);
// boton.children[1].style.opacity = "0.2";
// boton.children[3].style.display = "none";
// boton.children[4].style.display = "none";
// boton.children[5].style.display = "none";

// boton.children[0].addEventListener('click', () => {

// 	boton.children[0].style.opacity = 0.2;
// 	boton.children[1].style.opacity = 1;
// 	boton.children[2].style.opacity = 1;	
// 	gallery.innerHTML = galleryItems[3].foto;

// });

// boton.children[1].addEventListener('click', () => {

// 	boton.children[1].style.opacity = 0.2;
// 	boton.children[0].style.opacity = 1;
// 	boton.children[2].style.opacity = 1;
// 	gallery.innerHTML = galleryItems[3].fotoE;

// });

// boton.children[2].addEventListener('click', () => {

// 	boton.children[2].style.opacity = 0.2;
// 	boton.children[1].style.opacity = 1;
// 	boton.children[0].style.opacity = 1;
// 	gallery.innerHTML = galleryItems[3].fotoA;

// });


function QQ(a, c, d) {
// 	a.addEventListener('click', () => {
		// if(true) {
			a.children[0].addEventListener('click', () => {

				a.children[0].style.opacity = 0.2;
				a.children[1].style.opacity = 1;
				a.children[2].style.opacity = 1;
				a.children[3].style.opacity = 1;
				a.children[4].style.opacity = 1;
				a.children[5].style.opacity = 1;
				a.children[6].style.opacity = 1;
				a.children[7].style.opacity = 1;
				// a.children[8].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				d.innerHTML = galleryItems[c].foto;

			});

			a.children[1].addEventListener('click', () => {

				a.children[1].style.opacity = 0.2;
				a.children[0].style.opacity = 1;
				a.children[2].style.opacity = 1;
				a.children[3].style.opacity = 1;
				a.children[4].style.opacity = 1;
				a.children[5].style.opacity = 1;
				a.children[6].style.opacity = 1;
				a.children[7].style.opacity = 1;
				// a.children[8].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				d.innerHTML = galleryItems[c].fotoA;

			});

			a.children[2].addEventListener('click', () => {

				a.children[2].style.opacity = 0.2;
				a.children[1].style.opacity = 1;
				a.children[0].style.opacity = 1;
				a.children[3].style.opacity = 1;
				a.children[4].style.opacity = 1;
				a.children[5].style.opacity = 1;
				a.children[6].style.opacity = 1;
				a.children[7].style.opacity = 1;
				// a.children[8].style.opacity = 1;
				// boton.children[6].style.opacity = 1;
				d.innerHTML = galleryItems[c].fotoB;

			});


			a.children[3].addEventListener('click', () => {

				a.children[3].style.opacity = 0.2;
				a.children[1].style.opacity = 1;
				a.children[0].style.opacity = 1;
				a.children[4].style.opacity = 1;
				a.children[5].style.opacity = 1;
				a.children[6].style.opacity = 1;
				a.children[7].style.opacity = 1;
				// a.children[8].style.opacity = 1;
				// a.children[6].style.opacity = 1;
				a.children[2].style.opacity = 1;
				d.innerHTML = galleryItems[c].fotoC;

			});

			a.children[4].addEventListener('click', () => {

				a.children[4].style.opacity = 0.2;
				a.children[1].style.opacity = 1;
				a.children[0].style.opacity = 1;
				a.children[3].style.opacity = 1;
				a.children[2].style.opacity = 1;
				a.children[5].style.opacity = 1;
				a.children[6].style.opacity = 1;
				a.children[7].style.opacity = 1;
				// a.children[8].style.opacity = 1;
				// a.children[6].style.opacity = 1;
				d.innerHTML = galleryItems[c].fotoD;

			});

			a.children[5].addEventListener('click', () => {

				a.children[5].style.opacity = 0.2;
				a.children[1].style.opacity = 1;
				a.children[0].style.opacity = 1;
				a.children[3].style.opacity = 1;
				a.children[4].style.opacity = 1;
				a.children[6].style.opacity = 1;
				a.children[7].style.opacity = 1;
				// a.children[8].style.opacity = 1;
				// a.children[6].style.opacity = 1;
				a.children[2].style.opacity = 1;
				d.innerHTML = galleryItems[c].fotoE;

			});

			a.children[6].addEventListener('click', () => {

				a.children[5].style.opacity = 1;
				a.children[1].style.opacity = 1;
				a.children[0].style.opacity = 1;
				a.children[3].style.opacity = 1;
				a.children[4].style.opacity = 1;
				a.children[6].style.opacity = 0.2;
				a.children[7].style.opacity = 1;
				// a.children[8].style.opacity = 1;
				// a.children[6].style.opacity = 1;
				a.children[2].style.opacity = 1;
				d.innerHTML = galleryItems[c].fotoF;

			});

			a.children[7].addEventListener('click', () => {

				a.children[5].style.opacity = 1;
				a.children[1].style.opacity = 1;
				a.children[0].style.opacity = 1;
				a.children[3].style.opacity = 1;
				a.children[4].style.opacity = 1;
				a.children[6].style.opacity = 1;
				a.children[7].style.opacity = 0.2;
				// a.children[8].style.opacity = 1;
				// a.children[6].style.opacity = 1;
				a.children[2].style.opacity = 1;
				d.innerHTML = galleryItems[c].fotoG;

			});

			// a.children[8].addEventListener('click', () => {

			// 	a.children[5].style.opacity = 1;
			// 	a.children[1].style.opacity = 1;
			// 	a.children[0].style.opacity = 1;
			// 	a.children[3].style.opacity = 1;
			// 	a.children[4].style.opacity = 1;
			// 	a.children[6].style.opacity = 1;
			// 	a.children[7].style.opacity = 1;
				// a.children[8].style.opacity = 0.2;
				// a.children[6].style.opacity = 1;
			// 	a.children[2].style.opacity = 1;
			// 	d.innerHTML = galleryItems[c].fotoH;

			// });

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
		// }
	// })
};

QQ(boton, 3, gallery);
QQ(botonB, 2, galleryB);
QQ(botonC, 0, galleryC);
QQ(botonD, 1, galleryD);
// QQ(blacky, 1);
// QQ(lady, 2);
// QQ(paka, 3);

// const wrap = document.querySelector('.primary__gallery--wrapper');

function arrows(a, b, c, d, e, f) {
	let slideIndex = 2;
	// let slideIndexB = 2;
	d.addEventListener('click', () => {
			for (i = 0; i < f.length; i++) {
				b.innerHTML = f[i];
				c.children[i].style.opacity = "1";
			}
			slideIndex--;
			if (slideIndex <= 0) {slideIndex = a};
			c.children[slideIndex-1].style.opacity = "0.2";
			b.innerHTML = f[slideIndex-1];
		});

	e.addEventListener('click', () => {
		slideIndex++;
		for (i = 0; i < f.length; i++) {
			b.innerHTML = f[i];
			c.children[i].style.opacity = "1";
		}
		if(slideIndex > f.length) {
		    slideIndex = 1;
		}
		c.children[slideIndex-1].style.opacity = "0.2";
		b.innerHTML = f[slideIndex-1];
	});
};


// inicio.addEventListener('click', () => {
// 	boton.children[3].style.display = "block";
// 	boton.children[4].style.display = "block";
// 	boton.children[5].style.display = "block";
// 	items = Object.values (galleryItems[0]);
// 	prev.style.display = "block";
// 	next.style.display = "block";
// 	arrows(6);
// 	gallery.style.background = 'linear-gradient(336deg, rgb(90 200 90 / 0.7) 0%, rgba(0, 0, 0, 0.0)100%)';
// 	gallery.innerHTML = begin[0];
// 	firstTitle.innerHTML = title[1];
// 	rowGal.style.flexDirection = "row-reverse";

// 	galleryContent.innerHTML = galleryCont.malosos;
// 	boton.children[1].style.opacity = 0.2;
// 	boton.children[0].style.opacity = 1;
// 	boton.children[2].style.opacity = 1;
// 	boton.children[3].style.opacity = 1;
// 	boton.children[4].style.opacity = 1;
// });


// blacky.addEventListener('click', () => {
// 	boton.children[3].style.display = "block";
// 	boton.children[4].style.display = "none";
// 	boton.children[5].style.display = "none";
// 	prev.style.display = "block";
// 	next.style.display = "block";
// 	items = Object.values (galleryItems[1]);
// 	arrows(4);
// 	gallery.style.background = 'linear-gradient(336deg, #654321 0%, rgba(0, 0, 0, 0.0)100%)';
// 	gallery.innerHTML = begin[1];
// 	rowGal.style.flexDirection = "row-reverse";
// 	firstTitle.innerHTML = title[3];

// 	galleryContent.innerHTML = galleryCont.blacky;
// 	boton.children[1].style.opacity = 0.2;
// 	boton.children[0].style.opacity = 1;
// 	boton.children[2].style.opacity = 1;
// 	boton.children[3].style.opacity = 1;
// });
function ladyA() {
	botonB.children[3].style.display = "block";
	botonB.children[4].style.display = "block";
	botonB.children[5].style.display = "block";
	botonB.children[6].style.display = "none";
	botonB.children[7].style.display = "none";
	// botonB.children[8].style.display = "none";
	// slideIndex = 0;
 	// slideIndexB = 0;
	prevB.style.display = "block";
	nextB.style.display = "block";
	items = Object.values (galleryItems[2]);
	// arrows(6);
	arrows(6, galleryB, botonB,prevB,nextB,items);
	// gallery.style.backgroundColor = "#404040";
	galleryB.style.background = 'linear-gradient(336deg, #404040 0%, rgba(0, 0, 0, 0.0)100%)';
	galleryB.innerHTML = begin[2];
	firstTitleB.innerHTML = title[2];
	rowGalB.style.flexDirection = "row-reverse";

	galleryContentB.innerHTML = galleryCont.lady;
	botonB.children[1].style.opacity = 0.2;
	botonB.children[0].style.opacity = 1;
	botonB.children[2].style.opacity = 1;
	botonB.children[3].style.opacity = 1;
	botonB.children[4].style.opacity = 1;
	botonB.children[5].style.opacity = 1;
	botonB.children[6].style.opacity = 1;
	botonB.children[7].style.opacity = 1;
	// botonB.children[8].style.opacity = 1;
};
function malososA() {
	botonC.children[3].style.display = "block";
	botonC.children[4].style.display = "block";
	botonC.children[5].style.display = "block";
	botonC.children[6].style.display = "none";
	botonC.children[7].style.display = "none";
	// botonC.children[8].style.display = "none";
	// slideIndex = 0;
 	// slideIndexB = 0;
	items = Object.values (galleryItems[0]);
	prevC.style.display = "block";
	nextC.style.display = "block";
	// arrows(6);
	arrows(6, galleryC, botonC,prevC,nextC,items);

	// gallery.style.backgroundColor = "#ffffff00";
	galleryC.style.background = 'linear-gradient(336deg, rgb(90 200 90 / 0.7) 0%, rgba(0, 0, 0, 0.0)100%)';
	galleryC.innerHTML = begin[0];
	firstTitleC.innerHTML = title[1];
	rowGalC.style.flexDirection = "row";

	galleryContentC.innerHTML = galleryCont.malosos;
	botonC.children[1].style.opacity = 0.2;
	botonC.children[0].style.opacity = 1;
	botonC.children[2].style.opacity = 1;
	botonC.children[3].style.opacity = 1;
	botonC.children[4].style.opacity = 1;
	// boton.children[5].style.opacity = 1;
};
function pakaA() {
	boton.children[3].style.display = "block";
	boton.children[4].style.display = "block";
	boton.children[5].style.display = "block";
	boton.children[6].style.display = "block";
	boton.children[7].style.display = "block";
	// boton.children[8].style.display = "none";
	prev.style.display = "block";
	next.style.display = "block";
	items = Object.values (galleryItems[3]);
	// arrows(6);
	arrows(8, gallery, boton, prev, next,items);

	// gallery.style.backgroundColor = "#ffffff00";
	gallery.style.background = 'linear-gradient(336deg, rgb(90 200 90 / 0.7) 0%, rgba(0, 0, 0, 0.0)100%)';
	gallery.innerHTML = begin[3];
	rowGal.style.flexDirection = "row";

	firstTitle.innerHTML = title[0];

	galleryContent.innerHTML = galleryCont.paka;
	boton.children[1].style.opacity = 0.2;
	boton.children[0].style.opacity = 1;
	boton.children[2].style.opacity = 1;
	boton.children[3].style.opacity = 1;
	boton.children[4].style.opacity = 1;
	boton.children[5].style.opacity = 1;
};
function blackyA() {
	botonD.children[3].style.display = "block";
	botonD.children[4].style.display = "none";
	botonD.children[5].style.display = "none";
	botonD.children[6].style.display = "none";
	botonD.children[7].style.display = "none";
	// botonD.children[8].style.display = "none";
	prevD.style.display = "block";
	nextD.style.display = "block";
	items = Object.values (galleryItems[1]);
	// arrows(4);
	arrows(4, galleryD, botonD,prevD,nextD,items);

	// gallery.style.backgroundColor = "#654321";
	galleryD.style.background = 'linear-gradient(336deg, #654321 0%, rgba(0, 0, 0, 0.0)100%)';
	galleryD.innerHTML = begin[1];
	rowGalD.style.flexDirection = "row-reverse";
	firstTitleD.innerHTML = title[3];

	galleryContentD.innerHTML = galleryCont.blacky;
	botonD.children[1].style.opacity = 0.2;
	botonD.children[0].style.opacity = 1;
	botonD.children[2].style.opacity = 1;
	botonD.children[3].style.opacity = 1;
};
blackyA();
pakaA();
ladyA();
malososA();
// lady.addEventListener('click', () => {
// 	boton.children[3].style.display = "block";
// 	boton.children[4].style.display = "block";
// 	boton.children[5].style.display = "block";
// 	prev.style.display = "block";
// 	next.style.display = "block";
// 	items = Object.values (galleryItems[2]);
// 	arrows(6);
// 	gallery.style.background = 'linear-gradient(336deg, #404040 0%, rgba(0, 0, 0, 0.0)100%)';
// 	gallery.innerHTML = begin[2];
// 	firstTitle.innerHTML = title[2];
// 	rowGal.style.flexDirection = "row";

// 	galleryContent.innerHTML = galleryCont.lady;
// 	boton.children[1].style.opacity = 0.2;
// 	boton.children[0].style.opacity = 1;
// 	boton.children[2].style.opacity = 1;
// 	boton.children[3].style.opacity = 1;
// 	boton.children[4].style.opacity = 1;
// 	boton.children[5].style.opacity = 1;
// });

// paka.addEventListener('click', () => {
// 	boton.children[3].style.display = "block";
// 	boton.children[4].style.display = "block";
// 	boton.children[5].style.display = "block";
// 	prev.style.display = "block";
// 	next.style.display = "block";
// 	items = Object.values (galleryItems[3]);
// 	arrows(6);
// 	gallery.style.background = 'linear-gradient(336deg, rgb(90 200 90 / 0.7) 0%, rgba(0, 0, 0, 0.0)100%)';
// 	gallery.innerHTML = begin[3];
// 	rowGal.style.flexDirection = "row";

// 	firstTitle.innerHTML = title[0];

// 	galleryContent.innerHTML = galleryCont.paka;
// 	boton.children[1].style.opacity = 0.2;
// 	boton.children[0].style.opacity = 1;
// 	boton.children[2].style.opacity = 1;
// 	boton.children[3].style.opacity = 1;
// 	boton.children[4].style.opacity = 1;
// 	boton.children[5].style.opacity = 1;
// });
// if (f) {
// gallery.style.backgroundColor = "none";
// } else if (k) {
// 	gallery.innerHTML = begin[2];
// } else {
	// gallery.innerHTML = begin[3];
	// firstTitle.innerHTML = title[0];
	// galleryContent.innerHTML = galleryCont.paka;
// };

let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());