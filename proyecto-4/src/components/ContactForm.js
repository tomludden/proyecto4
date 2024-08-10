export function ContactForm() {
  const section = document.createElement('section')
  section.id = 'contact'

  const h2 = document.createElement('h2')
  h2.textContent = 'Contact'

  const form = document.createElement('form')

  const nameLabel = document.createElement('label')
  nameLabel.textContent = 'Name:'
  const nameInput = document.createElement('input')
  nameInput.type = 'text'

  const emailLabel = document.createElement('label')
  emailLabel.textContent = 'Email:'
  const emailInput = document.createElement('input')
  emailInput.type = 'email'

  const commentLabel = document.createElement('label')
  commentLabel.textContent = 'Comment:'
  const commentInput = document.createElement('textarea')

  const submitButton = document.createElement('button')
  submitButton.type = 'submit'
  submitButton.textContent = 'Submit'

  form.appendChild(nameLabel)
  form.appendChild(nameInput)
  form.appendChild(emailLabel)
  form.appendChild(emailInput)
  form.appendChild(commentLabel)
  form.appendChild(commentInput)
  form.appendChild(submitButton)

  section.appendChild(h2)
  section.appendChild(form)

  return section
}
