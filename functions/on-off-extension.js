import myButtonsArray from "/elementsHtmlRecuperes.js"

// fonction passant l'extension en mode off ou on
function onOffExtension(switchBool) {
    if (!switchBool) {
        myButtonsArray.forEach((element) => element.classList.add('disabled'));
        myButtonsArray.forEach((element) => element.disabled = true); 
    } else {
        myButtonsArray.forEach((element) => element.classList.remove('disabled'));
        myButtonsArray.forEach((element) => element.removeAttribute('disabled')); 
    }
}

export default onOffExtension;