import { inputValue } from './src/components/filter/filter.js'
import { printGallery } from './src/components/gallery/gallery.js'
import { noDataSearch } from './src/components/noDataSearch/noDataSearch.js'
import {
  createShowMoreButton,
  deleteShowMoreButton,
  page
} from './src/components/showMore/showMore.js'

const accessKey = '-Vv6o5PTiqpr9v0pjMDHw_k91YSSj17Vm3sbMJwihYY'
const apiUrl = 'https://api.unsplash.com/search/photos'

const logo = document.querySelector('.logo')
logo.addEventListener('click', () => {
  defaultGallery()
})

const app = document.getElementById('app')
const gallerySection = document.createElement('section')
gallerySection.id = 'gallery'
app.appendChild(gallerySection)

export const getDataImages = async () => {
  let data = []

  try {
    const response = await fetch(
      `${apiUrl}?query=${inputValue}&page=${page}&client_id=${accessKey}`
    )
    const res = await response.json()

    if (res.results.length > 0) {
      for (let i = 0; i < res.results.length; i++) {
        data.push(res.results[i].urls.full)
      }
    } else {
      noDataSearch()
    }

    printGallery(data)
    createShowMoreButton()
  } catch (error) {
    console.log(error)
  }
}

const defaultGallery = async () => {
  let data = []

  try {
    const response = await fetch(
      `${apiUrl}?query=birds&page=1&per_page=20&client_id=${accessKey}`
    )
    const res = await response.json()

    for (let i = 0; i < res.results.length; i++) {
      data.push(res.results[i].urls.full)
    }

    const galleryDiv = document.getElementById('gallery')
    galleryDiv.innerHTML = ''

    printGallery(data)
    deleteShowMoreButton()
  } catch (error) {
    console.log(error)
  }
}

defaultGallery()
