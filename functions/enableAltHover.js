// Fonction exécutée pour activer la fonctionnalité dans la page cible
function enableAltHover() {
    function showAlt(event) {
        const image = event.target;
        const textAlt = image.getAttribute('alt');
        const displayAlt = document.createElement('div');
        displayAlt.id = 'alt-display';
        displayAlt.textContent = textAlt ? `Attribut alt : ${textAlt}` : 'Pas d’attribut alt disponible.';
        displayAlt.style.position = 'absolute';
        displayAlt.style.backgroundColor = '#194357';
        displayAlt.style.color = '#B4ECC1';
        displayAlt.style.padding = '5px';
        displayAlt.style.borderRadius = '5px';
        displayAlt.style.fontSize = '16px';
        displayAlt.style.pointerEvents = 'none';
        document.body.appendChild(displayAlt);

        const rect = image.getBoundingClientRect();
        displayAlt.style.top = `${rect.top + window.scrollY + image.offsetHeight}px`;
        displayAlt.style.left = `${rect.left + window.scrollX}px`;
    }

    function altRemove() {
        const displayAlt = document.getElementById('alt-display');
        if (displayAlt) {
            displayAlt.remove();
        }
    }

    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.addEventListener('mouseover', showAlt);
        image.addEventListener('mouseout', supprimerAlt);
    });

    // Sauvegarder les gestionnaires pour permettre leur suppression
    window.altHandlers = { showAlt, altRemove };
    console.log('Survol activé.');
}

export default enableAltHover;