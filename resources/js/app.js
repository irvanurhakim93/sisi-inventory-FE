import { createApp } from 'vue'

require('./bootstrap')
import App from './App.vue'
import axios from 'axios'
import router from './router'


router.beforeEach((to) => {
    document.title = to.meta.title || 'Default Title'; // Fallback title
});



const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.use(router)
app.mount('#app')