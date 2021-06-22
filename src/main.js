import Vue from 'vue';
import Vuesax from 'vuesax';
import VueCodeHighlight from 'vue-code-highlight';

import App from './App.vue';
import router from './router';

import './assets/tailwind.css';
import 'vuesax/dist/vuesax.css'; // Vuesax styles
import 'boxicons/css/boxicons.css';

Vue.config.productionTip = false;

Vue.use(VueCodeHighlight);
Vue.use(Vuesax, {
  // colors: {
  //   primary: '#5b3cc4',
  //   success: 'rgb(23, 201, 100)',
  //   danger: 'rgb(242, 19, 93)',
  //   warning: 'rgb(255, 130, 0)',
  //   dark: 'rgb(36, 33, 69)',
  // },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
