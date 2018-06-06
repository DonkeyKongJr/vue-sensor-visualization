import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';

Vue.use(Vuetify);
Vue.config.productionTip = false;

import 'vuetify/dist/vuetify.min.css';

new Vue({
  render: createEle => createEle(App)
}).$mount('#app');
