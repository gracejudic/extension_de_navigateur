const LINE_HEIGHT_BUTTON_ELMT = document.getElementById('line-height-change');
const ALL_PAGE_ELEMENTS = ['h1','h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'li', 'ul', 'td', 'span', 'div'];
let isLineHeightIncreased = true;

function increaseLineHeight(myElementsArray,isIncreased) {
    myElementsArray.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            if(!isIncreased) {
                element.style.lineHeight = 1.8;
            } else {
                 element.style.lineHeight = '';
            }   
        })
    })
}

LINE_HEIGHT_BUTTON_ELMT.addEventListener('click',()=> {
    isLineHeightIncreased=!isLineHeightIncreased
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.scripting.executeScript({
            target: {tabId: tabs[0].id},
            args: [ALL_PAGE_ELEMENTS, isLineHeightIncreased],
            func: increaseLineHeight
        });
    });
});