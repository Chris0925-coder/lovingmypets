const today = new Date ();

function setCookie(cname, cvalue, exdays) {
        today.setTime(today.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ today.toUTCString();

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

const bloqueRGPD = document.querySelector('.cajacookies');
const botonRGPD = document.querySelector(".botonRGPD");
const cancel = document.querySelector(".botonRGPD--cancel");

function init(){
    if (localStorage.acceptedCookies != "true") {
        // console.log(localStorage.acceptedCookies != "true")
        bloqueRGPD.style.display = 'block';    
    }

    if(detectCookie("rgpdOK")){
        eliminarBloqueRGPD();
    } else {
        cancel.addEventListener("click", () => {
            removeCookie();
            bloqueRGPD.parentNode.removeChild(bloqueRGPD);
            localStorage.acceptedCookies = 'false';
            history.back();
        });

        botonRGPD.addEventListener("click", () => {
            eliminarBloqueRGPD();
            setCookie("rgpdOK",1,365);
            // count();
        });
    }
};

function eliminarBloqueRGPD(){
    bloqueRGPD.parentNode.removeChild(bloqueRGPD);
    localStorage.acceptedCookies = 'true';
};

init();