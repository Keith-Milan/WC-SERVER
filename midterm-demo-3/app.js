//Activity Name: app.js
//Author: Milan, Janus Keith T.
//Section: WD-202 

const app = Vue.createApp({
  // Create functions, data
  data(){
   return{
      title: 'The Ledger',
      author:'Joseph',
      age: 34
    }
  }
  //template: "<h2> This is my website </h2>"
});

app.mount('#app')