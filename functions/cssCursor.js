//./functions/cssCursor.js

// Fonction qui sera exécutée dans la page active
function changeFontSize(newSize) {
    // Appliquer la taille de police à tous les éléments de texte dans la page
    document.querySelectorAll('body, p, h1, h2, h3, h4, h5, h6, span, div, li, ul, article, aside, code, summary, td').forEach(element => {
        element.style.fontSize = newSize;
    });
}

export default changeFontSize;