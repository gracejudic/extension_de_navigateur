import ELEMENTS_TO_CHANGE from "/variables.js"

function changeFont(isFontChanged) {
    ELEMENTS_TO_CHANGE.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if (!isFontChanged) {
                element.style.fontFamily = "Verdana, sans-serif"
            } else {
                element.style.fontFamily = ""
            }
        });
    });
}

export default changeFont;