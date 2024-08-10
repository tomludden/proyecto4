export function AboutMe() {
  const section = document.createElement('section')
  section.id = 'about-me'

  const h2 = document.createElement('h2')
  h2.textContent = 'About Me'

  const img = document.createElement('img')
  img.src = '/path-to-your-image.jpg'
  img.alt = 'Your Name'

  const p = document.createElement('p')
  p.textContent = 'Brief description about yourself.'

  section.appendChild(h2)
  section.appendChild(img)
  section.appendChild(p)

  return section
}
