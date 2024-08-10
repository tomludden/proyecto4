export function Projects() {
  const section = document.createElement('section')
  section.id = 'projects'

  const h2 = document.createElement('h2')
  h2.textContent = 'Projects'

  const projects = [
    { image: '/path-to-image1.jpg', title: 'Project 1' },
    { image: '/path-to-image2.jpg', title: 'Project 2' },
    { image: '/path-to-image3.jpg', title: 'Project 3' }
  ]

  projects.forEach((project) => {
    const card = document.createElement('div')
    card.className = 'project-card'

    const img = document.createElement('img')
    img.src = project.image
    img.alt = project.title

    const h3 = document.createElement('h3')
    h3.textContent = project.title

    const button = document.createElement('button')
    button.textContent = 'View Project'

    card.appendChild(img)
    card.appendChild(h3)
    card.appendChild(button)

    section.appendChild(card)
  })

  return section
}
