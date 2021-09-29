<template>
  <div class="contenedor">
    <img :src="require('../assets/Diseno.png')" alt="" class="cent2"/> 
    <div class="src">  
      <a href="https://www.helpmedica.com" >
        <img :src="require('../assets/Boton_descargar.png')" alt="descarga" >
      </a>
    </div>
    <div v-for="(product,index) in products" :key="index" class="products">
      <b-card-title>
        <img :src="product.src" alt="producto1" class="product">
      </b-card-title>
      <b-card-text><center>
        {{product.title}}</center>
      </b-card-text>
    </div>
    <br><br><br>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            title: 'Modelo: HM-TH-B ',
            src: require('../assets/card1.png'),
            root: '/Sensor-de-temperatura-y-humedad'
          },
          {
            title: 'Modelo: HM-T-2IND-B', 
            src: require('../assets/card2.png'),
             root: '/Sensor-de-temperatura'
          },
          {
            title: 'Modelo: HMPE-T-2IND-B',
            src: require('../assets/card3.png'),
             root: '/Multisensor-de-planta-electrica'
          }
        ],

      }
    }
  }
</script>

<style scoped>
  .cent2{
    width: 100%;
    height: 60%;
    margin: 90px 0px;
  }
  .src img{
    width: auto;
    top: -255px;
    left: 190px;
    height: 150px;
    position: relative;
  }
  img:hover{
    filter: saturate(140%);
  }
   @media only screen and (max-width: 780px) {
    .src img{
    width: 200px;
    height: 100px;
    margin-left: -100px;
    margin-top: 80px;
  }
   }
  .product{
    width: 300px;
    display: flex;
  }
  .products{
    display: inline-block;
    margin-left: 100px;
    margin-top: -150px;
  }
</style>