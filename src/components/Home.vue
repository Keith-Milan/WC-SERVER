<!---Author Name:Milan, Janus Keith
     File Name: Home.vue
     Section: WD-202-->

<template>
   <div class="Home">

    <h1>{{App}}</h1>

    <h2><p>Donut</p></h2>


    <h2>a small fried cake of sweetened dough, typically in the shape of a ball or ring.</h2>
   
   <h2><p>MilkShake</p></h2>

    <h2>a cold drink made of milk, a sweet flavoring such as fruit or chocolate, and typically ice cream, whisked until it is frothy.</h2>
   </div>

    
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      App: 'WEOLCOME TO VUE.JS APP'
    }
  }
}
</script>

<style scoped>
.Home{

  background-color: blueviolet;
    
    margin: 50px 0px 0px 0px;
    height: 100%;
    width: 100%;
   
}
h2{
  
  font-size: 1.5em;
  font-family: Arial, sans-serif, monospace;
  margin: 2% 0% 0% 0%;
  width: 50%;
}
img{
  max-width: 50%;
  margin:  5% 0% 0% 25%;
}
h1{
  text-align: center;
  
  margin: 50px 0px 0px;
}
</style>