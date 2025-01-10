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
                            // Appliquer la police
                            element.style.fontFamily = "Verdana, sans-serif";
                        }
                    });
                });
            },
            // Passer la liste des éléments et l'état de la police
            args: [elements_to_change, font_applied]  
        }, () => {
            // Inverser l'état de la police après chaque clic
            font_applied = !font_applied;
        });
    });
});