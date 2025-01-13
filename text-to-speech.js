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
    const elementsToRead = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'li', 'ul', 'td', 'span', 'div', 'html', 'body', 'header', 'th', 'strong', 'em', 'main']
    if (elementsToRead.length > 0) {
        const reading = new SpeechSynthesisUtterance(elementsToRead);
        speechSynthesis.speak(reading);  // Lance la lecture du texte
    } else {
        alert("Il n'y a pas de texte à lire sur cette page.");
    }
}