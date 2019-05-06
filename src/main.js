// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import VueResource from 'vue-resource'

import { Button, Table, Footer, Content, Header, Slider} from 'iview';
Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Footer', Footer);
Vue.component('Content', Content);
Vue.component('Header', Header);
Vue.component('Slider', Slider);

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})