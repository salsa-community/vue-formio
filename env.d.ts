/// <reference types="vite/client" />

/**
 * Augment the typings of Vue.js
 */

declare module "*.vue" {
  import { DefineComponent } from "vue";
  // eslint-disable-next-line
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
