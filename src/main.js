import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Toast from "vue-toastification"; // import vue-toastification
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import VueFeather from 'vue-feather';
import VueApexCharts from 'vue-apexcharts'
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});

localize("en", en);
Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);
Vue.use(Toast);
Vue.component('ClipLoader', ClipLoader); // clip loader for submit button
Vue.use(VueFeather);
Vue.config.productionTip = false
Vue.use(VueApexCharts)
Vue.component('apexchart', VueApexCharts)
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
