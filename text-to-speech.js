const TEXT_TO_SPEECH_BUTTON_ELMT = document.getElementById("text-to-speech-button");

TEXT_TO_SPEECH_BUTTON_ELMT.addEventListener("click", () => {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: readPageText
        });
    });
});

function readPageText() {
    const pageText = document.body.innerText;  // Récupère le texte de la page entière
    if (pageText.length > 0) {
        const utterance = new SpeechSynthesisUtterance(pageText);
        speechSynthesis.speak(utterance);  // Lance la lecture du texte
    } else {
        alert("Il n'y a pas de texte à lire sur cette page.");
    }
}