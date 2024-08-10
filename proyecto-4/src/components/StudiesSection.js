export function StudiesSection() {
  const section = document.createElement('section')
  section.id = 'studies'
  section.style.display = 'none' // Hide by default

  const h2 = document.createElement('h2')
  h2.textContent = 'Studies'

  const ul = document.createElement('ul')
  const studies = ['Degree 1', 'Degree 2', 'Degree 3']

  studies.forEach((study) => {
    const li = document.createElement('li')
    li.textContent = study
    ul.appendChild(li)
  })

  section.appendChild(h2)
  section.appendChild(ul)

  return section
}
