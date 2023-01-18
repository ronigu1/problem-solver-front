import Vue from 'vue'
import App from './App.vue'
import VueAxios from "vue-axios";
import axios from "axios";


Vue.config.productionTip = false
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
