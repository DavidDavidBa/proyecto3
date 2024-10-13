import { getDataImages } from '../../../main.js'

export let page = 1

const button = document.createElement('button')

export const createShowMoreButton = () => {
  const app = document.getElementById('app')

  button.textContent = 'Ver más'
  button.id = 'showMore'

  app.appendChild(button)
}

export const deleteShowMoreButton = () => {
  if (document.querySelector('#showMore')) {
    document.querySelector('#showMore').remove()
  }
}

export const resetPage = () => {
  page = 1
}

button.addEventListener('click', () => {
  page++

  getDataImages()
})
