import { getDataImages } from '../../../main.js'
import { changeInputValue } from '../filter/filter.js'

export const noDataSearch = () => {
  const gallery = document.getElementById('gallery')

  gallery.innerHTML = `
        <article>
            <p>¡Sin resultados!</p>
            <p>¡Prueba con unos gatos!</p>
        </article>
    `

  changeInputValue('gato')

  getDataImages()
}
