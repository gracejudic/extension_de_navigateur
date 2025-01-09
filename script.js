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

let isLineHeightIncreased = false;

const ALL_PAGE_TEXT = ['h1','h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'li', 'ul', 'td', 'span', 'div']

function increaseLineHeight(myConst) {
    myConst.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if(isLineHeightIncreased = false) {
                element.style.setProperty('line-height','1.8','important')
            } else {
                element.style.removeProperty('line-height');
            }   
        })
    })
}

document.getElementById('line-height-change').addEventListener('click',()=> {
    isLineHeightIncreased=!isLineHeightIncreased
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            args: [ALL_PAGE_TEXT],
            func: increaseLineHeight
        });
    });
});