import { createApp } from 'vue';
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App.vue';

const app = createApp(App);

app.use(store);

app.mount('#app');
