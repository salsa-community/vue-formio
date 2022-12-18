import Vue from "vue";
import App from "./App.vue";

import * as bootstrapVueConfig from "./config/config-bootstrap-vue";
import { Form, FormBuilder } from "vue-formiojs";

import "./assets/scss/global.scss";
import "./assets/scss/vendor.scss";

bootstrapVueConfig.initBootstrapVue(Vue);
Vue.component("form-io", Form);
Vue.component("form-builder", FormBuilder);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
