// ./elementsHtmlRecuperes.js

// éléments HTML : (ordre lecture HTML)
const HEADER_ELMT = document.getElementById("header");
const EXTENSION_NAME_ELMT = document.getElementById("extension-name");
const SWITCH_MODE_IMG_ELMT = document.getElementById("switch-mode");
const POWER_IMG_ELMT = document.getElementById("power");
const MAIN_ELMT = document.getElementById("main");
const MODE_DAY_NIGHT_WEB_IMG = document.getElementById("mode-day-night");
const CURRENT_SIZE_ELMT = document.getElementById("currentSize");


// boutons :
const BUTTON_READ_ALT_ATTRIBUT_ELMT = document.getElementById("read-alt-attribut");
const BUTTON_FONT_COLOR_CHANGE_ELMT = document.getElementById("font-color-change");
const LINE_HEIGHT_BUTTON_ELMT = document.getElementById('line-height-change');
const POWER_BUTTON_ELMT = document.getElementById("power-day-button");
const NIGHT_BUTTON_EXT_ELMT = document.getElementById("night-button");
const NIGHT_MODE_WEB_BUTTON_ELMT = document.getElementById("DAY-NIGHT-MODE");
const BUTTON_FONT_CHANGE_ELMT = document.getElementById("font-change");
const POLICE_SLIDER_ELMT = document.getElementById('size-Police-Slider');
const FONT_CHANGE_BUTTON_ELMT = document.getElementById("font-change");
const FONT_SIZE_CHANGE_BUTTON_ELMT = document.getElementById("font-size-change");
const TEXT_TO_SPEECH_BUTTON_ELMT = document.getElementById("text-to-speech");


let myButtonsArray = [NIGHT_BUTTON_EXT_ELMT,FONT_CHANGE_BUTTON_ELMT,BUTTON_FONT_COLOR_CHANGE_ELMT,LINE_HEIGHT_BUTTON_ELMT,NIGHT_MODE_WEB_BUTTON_ELMT,BUTTON_READ_ALT_ATTRIBUT_ELMT];  




export { HEADER_ELMT,
    EXTENSION_NAME_ELMT,
    POWER_IMG_ELMT,
    SWITCH_MODE_IMG_ELMT,
    MAIN_ELMT, 
    BUTTON_READ_ALT_ATTRIBUT_ELMT, 
    BUTTON_FONT_COLOR_CHANGE_ELMT,
    LINE_HEIGHT_BUTTON_ELMT,
    NIGHT_MODE_WEB_BUTTON_ELMT,
    MODE_DAY_NIGHT_WEB_IMG,
    NIGHT_BUTTON_EXT_ELMT,
    POWER_BUTTON_ELMT,
    BUTTON_FONT_CHANGE_ELMT,
    POLICE_SLIDER_ELMT,
    FONT_CHANGE_BUTTON_ELMT,
    FONT_SIZE_CHANGE_BUTTON_ELMT,
    myButtonsArray,
    TEXT_TO_SPEECH_BUTTON_ELMT,
    CURRENT_SIZE_ELMT };

