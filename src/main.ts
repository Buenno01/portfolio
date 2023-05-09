import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn as fabLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faInstagram as fabInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBehance as fabBehance } from '@fortawesome/free-brands-svg-icons'
import { faGithub as fabGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faSun as farSun } from '@fortawesome/free-regular-svg-icons'
import { faMoon as fasMoon } from '@fortawesome/free-solid-svg-icons'
import { faUser as fasUser } from '@fortawesome/free-solid-svg-icons'
import { faBarsProgress as fasBarsProgress } from '@fortawesome/free-solid-svg-icons'
import { faBook as fasBook } from '@fortawesome/free-solid-svg-icons'
import { faFile as fasFile } from '@fortawesome/free-solid-svg-icons'
import { faVuejs as fabVuejs } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt as fabCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faSquareJs as fabSquareJs } from '@fortawesome/free-brands-svg-icons'




library.add(faCube, fabLinkedinIn, fabBehance, fabInstagram, fabGithub, farEnvelope, farSun, fasMoon, fasUser, fasBarsProgress, fasBook, fasFile, fabVuejs, fabCss3Alt, fabSquareJs)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')