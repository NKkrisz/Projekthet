const scroll = document.querySelector(".scroll")
const root = document.querySelector(":root")
function setScrollWidth() {
  root.style.setProperty("--scrollWidth", `-${parseInt(scroll.offsetWidth/2)}px`)
  console.log(`${scroll.offsetWidth}px`)
}

window.onresize = setScrollWidth

setScrollWidth()