import App from './App.js'

// components (custom web components)
import './components/td-app-header'
import './components/td-packages'
import './components/td-site-footer'



// styles
import './scss/master.scss'

// app.init
document.addEventListener('DOMContentLoaded', () => {
  App.init()
})



// all imports available to all other pages