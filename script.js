const HEADER_ELMT = document.getElementById("header");
const NIGHT_BUTTON_EXT_ELMT = document.getElementById("night-button");
const SWITCH_MODE_IMG_ELMT = document.getElementById("switch-mode");
const EXTENSION_NAME_ELMT = document.getElementById("extension-name");
const POWER_IMG_ELMT = document.getElementById("power");
const MAIN_ELMT = document.getElementById("main");
const POWER_BUTTON_ELMT = document.getElementById("power-day-button");
const FONT_CHANGE_BUTTON_ELMT = document.getElementById("font-change");
const FONT_SIZE_CHANGE_BUTTON_ELMT = document.getElementById("font-size-change");
const button_test = document.getElementById("test");

let nightModeState = false;
let isExtensionOff = false;
let augmentation_police = false;

function dayMode() {
    HEADER_ELMT.classList.remove("night-mode")
    SWITCH_MODE_IMG_ELMT.classList.remove("night-mode")
    EXTENSION_NAME_ELMT.classList.remove("night-mode")
    POWER_IMG_ELMT.classList.remove("night-mode")
    MAIN_ELMT.classList.remove("night-mode")
}

function nightMode() { 
    HEADER_ELMT.classList.add("night-mode")
    SWITCH_MODE_IMG_ELMT.classList.add("night-mode")
    EXTENSION_NAME_ELMT.classList.add("night-mode")
    POWER_IMG_ELMT.classList.add("night-mode")
    MAIN_ELMT.classList.add("night-mode")
}


NIGHT_BUTTON_EXT_ELMT.addEventListener("click", () => {
    if(nightModeState == true) {
        dayMode();
        nightModeState = false;
    } else {
        nightMode();
        nightModeState = true; 
    }
})

function onOffExtension(switchBool) {
    if (!switchBool) {
        NIGHT_BUTTON_EXT_ELMT.setAttribute('disabled',true);
        // rajout bouttons extension
        // rajouter class CSS disabled
    } else {
        NIGHT_BUTTON_EXT_ELMT.removeAttribute('disabled');
    }
}

POWER_BUTTON_ELMT.addEventListener('click',() => {
    isExtensionOff = !isExtensionOff;
    onOffExtension(isExtensionOff);
})

document.addEventListener('DOMContentLoaded',()=>{
    FONT_SIZE_CHANGE_BUTTON_ELMT.addEventListener('click',() => {
        augmentation_police = !augmentation_police;
        chrome.tabs.query({active: true, currentWindow: true }, (tabs)=>{
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: augmentation_Taille_Police,
                args:[augmentation_police],
            })
        })
    })
});

function augmentation_Taille_Police(augmentation_police) {
    const CHANGEMENT_TAILLE = ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'li' ,'td','span', 'div', 'html', 'body', 'header', 'th', 'strong', 'em', 'main'];
   
    CHANGEMENT_TAILLE.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
            const currentFontSize = window.getComputedStyle(element).fontSize;
            const size = parseFloat(currentFontSize);
            if (!augmentation_police) {
                element.style.fontSize = size * 1.3 + 'px';
            } else {
                element.style.fontSize = '';
            }
        });
    });
}