const navBoton = document.querySelector(".nav__menu");
const navLink = document.querySelector(".nav__link");
const navBotonClose = document.querySelector('.nav__close');

navBotonClose.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

navBoton.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});


const prev = document.getElementsByClassName('carousel-control-prev');
const next = document.getElementsByClassName('carousel-control-next');
        



// window.addEventListener('resize', function() {
    // let anchoV1 = window.innerWidth;
    // console.log("width: ", anchoV1, "px");   
    // if(anchoV1 <= 968) {
        // CODE DESARROLLOHELPDESK.SITE
// let resize = window.addEventListener('resize', 
function resize() {
    const towers = document.getElementById('boxA');

    let anchoV1 = window.innerWidth;
    console.log("width: ", anchoV1, "px");   
    if(anchoV1 <= 768) {
            const power = document.getElementById('boxB');
            const board = document.getElementById('boxC');
            const pro = document.getElementById('boxD');
    // const ddr = document.getElementById('boxE');
    // const ssd = document.getElementById('boxF');
    // console.log(towers.children);
    const slideA = [
        towers.children[0],
        towers.children[1],
        towers.children[2]
    ];

    const slideB = [
        power.children[0],
        power.children[1],
        power.children[2]
    ];

    const slideC = [
        board.children[0],
        board.children[1],
        board.children[2]
    ];

    const slideD = [
        pro.children[0],
        pro.children[1],
        pro.children[2]
    ];

    // const slideE = [
    //     ddr.children[0],
    //     ddr.children[1],
    //     ddr.children[2]
    // ];

    // const slideF = [
    //     ssd.children[0],
    //     ssd.children[1],
    //     ssd.children[2]
    // ];

    let index = 0;

    function sildeDisplay(a,b) {
        for (let i = 0; i < a.length; i++) {
            a[i].style.display = "none";
        }

        b++;
        if(b>a.length){b = 1};
        a[b-1].style.display = 'flex';
    };


    // setInterval(sildeDisplay, 3000);
    // sildeDisplay(slideA,index);
    // sildeDisplay(slideB,index);
    // sildeDisplay(slideC,index);
    // sildeDisplay(slideD,index);
    // sildeDisplay(slideE,index);
    // sildeDisplay(slideF,index);
    // console.log(towers[1]);



    // const prev = document.querySelector('#carousel-control-prev');
    // const next = document.querySelector('#siguiente');
    // const prevB = document.querySelector('#atrasB');
    // const nextB = document.querySelector('#siguienteB');






    // console.log(next);
    let slideIndex = 1;
    let slideIndexB = 1;
        // let slideIndexB = 2;

    function previus(a,b) {
         // slideIndex = 0;
        prev[a].addEventListener('click', () => {
            for (i = 0; i < b.length; i++) {
                b[i].style.display = "none";
                // sliderButtoms[0].children[i].style.opacity = "0.3";
            }
            slideIndex--;
            if (slideIndex <= 0) {slideIndex = 3};
            // sliderButtoms[0].children[slideIndex-1].style.opacity = "1";
            b[slideIndex-1].style.display = "flex";
            // clearInterval(timeA);       
        });
    }

    // let slideIndex 

    function other(a,b) {
        // slideIndex = 1;
        next[a].addEventListener('click', () => {
        
            for (j = 0; j < b.length; j++) {
                b[j].style.display = "none";
                // sliderButtoms[0].children[i].style.opacity = "0.3";
            }
            
            if(a == 1) {
                slideIndexB++;
                if(slideIndexB > b.length) {slideIndexB = 1}
                b[slideIndexB-1].style.display = "flex";
            } else {
                slideIndex++;
                if(slideIndex > b.length) {slideIndex = 1}
                b[slideIndex-1].style.display = "flex";
            }
        
            // sliderButtoms[0].children[slideIndex-1].style.opacity = "1";
            
            // clearInterval(timeA);
        });
    }
    // previus(0,slideA);
    // other(0,slideA);
    // previus(1,slideB);
    // other(1,slideB);


    // previus(2,slideC);
    // other(2,slideC);
    // previus(3,slideD);
    // other(3,slideD);
    // previus(4,slideE);
    // other(4,slideE);
    // previus(5,slideF);
    // other(5,slideF);

    // CODE DESARROLLOHELPDESK.SITE END
    // sildeDisplay(slideA,index);
    // sildeDisplay(slideB,index);
    // previus(0,slideA);
    // other(0,slideA);
    // previus(1,slideB);
    // other(1,slideB);
            // header.style.backgroundSize = "cover"; 
        // } else {
            // Valor cuando el tamaño de pantalla sea mayor
            


    //     }
    // });

    // next[0].style.display = "none";
    // prev[0].style.display = "none";
    // const b = document.getElementsByClassName("b");
    // console.log(b);
        sildeDisplay(slideA,index);
        sildeDisplay(slideB,index);
        sildeDisplay(slideC,index);
        sildeDisplay(slideD,index);
        previus(0,slideA);
        other(0,slideA);
        previus(1,slideB);
        other(1,slideB);
        previus(2,slideC);
        other(2,slideC);
        previus(3,slideD);
        other(3,slideD);
        // b[0].style.display = "block";
        // b[1].style.display = "block";
        // b[2].style.display = "block";
        // b[3].style.display = "block";
    }  
    // else {
    //     location.replace(location.href);
    // }
    // else if (anchoV1 > 969) {
    //     let gal = document.getElementsByClassName("gal-built");
    //     console.log(gal);
    //     gal[0].style.position = "relative";
    //     gal[1].style.position = "relative";
    //     gal[2].style.position = "relative";
    //     gal[3].style.position = "relative";
    //     gal[4].style.position = "relative";
    //     gal[5].style.position = "relative";
    // }
};

resize();

let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());