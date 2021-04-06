import Axios from 'axios';
import $ from 'jquery';

declare global {
  namespace NodeJS {
    interface Global {
      $: typeof $;
      jQuery: typeof $;
      vue: Vue;
      EventBus: Vue;
      axios: typeof Axios;
    }
  }
}

// Axios
global.axios = Axios;
global.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

// Vue
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import components from './components';

Vue.use(BootstrapVue);

global.vue = new Vue({
  el: '#app',
  components,
});
