// import des éléments HTML récupérés
import {BUTTON_READ_ALT_ATTRIBUT_ELMT,
    BUTTON_FONT_COLOR_CHANGE_ELMT,
    LINE_HEIGHT_BUTTON_ELMT,
NIGHT_MODE_WEB_BUTTON_ELMT,
NIGHT_BUTTON_EXT_ELMT,
POWER_BUTTON_ELMT,
POLICE_SLIDER_ELMT,
FONT_CHANGE_BUTTON_ELMT,
CURRENT_SIZE_ELMT,
FONT_SIZE_CHANGE_BUTTON_ELMT,
} from "./elementsHtmlRecuperes.js";


//import des variables gobales
import { isColorChanged, isLineHeightIncreased, isNightModeOnWeb, nightModeState, isExtensionOff, ELEMENTS_TO_CHANGE, isFontIncreased } from "/variables.js";

// import des fonctions
import changeFont from "./functions/font-change.js";
import enableAltHover from "./functions/enableAltHover.js";
import disabledAltHover from "./functions/disabledHoverAlt.js";
import changeTextColor from "./functions/changeBackgroundPagesAndColorFont.js";
import changeFontSize from "./functions/cssCursor.js";
import { nightModeWebPage, nightModeChangingImg } from "./functions/night-mode-web.js";
import increaseLineHeight from "./functions/lineHeight.js";
import onOffExtension from "./functions/on-off-extension.js";
import increaseFontSize from "./functions/font-size.js";
import { nightMode, dayMode } from "./functions/night-mode-extension.js";

//Écouteur d'évènement sur le bouton qui permet de lire l'attribut alt lorsque l'on passe la souris dessus
document.addEventListener('DOMContentLoaded', () => {
    let fonctionnaliteActive = false; // Suivre l'état de la fonctionnalité

    BUTTON_READ_ALT_ATTRIBUT_ELMT.addEventListener('click', () => {
        // Vérifier si l'onglet actif est accessible
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) {
                console.error('Aucun onglet actif trouvé.');
                return;
            }

            if (fonctionnaliteActive) {
                // Désactiver la fonctionnalité
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: disabledAltHover
                }, () => {
                    if (chrome.runtime.lastError) {
                        console.error('Erreur lors de la désactivation :', chrome.runtime.lastError);
                    } else {
                        fonctionnaliteActive = false;
                        console.log('Fonctionnalité désactivée.');
                    }
                });
            } else {
                // Activer la fonctionnalité
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: enableAltHover
                }, () => {
                    if (chrome.runtime.lastError) {
                        console.error('Erreur lors de l\'activation :', chrome.runtime.lastError);
                    } else {
                        fonctionnaliteActive = true;
                        console.log('Fonctionnalité activée.');
                    }
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded',()=>{
    FONT_SIZE_CHANGE_BUTTON_ELMT.addEventListener('click',() => {
        isFontIncreased= !isFontIncreased;
        chrome.tabs.query({active: true, currentWindow: true }, (tabs)=>{
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: increaseFontSize,
                args:[ELEMENTS_TO_CHANGE,isFontIncreased],
            })
        })
    })
})

FONT_CHANGE_BUTTON_ELMT.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: changeFont,
            args: [ELEMENTS_TO_CHANGE, isFontChanged]  
        }, () => {
            isFontChanged = !isFontChanged;
        });
    });
});

//Écouteur d'évènement sur le bouton qui permet de changer les couleurs du texte et du fond de la page en mode jour de l'application
document.addEventListener('DOMContentLoaded',()=>{
    BUTTON_FONT_COLOR_CHANGE_ELMT.addEventListener('click',() => {
          // Basculer l'état
        isColorChanged = !isColorChanged;
        chrome.tabs.query({active: true, currentWindow: true }, (tabs)=> {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: changeTextColor,
                args: [isColorChanged]
            })
        })
    })
})

// augmentation de l'interligne
LINE_HEIGHT_BUTTON_ELMT.addEventListener('click',()=> {
    isLineHeightIncreased=!isLineHeightIncreased
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            args: [ELEMENTS_TO_CHANGE, isLineHeightIncreased],
            func: increaseLineHeight
        });
    });
});

// night mode appliqué aux pages web
NIGHT_MODE_WEB_BUTTON_ELMT.addEventListener('click',() => {
    isNightModeOnWeb =!isNightModeOnWeb;
    nightModeChangingImg();
    chrome.tabs.query({active: true, currentWindow: true }, (tabs)=>{
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            func: nightModeWebPage,
            args: [ELEMENTS_TO_CHANGE, isNightModeOnWeb]
        })
    })
})

// passage de l'extension en mode nuit/jour
NIGHT_BUTTON_EXT_ELMT.addEventListener("click", () => {
    if (nightModeState == true) {
        dayMode();
        nightModeState = false;
    } else {
        nightMode();
        nightModeState = true; 
    }
})

// activation/désactivation de l'extension
POWER_BUTTON_ELMT.addEventListener('click',() => {
    isExtensionOff = !isExtensionOff;
    onOffExtension(isExtensionOff);
})

//Écouteur d'évènement sur le curseur qui permet de choisir la taille du texte de 15 à 45
document.addEventListener('DOMContentLoaded', () => {
    // Fonction pour ajuster la taille de la police
   POLICE_SLIDER_ELMT.addEventListener('input', () => {
        const newSize = POLICE_SLIDER_ELMT.value + 'px'; // Récupérer la taille choisie par le curseur

        // Appliquer la taille de police à tout le texte de la page active
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: changeFontSize,
                args: [newSize], // Passer la nouvelle taille de police en paramètre
            });
        });

        // Mettre à jour la taille affichée dans l'extension
        CURRENT_SIZE_ELMT.textContent = newSize;
    });
});