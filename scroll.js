const scroll = document.querySelector(".scroll")
const root = document.querySelector(":root")

const img1 = document.getElementById('front')
const img2 = document.getElementById('mid')
const img3 = document.getElementById('back')


function setScrollWidth() {
  root.style.setProperty("--scrollWidth", `-${parseInt(scroll.offsetWidth/2)}px`)
  console.log(`${scroll.offsetWidth}px`)
}

window.onresize = setScrollWidth

setScrollWidth()

function changeImage(src) {
  img3.src = img2.src
  img2.src = img1.src
  img1.src = src
}
