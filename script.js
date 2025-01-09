// import { nightModeWebPage } from "./night-mode-web"

const HEADER_ELMT = document.getElementById("header")
const NIGHT_BUTTON_EXT_ELMT = document.getElementById("night-button")
const SWITCH_MODE_IMG_ELMT = document.getElementById("switch-mode")
const EXTENSION_NAME_ELMT = document.getElementById("extension-name")
const POWER_IMG_ELMT = document.getElementById("power")
const MAIN_ELMT = document.getElementById("main")
const button_test= document.getElementById("test")

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


const power = document.getElementById('power-day-button')
myArrayTruc = ['h1','h2','h3','h4','h5','h6','p','a','li','ul','td','span','div','html','body','header','th','strong','em','main','figcaption']

function nightModeWebPage(myTruc) {
    myTruc.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.style.setProperty('background-color', '#13303e', 'important');
            element.style.setProperty('color', '#b4ecc1', 'important');
        })
    })   
}

power.addEventListener('click',() => {
    chrome.tabs.query({active: true, currentWindow: true }, (tabs)=>{
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: nightModeWebPage,
            args: [myArrayTruc]
        })
    })
})


// export {NIGHT_BUTTON_EXT_ELMT}