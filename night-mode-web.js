const NIGHT_MODE_WEB_BUTTON_ELMT = document.getElementById("night-mode-web");
const ARRAY_WEB_ELEMENTS = ['h1','h2','h3','h4','h5','h6','p','a','li','ul','td','span','div','html','body','header','th','strong','em','main','figcaption', 'ytd-mini-guide-renderer'];
let isNightModeOn = false;

function nightModeWebPage(webElements,booleanSwitchMode) {    
    webElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if(!booleanSwitchMode) {
                element.style.setProperty('background-color', '#13303e', 'important');
                element.style.setProperty('color', '#b4ecc1', 'important');
            } else {
                element.style.removeProperty('background-color');
                element.style.removeProperty('color');
            }
        })
    })   
}

NIGHT_MODE_WEB_BUTTON_ELMT.addEventListener('click',() => {
    isNightModeOn =!isNightModeOn;
    if(!isNightModeOn) {
        NIGHT_MODE_WEB_BUTTON_ELMT.classList.add('night-mode-button-change')
    } else {
        NIGHT_MODE_WEB_BUTTON_ELMT.classList.remove('night-mode-button-change')
    }
    chrome.tabs.query({active: true, currentWindow: true }, (tabs)=>{
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: nightModeWebPage,
            args: [ARRAY_WEB_ELEMENTS, isNightModeOn]
        })
    })
})