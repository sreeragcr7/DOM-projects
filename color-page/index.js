
function color(z) {
    let buttonStyle = getComputedStyle(z)
    let buttonBgColor = buttonStyle.backgroundColor
    document.getElementsByTagName('body')[0].style.backgroundColor = buttonBgColor
}