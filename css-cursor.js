document.addEventListener('DOMContentLoaded', () => {
    const POLICE_SLIDER_ELMT = document.getElementById('size-Police-Slider');
    const CURRENT_SIZE_ELMT = document.getElementById('currentSize');

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

// Fonction qui sera exécutée dans la page active
function changeFontSize(newSize) {
    // Appliquer la taille de police à tous les éléments de texte dans la page
    document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, span, div, li, ul, article, aside, code, summary, td').forEach(element => {
        element.style.fontSize = newSize;
    });
}
