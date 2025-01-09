// const TEXT_TARGET_TAB = document.querySelectorAll('p')

// function increaseLineHeight() {
//     TEXT_TARGET_TAB.forEach(p => {
//         p.style.lineHeight = 1.8;
//     })
// }

// document.getElementById('line-height-change').addEventListener('click',()=> {
//     chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//         chrome.scripting.executeScript({
//             target: {tabId: tabs[0].id},
//             func: increaseLineHeight
//         });
//     });
// });