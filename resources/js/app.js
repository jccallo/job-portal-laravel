import './bootstrap';

import { createApp } from 'vue'; // vue
import { createPinia } from "pinia"; // pinia
import App from '../src/App.vue'; // vista principal
import router from '../src/router'; // enrutador

createApp(App)
  .use(createPinia())
  .use(router)
  .mount("#app");
