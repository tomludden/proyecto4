import { Header } from './components/Header.js'
import { AboutMe } from './components/AboutMe.js'
import { ExperienceSection } from './components/ExperienceSection.js'
import { StudiesSection } from './components/StudiesSection.js'
import { ToggleButton } from './components/ToggleButton.js'
import { Projects } from './components/Projects.js'
import { ContactForm } from './components/ContactForm.js'
import { Footer } from './components/Footer.js'

const app = document.getElementById('app')

// Append header
app.appendChild(Header())

// Append sections
app.appendChild(AboutMe())

const experienceSection = ExperienceSection()
const studiesSection = StudiesSection()

app.appendChild(experienceSection)
app.appendChild(studiesSection)

// Append toggle button for experience/studies
const toggleButton = ToggleButton(() => {
  experienceSection.style.display =
    experienceSection.style.display === 'none' ? 'block' : 'none'
  studiesSection.style.display =
    studiesSection.style.display === 'none' ? 'block' : 'none'
})
app.appendChild(toggleButton)

app.appendChild(Projects())
app.appendChild(ContactForm())
app.appendChild(Footer())
