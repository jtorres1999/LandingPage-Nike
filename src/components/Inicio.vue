<template>
  <header>
    <div class="contenedor">
      <img :src="require('@/assets/Help_Smart-01.png')" alt="principalS" class="centrar1">
      <img :src="require('@/assets/Diseno.png')" alt="diseño" class="cent">
      <div class="src">
        <a href="https://www.helpmedica.com" >
          <img :src="require('@/assets/Boton_descargar.png')" alt="" >
        </a>
      </div>
      <b-container class="bv-example-row" >
        <b-row>
          <b-col cols="12">
            <div class="box" >
              <div class="titulo">Sensor de Temperatura y Humedad</div>
                <br>
                <div class="modelo">
                  Modelo: HM-TH-B 
                </div>
                <br>
                <ul class="lista">
                  <li>Monitoreo de temperatura y humedad en tiempo real.</li>
                  <li>Configuración fácil en menos de 3 minutos</li>
                  <li>Personalizaciones del dispositivo</li>
                </ul>     
                <b-button variant="outline-success" type="button" class="btn">Ver Más</b-button>
            </div>
            <router-link to="/Sensor-de-temperatura-y-humedad">
            <video autoplay muted loop id="myVideo">
              <source src="../assets/Producto1.mp4" type="video/mp4" class="embed-responsive-item">
            </video>
            </router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <div class="box">
              <div class="titulo">Sensor de Temperatura </div>
                <br>
                <div class="modelo">
                  Modelo: HM-T-2IND-B
                </div>
                <br>
                <ul class="lista">
                  <li>Monitoreo de temperatura y humedad en tiempo real.</li>
                  <li>Configuración fácil en menos de 3 minutos</li>
                  <li>Personalizaciones del dispositivo</li>
                  <li>Detección de apertura y corte de energía</li>
                </ul>
                <b-button variant="outline-success" type="button" class="btn">Ver Más</b-button>  
            </div>
            <router-link to="/Sensor-de-temperatura">
            <video autoplay muted loop id="myVideo2">
                <source src="../assets/Gif2.mp4" type="video/mp4" class="embed-responsive-item">
            </video>
            </router-link>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12">
            <div class="box">
              <div class="titulo">Multisensor de Planta Electrica</div>
                <br>
                <div class="modelo">
                  Modelo: HMPE-T-2IND-B
                </div>
                <br>
                <ul class="lista">
                  <li>Monitoreo del estado de la planta eléctrica y la red eléctrica externa</li>
                  <ul>
                    <li>Encendido y apagado</li>
                    <li>Temperatura del area</li>
                  </ul>
                  <li>Configuración fácil en menos de 3 minutos</li>
                  <li>Personalizaciones del dispositivo</li> 
                </ul>
                <b-button variant="outline-success" type="button" class="btn">Ver Más</b-button>
              </div>
            <router-link to="/Multisensor-de-planta-electrica">
            <video autoplay muted loop id="myVideo3">
              <source src="../assets/Plantaelectrica2.mp4" type="video/mp4" class="embed-responsive-item">
            </video>
            </router-link>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
</template>

<script>
export default {
  data: {
      
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
  /**Imagenes principales */
    img{
      position: relative;
      width: 100%;
      height: 25%;
      margin: 100px 0px;
  }
  .cent{
      position: relative;
      width: 100%;
      height: 60%;
      margin: -95px 0px;
  }
  .src img{
      position: relative;
      top: -165px;
      left: -250px;
      width: auto;
      height: 150px;
  }
  /**VIDEOS */
  #myVideo {
    right: 0;
    bottom: 0;
    min-width: 70%;
    min-height: 90%;
    max-width: 110%;
    max-height: 100%;
  }
  #myVideo2{
    bottom: 0px;
    min-width: 90%;
    min-height: 50%;
    max-width: 109%;
    max-height: 110%;  
  }
  #myVideo3{
    min-width: 90%;
    min-height: 50%;
    max-width: 110%;
    max-height: 100%;
  }
  .bv-example-row{
    position: relative;
    margin-top: -190px;
  }
  /** */
  .body{
    font-size: 1vw;
    font-weight: lighter;
    font-family: "Montserrat", sans-serif;
    color: #000;
  }
  .titulo{
    font-size: 2vw;
    font-weight: bolder;
    font-family: "Montserrat", sans-serif;
    color: #000; 
  }
  .modelo{
    font-size: 1.5vw;
    font-weight: semibolder;
    font-family: "Montserrat", sans-serif;
    color: #000;
  }
  .box{
    position: absolute;
    text-align: left;
    grid-template-columns: auto auto auto;
    margin: 50px 0px;
  }
  @media only screen and (max-width: 780px) {
  .box  {
    font-size: 0.7vw;
    width: 40%;
    margin: 10px 0px;
  }
  .btn{
    font-size:x-small;
    margin: 0px 4-0px;
  }
  .src img{
    width: 220px;
    height: 100px;
    margin-left: 150px;
    margin-top: 180px;
  }
  }
  .lista {
  list-style: none;
  padding: 3px;
  position: relative;
  }
  ul li::before {
  content: "\2022";  
  color: rgb(0, 255, 136); 
  list-style: none;
  padding-right: 5px;
  font-size: 35px;
  line-height: 13px;
  vertical-align: -6px;
  font-family: "Montserrat", sans-serif;
  text-align:left
  }
  ul{
    text-decoration: none;
    list-style: none;
  }
  .btn{
    margin: -10px 50px;     
  }
   @media only screen and (max-width: 1024px) {
     img{
       width: 100%;
     }
   }
</style>