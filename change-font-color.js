const BUTTON_FONT_COLOR_CHANGE_ELMT = document.getElementById("font-color-change")

// Variable pour suivre l'état (actif ou inactif)
let isColorChanged = false;

function changeTextColor(isColorChanged) {
    const elementsToChange = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'li', 'ul', 'td', 'span', 'div', 'html', 'body', 'header', 'th', 'strong', 'em', 'main'];
    elementsToChange.forEach(selector => {
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

document.addEventListener('DOMContentLoaded',()=>{
    BUTTON_FONT_COLOR_CHANGE_ELMT.addEventListener('click',() => {
          // Basculer l'état
          isColorChanged = !isColorChanged;
        chrome.tabs.query({active: true, currentWindow: true }, (tabs)=>{
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                func: changeTextColor,
                args: [isColorChanged]
            })
        })
    })
})

