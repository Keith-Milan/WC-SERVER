//Activity Name: Two-Ways.js
//Author: Milan, Janus Keith T.
//Section: WD-202 

const TwoWayBinding = {
  data(){
      return{
          message: 'Hello Vue'
      }
  }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')