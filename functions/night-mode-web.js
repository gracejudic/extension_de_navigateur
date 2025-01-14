import isNightModeOnWeb from "/variables.js";
import MODE_DAY_NIGHT_WEB_IMG from "/elementsHtmlRecuperes.js";

// fonction appliquant mode nuit à page WEB
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

// fonction modifiant l'icône du bouton mode nuit de la page WEB selon son état (on/off)
function nightModeChangingImg() {
    if(!isNightModeOnWeb) {
        MODE_DAY_NIGHT_WEB_IMG.classList.add('night-mode-button-change')
    } else {
        MODE_DAY_NIGHT_WEB_IMG.classList.remove('night-mode-button-change')
    }
}

export default { nightModeWebPage,nightModeChangingImg };