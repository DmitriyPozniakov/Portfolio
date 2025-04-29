import { createApp } from 'vue'
import App from './App.vue'
import './assets/fonts/styles/main.scss';

import BaseButton from './components/base/BaseButton.vue';
import BaseFloating from './components/base/BaseFloating.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-floating', BaseFloating);

app.mount('#app');
