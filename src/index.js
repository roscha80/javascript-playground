console.clear()

const form = document.querySelector('[data-form]')
const remove = document.querySelector('[data-remove]')
const input = document.querySelector('[name="classes"]')

const box = document.querySelector('[data-box]')

form.addEventListener('submit', event => {
  event.preventDefault()
  box.className = 'box ' + input.value
  input.focus()
})

remove.addEventListener('click', event => {
  event.preventDefault()
  box.classList.remove(input.value)
})
