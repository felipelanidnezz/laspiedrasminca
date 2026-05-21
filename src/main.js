import { createApp } from 'vue'
import App from './App.vue'
import { Quasar, QForm, QInput, QSelect, QBtn, QCarousel, QCarouselSlide } from 'quasar'
import quasarLang from 'quasar/lang/es'

// Import Quasar CSS
import 'quasar/dist/quasar.css'

const app = createApp(App)

app.use(Quasar, {
  components: {
    QForm,
    QInput,
    QSelect,
    QBtn,
    QCarousel,
    QCarouselSlide
  },
  config: {
    dark: 'auto'
  },
  lang: quasarLang
})

app.mount('#app')

