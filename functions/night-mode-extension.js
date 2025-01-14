import { CURRENT_SIZE_ELMT, SWITCH_MODE_IMG_ELMT, EXTENSION_NAME_ELMT, POWER_IMG_ELMT, MAIN_ELMT } from "/elementsHtmlRecuperes.js";

// fonction permettant de passer l'extension en mode nuit
function dayMode() {
    CURRENT_SIZE_ELMT.style.color = '#194357';
    HEADER_ELMT.classList.remove("night-mode");
    SWITCH_MODE_IMG_ELMT.classList.remove("night-mode");
    EXTENSION_NAME_ELMT.classList.remove("night-mode");
    POWER_IMG_ELMT.classList.remove("night-mode");
    MAIN_ELMT.classList.remove("night-mode");
}

function nightMode() { 
    CURRENT_SIZE_ELMT.style.color = '#194357';
    HEADER_ELMT.classList.add("night-mode");
    SWITCH_MODE_IMG_ELMT.classList.add("night-mode");
    EXTENSION_NAME_ELMT.classList.add("night-mode");
    POWER_IMG_ELMT.classList.add("night-mode");
    MAIN_ELMT.classList.add("night-mode");
}

export default { dayMode, nightMode };