if (process.env.NODE_ENV !== 'production') { 
  require('dotenv').config(); 
}
import './assets/therun.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app');
