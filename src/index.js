console.clear()

const form = document.querySelector('[data-form]')
const input = document.querySelector('[data-input]')
const box = document.querySelector('[data-box]')

form.addEventListener('submit', event => {
  event.preventDefault()
  const farbe = input.value
  box.style.backgroundColor = farbe
  input.value = ''
  input.focus()
})
