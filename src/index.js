import Vue from 'vue';
import App from './App';

new Vue({
  el: "#app",
  components: { App },
  template: `<App :state="state" />`,
  data:{
    state:{
      showDone: false,
      todos:[{
        text: "Create API",
        done: true
      },{
        text: "Secure API",
        done: false
      },{
        text: "Make Auth to API",
        done: false
      }]
    }
  }
});