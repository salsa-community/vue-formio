import Vue from "vue";
import App from "./App.vue";

import { Form, FormBuilder } from "./components";

Vue.component("form-io", Form);
Vue.component("form-builder", FormBuilder);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
