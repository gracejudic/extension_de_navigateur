const BUTTON_READ_ALT_ATTRIBUT_ELMT = document.getElementById('read-alt-attribut');

document.addEventListener('DOMContentLoaded', () => {
    let fonctionnaliteActive = false; // Suivre l'état de la fonctionnalité

    BUTTON_READ_ALT_ATTRIBUT_ELMT.addEventListener('click', () => {
        // Vérifier si l'onglet actif est accessible
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            if (tabs.length === 0) {
                console.error('Aucun onglet actif trouvé.');
                return;
            }

            if (fonctionnaliteActive) {
                // Désactiver la fonctionnalité
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: desactiverSurvolAlt
                }, () => {
                    if (chrome.runtime.lastError) {
                        console.error('Erreur lors de la désactivation :', chrome.runtime.lastError);
                    } else {
                        fonctionnaliteActive = false;
                        console.log('Fonctionnalité désactivée.');
                    }
                });
            } else {
                // Activer la fonctionnalité
                chrome.scripting.executeScript({
                    target: { tabId: tabs[0].id },
                    func: activerSurvolAlt
                }, () => {
                    if (chrome.runtime.lastError) {
                        console.error('Erreur lors de l\'activation :', chrome.runtime.lastError);
                    } else {
                        fonctionnaliteActive = true;
                        console.log('Fonctionnalité activée.');
                    }
                });
            }
        });
    });
});

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

// Fonction exécutée pour désactiver la fonctionnalité dans la page cible
function desactiverSurvolAlt() {
    if (!window.altHandlers) return;

    const images = document.querySelectorAll('img');
    images.forEach((image) => {
        image.removeEventListener('mouseover', window.altHandlers.afficherAlt);
        image.removeEventListener('mouseout', window.altHandlers.supprimerAlt);
    });

    delete window.altHandlers;
    console.log('Survol désactivé.');
}
