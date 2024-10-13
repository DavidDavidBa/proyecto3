import { getDataImages } from '../../../main.js'
import { resetPage, page } from '../showMore/showMore.js'

export let inputValue

const input = document.querySelector('input')

input.addEventListener('change', (e) => {
  resetPage()

  const gallerySection = document.getElementById('gallery')
  gallerySection.innerHTML = ''

  inputValue = e.target.value

  getDataImages(inputValue, page, 10)

  input.value = ''
})

export const changeInputValue = (value) => {
  inputValue = value
}
