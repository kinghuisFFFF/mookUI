import Vue from 'vue'
import App from './App.vue'


import '../components/css/demo.scss';
import '../components/css/card.scss';
// import Demo from '../components/lib/demo/src/main.vue';
import Demo from '../components/lib/demo/index';
import Card from '../components/lib/card/index';
// Vue.component('name',Demo)
Vue.use(Demo) // Demo.install ===> Vue.component('name',Demo)
Vue.use(Card)

// 全部引入
// import 'mooc-ui/dist/css/index.css'
// import MUI from "mooc-ui";
// Vue.use(MUI);


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
