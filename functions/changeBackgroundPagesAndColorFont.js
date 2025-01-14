// ./functions/changeBackgroundPagesAndColorFont.js
import ELEMENTS_TO_CHANGE from "/variables.js"

function changeTextColor(isColorChanged) {
    ELEMENTS_TO_CHANGE.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if (!isColorChanged) {
                // Appliquer les styles
                element.style.setProperty('color', '#194357', 'important');
                element.style.setProperty('background-color', '#B4ECC1', 'important');
            } else {
                // Réinitialiser les styles
                element.style.removeProperty('color');
                element.style.removeProperty('background-color');
            }
        });
    });
}

export default changeTextColor;