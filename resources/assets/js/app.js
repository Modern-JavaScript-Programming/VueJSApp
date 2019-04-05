/* eslint-disable no-unused-vars */
/* eslint-disable no-new */
import Vue from 'vue'
require('./bootstrap')

// import Hello from './components/Hello.vue'

// eslint-disable-next-line no-unused-vars
// const app = new Vue({
//   el: '#vue-app'

//   // components: {
//   //   Hello
//   // }
//   // render: h => h(Hello)
// })

const VueApp = new Vue(
  {
    el: '#vue-app',
    data: {
      count: 0
    }
  })
