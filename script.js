const HEADER_ELMT = document.getElementById("header")
const NIGHT_BUTTON_EXT_ELMT = document.getElementById("night-button")
const SWITCH_MODE_IMG_ELMT = document.getElementById("switch-mode")
const EXTENSION_NAME_ELMT = document.getElementById("extension-name")
const POWER_IMG_ELMT = document.getElementById("power")
const MAIN_ELMT = document.getElementById("main")
const FONT_CHANGE_BUTTON_ELMT = document.getElementById("font-change");

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

let elements_to_change = [
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'p', 'a', 'li','ul', 'td', 'span', 'div'
]

let font_applied = false

FONT_CHANGE_BUTTON_ELMT.addEventListener("click", () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (selectors, is_font_applied) => {
                // Utiliser les éléments transmis via l'argument `selectors`
                selectors.forEach(selector => {
                    document.querySelectorAll(selector).forEach(element => {
                        if (is_font_applied) {
                            // Retirer la police personnalisée
                            element.style.fontFamily = "";
                        } else {
                            // Appliquer la police personnalisée
                            element.style.fontFamily = "Verdana, sans-serif";
                        }
                    });
                });
            },
            args: [elements_to_change, font_applied]  // Passer la liste et l'état de la police
        }, () => {
            // Inverser l'état de la police après chaque clic
            font_applied = !font_applied;
        });
    });
});