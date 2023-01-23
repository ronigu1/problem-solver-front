import Vue from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";
import text from './assets/consoleText';
Vue.use(VueSimpleAlert);


Vue.config.productionTip = false
axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
Vue.use(VueAxios, axios);

const shared_data={
  server_domain: "http://localhost:3000"
};
// creating a new Vue instance and mounting it to a DOM element with the id "app." 
console.log(text);
new Vue({
  el: '#app',
  data() {
    return {
      store: shared_data
    };
  },
  render: h => h(App)
})
