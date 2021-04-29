console.clear()

const box = document.querySelector('[data-box]')
const inputRotate = document.querySelector('[js__rotate]')
const inputScale = document.querySelector('[js__scale]')
const inputRadius = document.querySelector('[js__radius]')
const inputColor = document.querySelector('[js__color]')

inputRotate.addEventListener('input', event => {
  event.preventDefault()
  box.style.transform = 'rotate(' + inputRotate.value + 'deg)'
})

inputScale.addEventListener('input', event => {
  event.preventDefault()
  box.style.transform = 'scale(' + inputScale.value + '%)'
})

inputRadius.addEventListener('input', event => {
  event.preventDefault()
  box.style.borderRadius = inputRadius.value + 'px'
})

inputColor.addEventListener('input', event => {
  event.preventDefault()
  box.style.backgroundColor = 'hsl(' + inputColor.value + 'deg, 100, 100)'
  console.log('hsl(' + inputColor.value + 'deg, 100, 100)')
})
