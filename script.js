const HEADER_ELMT = document.getElementById("header");
const NIGHT_BUTTON_EXT_ELMT = document.getElementById("night-button");
const SWITCH_MODE_IMG_ELMT = document.getElementById("switch-mode");
const EXTENSION_NAME_ELMT = document.getElementById("extension-name");
const POWER_IMG_ELMT = document.getElementById("power");
const MAIN_ELMT = document.getElementById("main");
const POWER_BUTTON_ELMT = document.getElementById("power-day-button");
const FONT_CHANGE_BUTTON_ELMT = document.getElementById("font-change");
const FONT_SIZE_CHANGE_BUTTON_ELMT = document.getElementById("font-size-change");
const CURRENT_SIZE_ELMT = document.getElementById("currentSize")

let nightModeState = false;
let isExtensionOff = false;
let fontIncrease = false;

function dayMode() {
    HEADER_ELMT.classList.remove("night-mode")
    SWITCH_MODE_IMG_ELMT.classList.remove("night-mode")
    EXTENSION_NAME_ELMT.classList.remove("night-mode")
    POWER_IMG_ELMT.classList.remove("night-mode")
    MAIN_ELMT.classList.remove("night-mode")
    CURRENT_SIZE_ELMT.style.color = '#194357';
}

function nightMode() { 
    HEADER_ELMT.classList.add("night-mode")
    SWITCH_MODE_IMG_ELMT.classList.add("night-mode")
    EXTENSION_NAME_ELMT.classList.add("night-mode")
    POWER_IMG_ELMT.classList.add("night-mode")
    MAIN_ELMT.classList.add("night-mode")
    CURRENT_SIZE_ELMT.style.color = '#194357';
}


NIGHT_BUTTON_EXT_ELMT.addEventListener("click", () => {
    if (nightModeState == true) {
        dayMode();
        nightModeState = false;
    } else {
        nightMode();
        nightModeState = true; 
    }
})

function onOffExtension(switchBool) {
    let myButtonsArray = [NIGHT_BUTTON_EXT_ELMT,FONT_CHANGE_BUTTON_ELMT,BUTTON_FONT_COLOR_CHANGE_ELMT,LINE_HEIGHT_BUTTON_ELMT,NIGHT_MODE_WEB_BUTTON_ELMT,BUTTON_READ_ALT_ATTRIBUT_ELMT];
    if (!switchBool) {
        myButtonsArray.forEach((element) => element.classList.add('disabled'));
        myButtonsArray.forEach((element) => element.disabled = true); 
    } else {
        myButtonsArray.forEach((element) => element.classList.remove('disabled'));
        myButtonsArray.forEach((element) => element.removeAttribute('disabled')); 
    }
}

POWER_BUTTON_ELMT.addEventListener('click',() => {
    isExtensionOff = !isExtensionOff;
    onOffExtension(isExtensionOff);
})

document.addEventListener('DOMContentLoaded',()=>{
    FONT_SIZE_CHANGE_BUTTON_ELMT.addEventListener('click',() => {
        fontIncrease= !fontIncrease;
        chrome.tabs.query({active: true, currentWindow: true }, (tabs)=>{
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: increaseFontSize,
                args:[fontIncrease],
            })
        })
    })
})

function increaseFontSize(fontIncrease) {
    const CHANGE_SIZE = ['h1','h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'li' ,'td','span', 'div', 'html', 'body', 'header', 'th', 'strong', 'em', 'main'];
   
    CHANGE_SIZE.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
           
         if (!fontIncrease) {
                element.style.fontSize =  "30px" ; 
            } else {
                element.style.fontSize = '';
            }
        })
    })
}