import { createApp } from 'vue';
import MainApp from './MainApp.vue';

import store from './store/mainStore';
import mitt from 'mitt';
import router from './router/mainRouter';

const emitter = mitt();

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './assets/css/mainStyle.css';

const app = createApp(MainApp);

app.config.globalProperties.emitter = emitter;
app.use(store);
app.use(router);

app.mount('#app');
