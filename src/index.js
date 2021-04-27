console.clear()
const box = document.querySelector('.box')
const buttonToggleRotate = document.querySelector('.button-rotate')
const buttonToggleBackground = document.querySelector('.button-background')
const buttonToggleRadius = document.querySelector('.button-radius')
const buttonToggleAll = document.querySelector('.button-all')

buttonToggleRotate.addEventListener('click', () => {
  box.classList.toggle('box-rotate')
})

buttonToggleBackground.addEventListener('click', () => {
  box.classList.toggle('body-background')
})

buttonToggleRadius.addEventListener('click', () => {
  box.classList.toggle('box-radius')
})

buttonToggleAll.addEventListener('click', () => {
  box.classList.toggle('box-radius')
  box.classList.toggle('body-background')
  box.classList.toggle('box-rotate')
})
