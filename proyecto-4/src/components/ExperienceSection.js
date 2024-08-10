export function ExperienceSection() {
  const section = document.createElement('section')
  section.id = 'experience'

  const h2 = document.createElement('h2')
  h2.textContent = 'Experience'

  const ul = document.createElement('ul')
  const experiences = ['Job 1', 'Job 2', 'Job 3']

  experiences.forEach((exp) => {
    const li = document.createElement('li')
    li.textContent = exp
    ul.appendChild(li)
  })

  section.appendChild(h2)
  section.appendChild(ul)

  return section
}
