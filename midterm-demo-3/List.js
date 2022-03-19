//Activity Name: List.js
//Author: Milan, Janus Keith T.
//Section: WD-202 

const ListRendering = {
  data() {
    return {
      todos: [
        { text: 'Clean the House' },
        { text: 'Prepare Breakfast' },
        { text: ' Attend WCSERVER class' }
      ]
    }
  }
    
  }
  
  Vue.createApp(ListRendering).mount('#List-rendering')