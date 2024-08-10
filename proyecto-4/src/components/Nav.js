export function Nav() {
  const nav = document.createElement('nav')
  const ul = document.createElement('ul')

  const links = [
    'Contact',
    'Experience/Studies',
    'About Me',
    'Skills',
    'Projects'
  ]

  links.forEach((linkText) => {
    const li = document.createElement('li')
    const a = document.createElement('a')
    a.href = `#${linkText.toLowerCase().replace(/ /g, '-')}`
    a.textContent = linkText
    li.appendChild(a)
    ul.appendChild(li)
  })

  nav.appendChild(ul)
  return nav
}
