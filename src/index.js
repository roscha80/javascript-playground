console.clear()
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box4 = document.querySelector('.box4')
const buttonBox1 = document.querySelector('.button-box1')
const buttonBox2 = document.querySelector('.button-box2')
const buttonBox3 = document.querySelector('.button-box3')
const buttonBox4 = document.querySelector('.button-box4')

buttonBox1.addEventListener('click', () => {
  box1.classList.add('showtime')
  box2.classList.remove('showtime')
  box3.classList.remove('showtime')
  box4.classList.remove('showtime')
})

buttonBox2.addEventListener('click', () => {
  box2.classList.add('showtime')
  box1.classList.remove('showtime')
  box3.classList.remove('showtime')
  box4.classList.remove('showtime')
})

buttonBox3.addEventListener('click', () => {
  box3.classList.add('showtime')
  box1.classList.remove('showtime')
  box2.classList.remove('showtime')
  box4.classList.remove('showtime')
})

buttonBox4.addEventListener('click', () => {
  box4.classList.add('showtime')
  box1.classList.remove('showtime')
  box2.classList.remove('showtime')
  box3.classList.remove('showtime')
})
