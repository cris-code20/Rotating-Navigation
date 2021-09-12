const BTN = document.querySelector('.btn')
const Search = document.querySelector('.search')
const Input = document.querySelector('.input')

BTN.addEventListener('click', ()=>{
 Search.classList.toggle('active')
 Input.focus()   
})
