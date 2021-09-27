<template>
  <div class="container">
    <br><br><br><br>
    <b-container class="bv-example-row">
      <b-row class="rowproducto">
        <b-col cols="12" md="4" >
          <img :src="require('@/assets/card1.png')" alt="diseño" class="cent">
        </b-col>
        <b-col cols="12" md="8">
          <h2>Sensor de Temperatura y Humedad</h2>
          <div>
            <p class="descrip">{{descrip}}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <div class="accordion" role="tablist" >
      <br><br><br><br>
      <b-card no-body class="contenedor mb-1">
        <b-card-header header-tag="header" class="carac p-1 " role="tab">
          <b-button block v-b-toggle.accordion-1 class="color">CARACTERISTICAS</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel" >
          <b-card-body class="text">
            <b-card-text>{{ caract }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 class="color">BENEFICIOS</b-button>
        </b-card-header >
        <b-collapse id="accordion-2" accordion="my-accordion"  class="text">
          <b-card-body >
            <b-card-text >{{ beneficios }}</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        caract: `
          sus caracteristiocas varian porque este sensor es mejor que los demas
        `,
        beneficios: `
          sus beneficios van ligados al cuido de la persona
        `,
        descrip: 
        `Se encarga de monitorear la temperatura de un sitio en tiempo real a través de una APP móvil, informar mediante
        notificación al móvil cuando esta variable salga del rango establecido, detección de apertura y
        cierre de puerta, alerta sonora cuando la variable sale del rango establecido. Generar informes
        gráficos por periodos de tiempos del funcionamiento de todo el sistema.`
      }
    }
  }
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
  .descrip{
    margin-top: 100px;
    font-family: 'Montserrat';
    font-size: 20px;
  }
  h2{
    margin-top: 40px;
  }
  .carac{
    text-align: left;
  }
  .contenedor{
    width: 100%;
    
  }
  .color{
    background-color: #fbfbfb;
    font-family: 'Montserrat';
    font-size: 20px;
    color: black;
    width: 100%;
    text-align: left;
  }
  .accordion{
    font-family: 'Montserrat';
    font-size: 17px;
    text-align: left;
    border-style: none;
    width: 110%;
    margin-left: -60px;
    
  }
  @media only screen and (max-width: 1024px) {
   .accordion{
     margin: 0px 0px;
     width: 100%;
   }
   .descrip{
     margin-top: 50px;
     text-align: left;
   }
   h2{
     margin-top: 100px;
   }
  }

</style>
