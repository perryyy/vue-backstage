import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap'
import jQuery from 'jquery'
import BootstrapVue from 'bootstrap-vue'
window.$ = window.jQuery = jQuery
Vue.use(BootstrapVue)
Vue.use(ElementUI);
import AOS from "aos";
import "aos/dist/aos.css";
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.prototype.axios = axios;
Vue.use(VueAxios,axios);
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
// import Plugin from 'v-fit-columns';
// Vue.use(Plugin);
Vue.config.productionTip = false;
new Vue({
  created() {
    AOS.init({ });
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
