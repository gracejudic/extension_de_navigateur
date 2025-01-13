const TEXT_TO_SPEECH_BUTTON_ELMT = document.getElementById("text-to-speech");
let isSpeaking = false;

// Ajouter un message de débogage pour vérifier que le bouton est bien trouvé
console.log("Bouton trouvé:", TEXT_TO_SPEECH_BUTTON_ELMT);

TEXT_TO_SPEECH_BUTTON_ELMT.addEventListener("click", () => {
    console.log("Bouton cliqué");
    console.log("État actuel isSpeaking:", isSpeaking);

    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if (!isSpeaking) {
            console.log("Démarrage de la lecture");
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: startReading
            });
            isSpeaking = true;
        } else {
            console.log("Arrêt de la lecture");
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: stopReading
            });
            isSpeaking = false;
        }
    });
});

function startReading() {
    console.log("Fonction startReading appelée");
    
    // Récupérer tout le texte visible de la page
    const textContent = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6, p, a, li, td, span, div, html, body, header, th, strong, em, main, article'))
        .filter(element => {
            const style = window.getComputedStyle(element);
            return style.display !== 'none' && style.visibility !== 'hidden' && element.innerText.trim().length > 0;
        })
        .map(element => element.innerText)
        .join(' ');

    console.log("Texte à lire:", textContent.substring(0, 100) + "..."); // Log les 100 premiers caractères

    if (textContent) {
        const utterance = new SpeechSynthesisUtterance(textContent);
        utterance.lang = 'fr-FR'; // En français
        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        utterance.onstart = () => console.log("Lecture démarrée");
        utterance.onend = () => console.log("Lecture terminée");
        utterance.onerror = (e) => console.error("Erreur de lecture:", e);

        window.speechSynthesis.cancel(); // Arrêter la lecture
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Aucun texte trouvé à lire");
        alert("Aucun texte à lire sur cette page.");
    }
}

function stopReading() {
    console.log("Fonction stopReading appelée");
    window.speechSynthesis.cancel();
}

window.addEventListener('unload', () => {
    if (isSpeaking) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.scripting.executeScript({
                target: {tabId: tabs[0].id},
                function: stopReading
            });
        });
    }
});