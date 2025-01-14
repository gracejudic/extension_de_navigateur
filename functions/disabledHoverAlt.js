// Fonction exécutée pour désactiver la fonctionnalité dans la page cible
function disabledAltHover() {
    if (!window.altHandlers) return;

    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.removeEventListener('mouseover', window.altHandlers.afficherAlt);
        image.removeEventListener('mouseout', window.altHandlers.supprimerAlt);
    });

    delete window.altHandlers;
    console.log('Survol désactivé.');
}


export default disabledAltHover;