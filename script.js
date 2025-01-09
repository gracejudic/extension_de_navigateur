const HEADER_ELMT = document.getElementById("header")
const NIGHT_BUTTON_EXT_ELMT = document.getElementById("night-button")
const SWITCH_MODE_IMG_ELMT = document.getElementById("switch-mode")
const EXTENSION_NAME_ELMT = document.getElementById("extension-name")
const POWER_IMG_ELMT = document.getElementById("power")
const MAIN_ELMT = document.getElementById("main")
const button_test= document.getElementById("test")
const FONT_SIZE_CHANGE_ELMT = document.getElementById("font-size-change")
function dayMode() {
    HEADER_ELMT.classList.remove("night-mode")
    SWITCH_MODE_IMG_ELMT.classList.remove("night-mode")
    EXTENSION_NAME_ELMT.classList.remove("night-mode")
    POWER_IMG_ELMT.classList.remove("night-mode")
    MAIN_ELMT.classList.remove("night-mode")
}

function nightMode (){ 
    HEADER_ELMT.classList.add("night-mode")
    SWITCH_MODE_IMG_ELMT.classList.add("night-mode")
    EXTENSION_NAME_ELMT.classList.add("night-mode")
    POWER_IMG_ELMT.classList.add("night-mode")
    MAIN_ELMT.classList.add("night-mode")
}

let  night_Mode_state = false
NIGHT_BUTTON_EXT_ELMT.addEventListener("click", () =>{
    if(night_Mode_state==true){
        dayMode()
        night_Mode_state =false;      
    } else {
        nightMode()
        night_Mode_state =true;
          
    }
})

document.addEventListener('DOMContentLoaded',()=>{
FONT_SIZE_CHANGE_ELMT.addEventListener('click', function() {
    const elements = document.getElementsByTagName('*');
    for (let element of elements) {
        const currentFontSize = window.getComputedStyle(element).fontSize;
        if (currentFontSize) {
            const size = parseFloat(currentFontSize);
            element.style.fontSize = isLarge ? 
                `${size * 1.2}px` : //augmente de 20%
                ''; // retour à la taille par défaut
        }
    }
    isLarge = !isLarge; // Inverser l'état
});
})

let 

function Augmenter_Taille_Police() {
    const CHAGEMENT_TAILLE = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a',
         'li', 'ul', 'td', 'span', 'div', 'html', 'body', 'header', 'th', 'strong', 'em', 'main'];
         CHAGEMENT_TAILLE.forEach(selector).forEach(elements) => {
        h1.style.color = 'green';
    });
}



// function toggleFontSize() {
//     const elements = document.getElementsByTagName('*');
//     for (let element of elements) {
//         const currentFontSize = window.getComputedStyle(element).fontSize;
//         if (currentFontSize) {
//             const size = parseFloat(currentFontSize);
//             element.style.fontSize = isLarge ? 
//                 `${size * 1.2}px` : // augmente de 20%
//                 ''; // retour à la taille par défaut
//         }
//     }
//     isLarge = !isLarge; // Inverser l'état
// }

   