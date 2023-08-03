import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import {faClone} from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret, faTwitter, faClone)

createApp(App).use(bootstrap).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
