export function Header() {
  const header = document.createElement('header')
  const h1 = document.createElement('h1')
  h1.textContent = 'My Portfolio'

  const nav = Nav() // Importing the Nav component

  header.appendChild(h1)
  header.appendChild(nav)

  return header
}
