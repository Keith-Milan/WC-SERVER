<!---Author Name:Milan, Janus Keith
     File Name: Gallery.vue
     Section: WD-202-->

<template>
<div class="gallery">
    <h1>{{DMS}}</h1>

    <h2>DONUT</h2>
    
     <img src="C:\Users\Karlo Milan\finalprj\src\assets\Dunkin-Donuts-Chocolate-Sprinkled.jpg" alt="Donut">
    <p>Dunkin Donut</p>
     
     <img src="C:\Users\Karlo Milan\finalprj\src\assets\Krispy_Kreme_glazed_donuts_2 (1).jpg" alt="Donut">

     <p>Krispy Kreme</p>
     
     <img src="C:\Users\Karlo Milan\finalprj\src\assets\download.jpg" alt="Donut">

    <p>J.CO</p>

    <h2>MILK SHAKE</h2>
    
     <img src="C:\Users\Karlo Milan\finalprj\src\assets\Starbucks_-_Coffee_Frappuccino_(51259869202).jpg" alt="MILK SHAKE">

    <p>Starbucks</p>
    
     <img src="C:\Users\Karlo Milan\finalprj\src\assets\download (1).jpg" alt="MILK SHAKE">

    <p>Sonic</p>
    
     <img src="C:\Users\Karlo Milan\finalprj\src\assets\download (2).jpg" alt="MILK SHAKE">

     <p>DQ</p>
</div>
</template>

<script>
export default {
  name: 'gallery',
  data () {
    return {
      DMS: 'DONUT AND MILK SHAKES'
    }
  }
}
</script>

<style>
.gallery{

  background-color: blueviolet;
    
    margin: -50px 0px 0px 0px;
}
h1 {
  margin: 50px 0px 0px 0px;
}
h2{
  font-size: 2em;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  margin: 4% 0% 0% 25%;
  width: 50%;
}
p{
    font-family: 'Courier New', Courier, monospace;
    text-align: center;
     margin: 0% 0% 0% 0%;
     
     
}
img{
  max-width: 20%;
  margin:  2% 0% 0% 40%;
}
</style>