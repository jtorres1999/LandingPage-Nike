<template>
  <div class="contenedor">
    <img :src="require('../assets/Diseno.png')" alt="" class="cent2"/> 
    <div class="src">  
      <a href="https://www.helpmedica.com" >
        <img :src="require('../assets/Boton_descargar.png')" alt="descarga" >
      </a>
    </div>
    <div>
      <b-card>
        {{products.src}}
      </b-card>
      <b-card-text>
        {{products.title}}
      </b-card-text>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        products: [
          {
            title: 'Modelo: HM-TH-B ',
            src: require('../assets/card1.png')
          },
          {
            title: 'Modelo: HM-T-2IND-B', 
            src: require('../assets/card2.png')
          },
          {
            title: 'Modelo: HMPE-T-2IND-B',
            src: require('../assets/card3.png')
          }
        ]
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
    left: -290px;
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
    margin-left: 250px;
    margin-top: 80px;
  }
   }
</style>