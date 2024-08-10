export function ToggleButton(toggleCallback) {
  const button = document.createElement('button')
  button.textContent = 'Toggle Experience/Studies'
  button.addEventListener('click', toggleCallback)
  return button
}
