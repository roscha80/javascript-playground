console.clear()

const form = document.querySelector('[data-form]')
const remove = document.querySelector('[data-remove]')
const input = document.querySelector('[name="classes"]')
const output = document.querySelector('[data-output]')

const box = document.querySelector('[data-box]')

form.addEventListener('submit', event => {
  event.preventDefault()
  box.className = 'box ' + input.value
  const inputText = input.value
  input.value = ''
  input.focus()
  const outputText = inputText.toUpperCase()
  output.value = outputText
})

remove.addEventListener('click', event => {
  event.preventDefault()
  box.classList.remove(input.value)
})
