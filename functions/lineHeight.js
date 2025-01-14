// fonction augmentant l'interligne du texte des pages WEB
function increaseLineHeight(myElementsArray,booleanSwitchMode) {
    myElementsArray.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if(!booleanSwitchMode) {
                element.style.lineHeight = 1.8;
            } else {
                 element.style.lineHeight = '';
            }   
        })
    })
}

export default increaseLineHeight;