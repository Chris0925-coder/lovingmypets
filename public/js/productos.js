const navBoton = document.querySelector(".nav__menu");
const navLink = document.querySelector(".nav__link");
const navBotonClose = document.querySelector('.nav__close');
const urlA = `https://wvlhqwzk-5000.use2.devtunnels.ms/analytics`;

navBotonClose.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

navBoton.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

const prev = document.getElementsByClassName('carousel-control-prev');
const next = document.getElementsByClassName('carousel-control-next');
        
// document.querySelector("#boxF > figure:nth-child(1) > a > img")
// const towers = document.getElementById('boxA');
// const power = document.getElementById('boxB');

const toys = document.getElementById('boxE');
const first = document.getElementById('boxF');
const board = document.getElementById('boxC');
const pro = document.getElementById('boxD');
// const second = document.getElementById('boxG');
// childNodes[1].childNodes[1].currentSrc
const fig = document.querySelectorAll('.gal-built');
const thumbnail = document.getElementsByClassName('thumbnail');
// children[0].children[0].childNodes[1].currentSrc
// console.log(fig);
// bolasloro.jpg
let newThumbnail = document.createElement('picture');
// document.querySelector("#boxF > figure:nth-child(1) > a > img")
function imgArrays(a,b) {
    // const thumb = thumbnail[b].querySelector('.item:first-child');
    // console.log(second.children.length);
    for(let i=0;i<a.children.length;i++) {
        let images = a.children[i].children[0].childNodes[1].currentSrc.split("/").pop();
        // let images = first.children[i].childNodes[1].childNodes[1].currentSrc.split("/").pop();

        // console.log(images);

        // let imagesArray = images.split("/").pop();
        // let iiii = ;
        // console.log(imagesArray);

        thumbnail[b].innerHTML += `<img src="public/img/products/thumbnails/${images}">`;

        // console.log(thumbnail[b].childNodes[b])
        // console.log(thumbnail.length)

        for(let j=0;j<thumbnail[b].childNodes.length;++j) {
            // let index = 0;
            thumbnail[b].childNodes[j].addEventListener('click', ()=> {
                // console.log(j);
                // thumbnail[b].childNodes[j].style.border = "1px solid black";
                // if ()

                
                // console.log(a.children)
                // b++;
                // if(b>a.length){b = 1};
                for (let i = 0; i < a.children.length; i++) {
                    a.children[i].style.display = "none";
                    a.children[j].style.display = 'flex';
                }

                                // first.children[j].style.display = "none";
                // sildeDisplay(towers.children,index);
                // sildeDisplay(power.children,index);
                // sildeDisplay(board.children,index);
                // sildeDisplay(board.children,index);
                // sildeDisplay(pro.children,index);
                // sildeDisplay(first.children[2],index);
                // sildeDisplay(second.children,index);
            })
        // thumbnail[b].insertBefore(newThumbnail,thumb);
        }
    }
};

const dominio = window.location.origin;

let d = localStorage.getItem("acceptedCookies");
function count(a) {

    if(a) {
        let analyticsData = {
            id: 2,
            count: 1,
            domain: dominio,
        };

        window.addEventListener("load", function() {
          navigator.sendBeacon(urlA, JSON.stringify(analyticsData));
        });

    }
}
count(d);

// imgArrays(first,0);
// imgArrays(second,1);
// imgArrays(first,0);
// imgArrays(second,1);
// iii = fig[0].children[0].childNodes[1].currentSrc;

// console.log(iii.split("/").pop())




// comment code
// window.addEventListener('resize', function() {
    // let anchoV1 = window.innerWidth;
    // console.log("width: ", anchoV1, "px");   
    // if(anchoV1 <= 968) {
        // CODE DESARROLLOHELPDESK.SITE
// let resize = window.addEventListener('resize', 
// function resize() {

    // console.log("width: ", anchoV1, "px");   
    // if(anchoV1 <= 768) {
                // const ddr = document.getElementById('boxE');
    // const ssd = document.getElementById('boxF');
    // console.log(towers.children);
    // const slideA = [
    //     towers.children[0],
    //     towers.children[1],
    //     towers.children[2]
    // ];

    // const slideB = [
    //     power.children[0],
    //     power.children[1],
    //     power.children[2]
    // ];

    // const slideC = [
    //     board.children[0],
    //     board.children[1],
    //     board.children[2]
    // ];

    // const slideD = [
    //     pro.children[0],
    //     pro.children[1],
    //     pro.children[2]
    // ];

    // const slideE = [
    //     toys.children[0],
    //     toys.children[1],
    //     toys.children[2]
    // ];

    // const slideF = [
    //     first.children[0],
    //     first.children[1]
    // ];

    // const slideG = [
    //     second.children[0],
    //     second.children[1]    
    // ];

    // console.log(first.children.length)

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

    function previus(a,b,c) {
         // slideIndex = 0;
        prev[a].addEventListener('click', () => {
            for (i = 0; i < b.length; i++) {
                b[i].style.display = "none";
                // sliderButtoms[0].children[i].style.opacity = "0.3";
            }
            slideIndex--;
            if (slideIndex <= 0) {slideIndex = c};
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
            


        // }
    // });
const contP = document.getElementsByClassName('gal-built');
// console.log(contP);
    // next[0].style.display = "none";
    // prev[0].style.display = "none";
    // const b = document.getElementsByClassName("b");
    // console.log(b);
// ()=>{
// console.log(anchoV);
var anchoV = window.innerWidth;
// console.log(anchoV);

// console.log(anchoV);
    if(anchoV <= 768) {
        // console.log(anchoV);
        sildeDisplay(first.children,index);
        sildeDisplay(toys.children,index);
        sildeDisplay(board.children,index);
        sildeDisplay(pro.children,index);

        previus(0,first.children,first.children.length);
        other(0,first.children);
        previus(1,toys.children,toys.children.length);
        other(1,toys.children);
        previus(2,board.children,board.children.length);
        other(2,board.children);
        previus(3,pro.children,pro.children.length);
        other(3,pro.children);        
    

        // b[0].style.display = "block";
        // b[1].style.display = "block";
        // b[2].style.display = "block";
        // b[3].style.display = "block";

        setTimeout(()=> {
            imgArrays(first,0);
            // imgArrays(second,1);
            imgArrays(toys,1);
            // imgArrays(towers,3);
            // imgArrays(power,4);
            imgArrays(board,2);
            imgArrays(pro,3);
        }, 3500);
    };
    // return anchoV1;
    // console.log(anchoV1++);
// });

    
    // else if (anchoV1 >= 769) {
    //     contP.style.position = "relative";
    // } 
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
// };

// resize();
// }();


let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());