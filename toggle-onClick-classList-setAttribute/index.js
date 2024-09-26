
const paragraph  = document.querySelector('h1');

function isBold() {
   paragraph.classList.toggle('bold')
}
function isItalic() {
   paragraph.classList.toggle('italic')
}
function isUnder() {
   paragraph.classList.toggle('under')
}
function bgc() {
    paragraph.classList.toggle('bgc')
}
function isReset() {
    paragraph.setAttribute('class','')
}