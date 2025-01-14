// Fonction exécutée pour activer la fonctionnalité dans la page cible
function activerSurvolAlt() {
    function afficherAlt(event) {
        const image = event.target;
        const textAlt = image.getAttribute('alt');
        const affichageAlt = document.createElement('div');
        affichageAlt.id = 'alt-display';
        affichageAlt.textContent = textAlt ? `Attribut alt : ${textAlt}` : 'Pas d’attribut alt disponible.';
        affichageAlt.style.position = 'absolute';
        affichageAlt.style.backgroundColor = '#194357';
        affichageAlt.style.color = '#B4ECC1';
        affichageAlt.style.padding = '5px';
        affichageAlt.style.borderRadius = '5px';
        affichageAlt.style.fontSize = '16px';
        affichageAlt.style.pointerEvents = 'none';
        document.body.appendChild(affichageAlt);

        const rect = image.getBoundingClientRect();
        affichageAlt.style.top = `${rect.top + window.scrollY + image.offsetHeight}px`;
        affichageAlt.style.left = `${rect.left + window.scrollX}px`;
    }

    function supprimerAlt() {
        const affichageAlt = document.getElementById('alt-display');
        if (affichageAlt) {
            affichageAlt.remove();
        }
    }

    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.addEventListener('mouseover', afficherAlt);
        image.addEventListener('mouseout', supprimerAlt);
    });

    // Sauvegarder les gestionnaires pour permettre leur suppression
    window.altHandlers = { afficherAlt, supprimerAlt };
    console.log('Survol activé.');
}

export default activerSurvolAlt;