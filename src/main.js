// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import PortalVue from 'portal-vue';
import {PortalTarget} from 'portal-vue';

Vue.config.productionTip = false
Vue.use(PortalVue);

// const target = new Vue({
//   el: '#pageNav',
//   ...PortalTarget,
//   propsData: {
//     // name: myTarget
//   }
// })

const targetWrapper = new Vue({
  el: '#pageNav',
  components: {  PortalTarget },
  template: '<portal-target class="my-custom-class" name="pageNav"/>' // add any attributes on this element
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
