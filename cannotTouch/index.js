const div=document.querySelector("div")
const width=div.offsetWidth
const height=div.offsetHeight
const offset=100


function distance(fromOneSide,center,correction){
  return fromOneSide-center+correction/2
}


document.addEventListener("mousemove",(e)=>{

  const mouseX=e.pageX
  const mouseY=e.pageY
  const divLocation=div.getBoundingClientRect()
  const horizontalDist=distance(divLocation.x,mouseX,width)
  const verticalDist=distance(divLocation.y,mouseY,height)
  const horizontalOffset=width/2+offset
  const verticalOffset=height/2+offset

  if(Math.abs(horizontalDist) <= horizontalOffset && Math.abs(verticalDist) <= verticalOffset) {
    console.log(Math.abs(horizontalDist) <= horizontalOffset)
    newButtonPosition(
        divLocation.x + horizontalOffset / horizontalDist *10,
        divLocation.y + verticalOffset / verticalDist *10
    )
}
})


function newButtonPosition(left,top){
  const windowBox = document.body.getBoundingClientRect()
  const divBox = div.getBoundingClientRect()

  if(distance(left, windowBox.left, width) < 0) {
    left = windowBox.right-width-offset
  }
  if(distance(left, windowBox.right, width) > 0) {
    left = windowBox.left+offset
  }
  if(distance(top, windowBox.top, height) < 0) {
    top = windowBox.bottom-height-offset
  }
  if(distance(top, windowBox.bottom, height) > 0) {
    top = windowBox.top+offset
  }

  div.style.left = `${left}px`
  div.style.top = `${top}px`

}


// const evilButton = document.querySelector("div")
// const OFFSET = 100

// evilButton.addEventListener('click',() => {
//     alert('Nice Try')
//     window.close()
// })

// document.addEventListener('mousemove', (e) => {
//     const x = e.pageX
//     const y = e.pageY
//     const buttonBox = evilButton.getBoundingClientRect()
//     const horizontalDistanceForm = distanceFromCenter(buttonBox.x, x, buttonBox.width)
//     const verticalDistanceForm = distanceFromCenter(buttonBox.y, y, buttonBox.width)
//     const horizontalOffset = buttonBox.width / 2 + OFFSET
//     const VerticalOffset = buttonBox.width / 2 + OFFSET
//     if(Math.abs(horizontalDistanceForm) <= horizontalOffset && Math.abs(verticalDistanceForm) <= VerticalOffset) {
//         setButtonPosition(
//             buttonBox.x + horizontalOffset / horizontalDistanceForm *10,
//             buttonBox.y + VerticalOffset / verticalDistanceForm *10
//         )
//     }
// })
// function setButtonPosition(left, top) {
//     const windowBox = document.body.getBoundingClientRect()
//     const buttonBox = evilButton.getBoundingClientRect()
  
//     if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
//       left = windowBox.right - buttonBox.width - OFFSET
//     }
//     if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
//       left = windowBox.left + OFFSET
//     }
//     if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
//       top = windowBox.bottom - buttonBox.height - OFFSET
//     }
//     if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
//       top = windowBox.top + OFFSET
//     }
  
//     evilButton.style.left = `${left}px`
//     evilButton.style.top = `${top}px`
//   }
  
// function distanceFromCenter(boxPosition, mousePosition, boxSize){
//   console.log()
//     return boxPosition - mousePosition + boxSize / 2 
// }