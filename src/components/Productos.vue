<template>
  <div class="contenedor">
    <img :src="require('../assets/nike.jpg')" alt="" class="cent2"/> 
    <div class="src">  
      <a href="https://github.com/jtorres1999" >
        <img :src="require('../assets/adidas.png')" alt="descarga" >
      </a>
    </div>
    <div v-for="(product,index) in products" :key="index" class="products">
      <router-link :to="product.root">
      <b-card-title>
        <img :src="product.src" alt="producto1" class="image">
      </b-card-title>
      </router-link>
      <b-card-text class="text"><center>
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
            src: require('../assets/Producto1.jpg'),
            root: '/Sensor-de-temperatura-y-humedad'
          },
          {
            title: 'Modelo: HM-T-2IND-B', 
            src: require('../assets/Producto2.jpg'),
             root: '/Sensor-de-temperatura'
          },
          {
            title: 'Modelo: HMPE-T-2IND-B',
            src: require('../assets/Producto3.jpg'),
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
    top: -245px;
    left: 150px;
    height: 130px;
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

  .image{
    width: 300px;
    display: flex;
    
  }
  .products{
    display: inline-block;
    margin-left: 100px;
    margin-top: -150px;
    
  }
   @media only screen and (max-width: 1024px) {
     .products{
       margin-left: 10px;
     }
   }

  @media only screen and ( max-width: 768px){
    .image{
      width: 230px;
    }
  }
   @media only screen and (max-width: 414px){
    .image{
       width: 110px;
      
    }
    .text{
      opacity: 1;
    }
    .products{
      display: inline-flex;
      width: 110px;
    }
    .src img{
      width: 100px;
      height: 50px;
      margin-left: -150px;
      margin-top: 110px;
    }
   }
   @media only screen and (max-width: 375px){
     .products{
      display: inline-flex;
      width: 100px;
    }
    .image{
       width: 100px;
      
    }
   }
   
  .products:hover{
    transform: translateY(20px);
    filter: saturate(180%);
  }
  .text{
    opacity: 0;
    font-weight: bolder;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
  }
  .products:hover .text{
    opacity: 1;
  }
</style>