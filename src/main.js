import Vue from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from "axios";
import VueSimpleAlert from "vue-simple-alert";

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
console.log("shared_data:",shared_data);


new Vue({
  data() {
    return {
      store: shared_data
    };
  },
  render: h => h(App),
}).$mount('#app')
