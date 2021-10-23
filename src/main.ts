import Vue from "vue";
import VueCompositionAPI from '@vue/composition-api';
Vue.use(VueCompositionAPI)

import { useMouse } from '@vueuse/core'

console.log(useMouse);

Vue.config.productionTip = false;

new Vue({
}).$mount("#app");
