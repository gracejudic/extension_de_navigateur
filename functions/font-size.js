import ELEMENTS_TO_CHANGE from "/variables.js"

function increaseFontSize(isFontIncreased) {
    ELEMENTS_TO_CHANGE.forEach((selector) => {
        document.querySelectorAll(selector).forEach((element) => {
           if (!isFontIncreased) {
                element.style.fontSize =  "30px" ; 
            } else {
                element.style.fontSize = '';
            }
        })
    })
}

export default increaseFontSize;