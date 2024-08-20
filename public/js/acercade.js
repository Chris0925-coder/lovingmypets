const navBoton = document.querySelector(".nav__menu");
const navLink = document.querySelector(".nav__link");
const navBotonClose = document.querySelector('.nav__close');

navBotonClose.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

navBoton.addEventListener('click', () => {
	navLink.classList.toggle("nav__link--menu");
});

function setCookie(cname, cvalue, exdays) {
        let d = new Date();

        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();

        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    };


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

function removeCookie(cname){
    getCookie(cname,"",-1);
};


function detectCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0 && (name.length != c.length))  {
            return true;
        }
    }
    return false;
};

// let request = new XMLHttpRequest();
$(document).ready(function() {
// request.open('GET', '/index.html', true, () => {
	init();
});
   

function init(){
    bloqueRGPD = document.querySelector('.cajacookies');
    if (localStorage.acceptedCookies != 'true') {
    bloqueRGPD.style.display = 'block';    
    }

    if(detectCookie("rgpdOK")){
        if (getCookie("rgpdOK")==1){eliminarBloqueRGPD();}
    }else{
        document.querySelector(".botonRGPD__cancel").addEventListener("click", () => {
            removeCookie();
            bloqueRGPD.parentNode.removeChild(bloqueRGPD);
            localStorage.acceptedCookies = 'false';
        });

        document.querySelector(".botonRGPD").addEventListener("click", () => {
            eliminarBloqueRGPD();
            setCookie("rgpdOK",1,365);
        });

        // document.querySelector(".botonRGPD__settings").addEventListener("click", () => {
        //     getCookie();
        // });        
    }
};

function eliminarBloqueRGPD(){
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
    localStorage.acceptedCookies = 'true';
};




// const content = document.getElementById("backgroundIMG");
// console.log(content);

// const aboutIMG = [
// 	"public/img/slideabout.jpg",
// 	"public/img/slideaboutC.jpeg",
// 	"public/img/slideaboutB.jpg",
// 	"public/img/slideaboutA.jpg"
// ];
// console.log(aboutIMG);
// let slideIndex = 0;

// content.style.backgroundImage = `url(${aboutIMG[3]})`;
// function slide() {
// 	for (let i = 0; i<aboutIMG.length; i++) {
// 		content[0].style.backgroundImage = aboutIMG[i]
// 	}

// 	slideIndex++;
// 	if(slideIndex > aboutIMG.length){slideIndex=0};
// 	content[0].style.backgroundImage = aboutIMG[slideIndex-1]
// }
// function slide() {
// 	for (let i = 0; i < aboutIMG.length; i++) {
// 		content.style.backgroundImage =  `url(${aboutIMG[i]})`;
// 	}

// 	slideIndex++;
// 	if(slideIndex > aboutIMG.length){slideIndex=1};
// 	content.style.backgroundImage =`url(${aboutIMG[slideIndex-1]})`;
// };
// setInterval(slide, 6000);

let date = document.querySelector('.date');

date.append(new Date ().getFullYear ());