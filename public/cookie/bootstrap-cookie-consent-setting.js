// bootstrap-cookie-consent-setting
// function init(){
//     bloqueRGPD = document.querySelector('.cajacookies');
//     if (localStorage.acceptedCookies != 'true') {
//     bloqueRGPD.style.display = 'block';    
//     }

//     if(detectCookie("rgpdOK")){
//         if (getCookie("rgpdOK")==1){eliminarBloqueRGPD();}
//     }else{
//         document.querySelector(".botonRGPD").addEventListener("click", () => {
//         eliminarBloqueRGPD();
//         setCookie("rgpdOK",1,365);
//         })        
//     }
// };

let BootstrapCookieConsentSettings = {};

let bloqueRGPD = document.querySelector('.cajacookies');


let modal = {
  "title": "Privacy Settings",
  "body": "We use cookies and similar technologies that are necessary to operate the website. Additional cookies are only used with your consent. We use the additional cookies to perform analyses of website usage and to check marketing measures for their efficiency. These analyses are carried out to provide you with a better user experience on the website. You are free to give, deny, or withdraw your consent at any time by using the \"cookie settings\" link at the bottom of each page. You can consent to our use of cookies by clicking \"Agree\". For more information about what information is collected and how it is shared with our partners, please read our --privacy-policy--.",
  "privacyPolicy": "Data Protection Statement",
  "legalNotice": "Legal Notice",
  "mySettings": "My Settings",
  "buttonNotAgree": "I do not agree",
  "buttonAgree": "Agree",
  "buttonSaveSelection": "Save selection",
  "buttonAgreeAll": "Agree to all",
  "categories": {
    "necessary": {
      "title": "Necessary",
      "description": ["Required to run the website<"]
    },
    "statistics": {
      "title": "Statistics",
      "description": ["Monitoring website usage and optimizing the user experience"]
    },
    "marketing": {
      "title": "Marketing",
      "description": ["Evaluation of marketing actions"]
    },
    "personalization": {
      "title": "Personalization",
      "description": ["Storage of your preferences from previous visits",
        "Collecting user feedback to improve our website",
        "Recording of your interests in order to provide customised content and offers"]
    }
  }
}

// console.log(modal);


let cookieSettings = new BootstrapCookieConsentSettings({

	// modal
	autoShowModal:false,

    // path to privacy policy page
    privacyPolicyUrl: undefined, // the URL of your privacy policy page
    
    // path to legal notice page
    legalNoticeUrl: "../../terms.html",

    // dialog content
    contentURL: "public/cookie",

    // CSS classes
    buttonAgreeClass: "btn btn-primary",
    buttonDontAgreeClass: "btn btn-link text-decoration-none", 
    buttonSaveClass: "btn btn-secondary",

    // callback function, called after the user has made his selection
    postSelectionCallback: undefined,

    // the language, in which the modal is shown
    lang: navigator.language, 

    // supported languages (in ./cookie-consent-content/)
    defaultLang: "en", 

    // path to language files
    cookieName: "cookie-consent-settings",

    // cookie name
    cookieName: "cookie-consent-settings",

    // 365 days
    cookieStorageDays: 365,

    // modal ID
    modalId: "bootstrapCookieConsentSettingsModal",

    // if true, the settings are stored in localStorage, too
    alsoUseLocalStorage: true, 

    // categories
    categories: ["necessary", "statistics", "marketing", "personalization"]
});




bloqueRGPD.append(modal);

cookieSettings.showDialog()

// get all
cookieSettings.getSettings();
// get a specific setting
cookieSettings.getSettings("analyses");