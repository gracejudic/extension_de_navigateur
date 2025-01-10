const HEADER_ELMT = document.getElementById("header")
const NIGHT_BUTTON_EXT_ELMT = document.getElementById("night-button")
const SWITCH_MODE_IMG_ELMT = document.getElementById("switch-mode")
const EXTENSION_NAME_ELMT = document.getElementById("extension-name")
const POWER_IMG_ELMT = document.getElementById("power")
const MAIN_ELMT = document.getElementById("main")
const button_test= document.getElementById("test")
const POWER_BUTTON_ELMT = document.getElementById("power-day-button")

function dayMode() {
    HEADER_ELMT.classList.remove("night-mode")
    SWITCH_MODE_IMG_ELMT.classList.remove("night-mode")
    EXTENSION_NAME_ELMT.classList.remove("night-mode")
    POWER_IMG_ELMT.classList.remove("night-mode")
    MAIN_ELMT.classList.remove("night-mode")
}

function nightMode (){ 
    HEADER_ELMT.classList.add("night-mode")
    SWITCH_MODE_IMG_ELMT.classList.add("night-mode")
    EXTENSION_NAME_ELMT.classList.add("night-mode")
    POWER_IMG_ELMT.classList.add("night-mode")
    MAIN_ELMT.classList.add("night-mode")
}

let  night_Mode_state = false

NIGHT_BUTTON_EXT_ELMT.addEventListener("click", () =>{
    if(night_Mode_state==true){
        dayMode()
        night_Mode_state =false;   
    } else {
        nightMode()
        night_Mode_state =true; 
    }
})

let isExtensionOff = false;

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