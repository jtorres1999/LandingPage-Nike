<template>
  <div class="container">
    <br><br><br><br>
    <b-container class="bv-example-row">
      <b-row class="rowproducto">
        <b-col cols="12" md="4" >
          <!-- <b-carousel
          id="carousel-1"
          v-model="slide"
          :interval="4000"
          controls
          indicators
          background="#ababab"
          img-width="924"
          img-height="680"
          style="text-shadow: 1px 1px 2px #333;"
          @sliding-start="onSlideStart"
          @sliding-end="onSlideEnd"
        >
        <b-carousel-slide img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQyXX8-5XyU6W3hUPia7y3tyKAcCPTBqyG4A&usqp=CAU" ></b-carousel-slide>
        <b-carousel-slide img-:src='../assets/card1.png'></b-carousel-slide>
        </b-carousel> -->
        
        <img :src="require('../assets/card2.png')" alt="logo" class="location" >
        </b-col>
        <b-col cols="12" md="8">
          <h2> <center> Sensor de Temperatura</center></h2>
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
            <b-card-text>
              <ul v-for="(caract,index) in caracts" :key="index">
                <li>{{ caract.item }}</li>
              </ul></b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block v-b-toggle.accordion-2 class="color">BENEFICIOS</b-button>
        </b-card-header >
        <b-collapse id="accordion-2" accordion="my-accordion"  class="text">
          <b-card-body >
            <b-card-text >
              <ul v-for="(beneficio,index) in beneficios" :key="index">
                <li>{{ beneficio.item }}</li>
              </ul></b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
      <br><br>
      <h2><center>Area de Aplicacion</center></h2>
      <div v-for="(area,index) in areas" :key="index" class="area">
        <b-card-title>
          <img :src="area.src" alt="producto1" class="product">
        </b-card-title>
        <b-card-text class="texto">
          {{area.title}}
        </b-card-text>
      </div>
       <br><br><br>
       <h2><center>Productos Relacionados</center></h2>
      <div v-for="(card,index) in cards" :key="index" class="relacionados">
        <router-link :to="card.url">
        <b-card-title>
          <img :src="card.src" alt="producto1" class="image">
        </b-card-title>
        </router-link>
        <b-card-text class="texto">
          {{card.modelo}}
        </b-card-text>
      </div>
      <br><br><br>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        caracts:[
          {
            item:'Configuración fácil a internet en menos de 3 minutos.'
          },
          {
            item: 'Configuración del nombre del área en que se ubicará.'
          },
          {
            item: 'Personalización del nombre de cada multisensor'
          },
          {
            item: 'Modificación del tiempo de muestreo (según requerimiento del cliente).'
          },
          {
            item: 'Modificación de límites de alarma.'
          },
          {
            item: 'Visualización de las mediciones máximas y mínimas de las últimas 24 horas.'
          },
          {
            item: 'Monitorear el estado de la batería de respaldo con que cuenta el sistema de monitoreo.'
          },
          {
            item: 'Generación de informes de medición.'
          }
        ],
        beneficios:[
          {
            item: 'Facilidad de instalación del dispositivo multisensor.'
          },
          {
            item: 'Mejorar la atención del paciente mediante el seguimiento del confort térmico de su habítación.'
          },
          {
            item: 'Disminución del riesgo por pérdida de cadena de frío.'
          },
          {
            item: 'Disminución del riesgo en el área de producción.'
          }
        ],
        descrip: 
        `Se encarga de monitorear la temperatura de un sitio en tiempo real a través de una APP móvil, informar mediante
        notificación al móvil cuando esta variable salga del rango establecido, detección de apertura y
        cierre de puerta, alerta sonora cuando la variable sale del rango establecido. Generar informes
        gráficos por periodos de tiempos del funcionamiento de todo el sistema.`,
        /* slide: 0,
        sliding: null, */
        
        cards:[
          {
            src: require('../assets/card1.png'),
            modelo: "Modelo: HMPE-T-2IND",
            url: '/Sensor-de-temperatura-y-humedad'
          },
          {
            src: require('../assets/card3.png'),
            modelo: "Modelo: HMPE-T-2IND-B",
            url: '/Multisensor-de-planta-electrica'
          } 
        ],
        areas: [
          {
            src: require('../assets/Lab.jpeg'),
            title: 'Laboratorio'
          },
          {
            src: require('../assets/Hosp.jpeg'),
            title: 'Hospital'
          },
          {
            src: require('../assets/ofi.jpeg'),
            title: 'Oficina'
          }
        ]
      }
    },
   /*  methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    } */
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
    font-family: 'Monserrat';
    font-size: 28px;
    padding: 10px;
  }
  .location{
    width: 300px;
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
  @media only screen and (max-width: 1025px) {
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
   .adp{
     display: inline-flex;
     margin: 0px 0px;
   }
  }
  @media only screen and (max-width: 361px){
     .relacionados{
       margin-left: -10px;
       
       margin-top: 10px;
     }
     h2{
       margin-top: 50px;
       margin-left: 150px;
       font-weight: bolder;
       font-size: 23px;
     }
     .product{
       display: inline-flex;
       width: 100px;
     }
  }
.targetas{
  position: relative;
  height: 210px;
  width: 200px;
  background-color: rgb(212, 226, 198);
  display: flex;
  
}
.area{
  display: inline-block;
  text-align: center;
  margin-left: 150px;
}
.relacionados{
  display: inline-block;
  text-align: center;
  margin-left: 250px;
}
.adp{
  margin: 0px -50px;
}
.product{
  width: 250px;
}
  .texto{
    opacity: 0;
    font-weight: bolder;
    font-size: 17px;
    font-family: "Montserrat", sans-serif;
  }
  .relacionados:hover{
    transform: translateY(20px);
  }
  .relacionados:hover .texto{
    opacity: 1;
  }
  .area:hover{
    transform: translateY(20px);
  }
  .area:hover .texto{
    opacity: 1;
  }
  .image{
    width: 270px;
    margin: 0px -100px
  }
  
</style>
