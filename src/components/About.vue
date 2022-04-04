<!---Author Name:Milan, Janus Keith
     File Name: About.vue
     Section: WD-202-->

<template>
  <div class="about">
      <h1>{{DN}}<br>The word 'donut' came soon after when a woman is said to have put nuts in the dough before frying it.</h1>
       
      <h1>{{MS}}<br>A milkshake is a sweet drink made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.</h1>
      
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      DN: 'About The Donut:',
      MS: 'About The Milk Shake:'
    }
  }
}
</script>

<style scoped>
.about{
   background-color: blueviolet;

   margin: -60px 0px 0px 0px;
}
h1{
  font-size: 1.5em;
  font-family: Arial, sans-serif, monospace;
  text-align: center;
  margin: 4% 0% 0% 25%;
  width: 50%;
}
p{
  font-size: 1.5em;
  font-family: Arial, sans-serif, monospace;
  
  text-align: center;
  margin: 4% 0% 0% 25%;
  width: 50%;
}
</style>