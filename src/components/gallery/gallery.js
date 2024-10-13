export const printGallery = (data) => {
  const gallerySection = document.getElementById('gallery')

  data.forEach((element) => {
    const img = document.createElement('img')

    img.src = element

    gallerySection.appendChild(img)
  })
}
