// Récupération de l'élément HTML 
const BUTTON_FONT_COLOR_CHANGE_ELMT = document.getElementById("font-color-change");

// Variable booléenne pour suivre l'état du changement de couleur 
let isColorChanged = false;

function changeTextColor(isColorChanged) {
    const elementsToChange = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'li', 'ul', 'td', 'span', 'div', 'body', 'header', 'th', 
        'strong', 'em', 'main', 'article', 'aside', 'summary', 'code'];
    
    // Parcours de chaque type d'élément dans la liste
    elementsToChange.forEach(selector => {
        // Récupération de tous les éléments correspondant au sélecteur
        document.querySelectorAll(selector).forEach(element => {
            if (!isColorChanged) {
                // Si la couleur n'est pas encore modifiée, appliquer les styles
                element.style.setProperty('color', '#194357', 'important'); 
                element.style.setProperty('background-color', '#B4ECC1', 'important');
            } else {
                element.style.removeProperty('color');
                element.style.removeProperty('background-color');
            }
        });
    });
}

// Lorsque le contenu de la page est complètement chargé
document.addEventListener('DOMContentLoaded', () => {
    
    BUTTON_FONT_COLOR_CHANGE_ELMT.addEventListener('click', () => {
        // Exécute la fonction 
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id }, 
                func: changeTextColor, // Fonction à exécuter dans la page
                args: [isColorChanged] // Passe l'état actuel comme argument
            }, () => {
                // Une fois que la fonction est exécutée, basculer l'état
                isColorChanged = !isColorChanged;
            });
        });
    });
});
