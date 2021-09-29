<template>
  <header>
    <div class="contenedor">
      <img
        :src="require('@/assets/Help_Smart-01.png')"
        alt="principalS"
        class="centrar1"
      />
      <img :src="require('@/assets/Diseno.png')" alt="diseño" class="cent" />
      <div class="src">
        <a href="https://www.helpmedica.com">
          <img :src="require('@/assets/Boton_descargar.png')" alt="" />
        </a>
      </div>
      <b-container class="bv-example-row">
        <b-row>
          <b-col cols="12" v-for="(service, index) in services" :key="index">
            <div class="box">
              <video autoplay muted loop id="myVideo3">
                <source
                  :src="service.video"
                  type="video/mp4"
                  class="embed-responsive-item"
                />
              </video>
              <div class="titulo">{{ service.title }}</div>
              <br />
              <div class="modelo">
                {{ service.modelo }}
              </div>
              <br />
              <ul
                class="lista"
                v-for="(lista, index) in service.listas"
                :key="index"
              >
                <li>{{ lista.item }}</li>
                <template v-if="lista.subitems">
                  <ul v-for="(subitem, index) in lista.subitems" :key="index">
                    <li>{{subitem.subitem}}</li>
                  </ul>
                </template>
              </ul>
              <router-link :to="service.url">
                <b-button class="btn btn-success">
                  Ver mas
                </b-button>
               </router-link>
            </div>
              
          </b-col>
        </b-row>
      </b-container>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: "Sensor de Temperatura y Humedad",
          modelo: "Modelo: HM-TH-B  ",
          listas: [
            {
              item: "Monitoreo de temperatura y humedad en tiempo real.",
            },
            {
              item: "Configuración fácil en menos de 3 minuto",
            },
            {
              item: "Personalizaciones del dispositivo",
            },
          ],
          url:'/Sensor-de-temperatura-y-humedad',
          video: require("@/assets/Producto1.mp4"),
        },
        {
          title: "Sensor de Temperatura ",
          modelo: "Modelo: HMPE-T-2IND-B ",
          listas: [
            {
              item: "Monitoreo de temperatura y humedad en tiempo real.",
            },
            {
              item: "Configuración fácil en menos de 3 minuto",
            },
            {
              item: "Personalizaciones del dispositivo",
            },
            {
              item: "Detección de apertura y corte de energía",
            },
          ],
          url:'/Sensor-de-temperatura',
          video: require("../assets/Gif2.mp4"), 
        },
        {
          title: "Multisensor de Planta electrica ",
          modelo: "Modelo: HMPE-T-2IND-B ",
          listas: [
            {
              item: "Monitoreo de temperatura y humedad en tiempo real.",
              subitems: [
                {
                  subitem: "Apagado y Encendido",
                },
                {
                  subitem: "Temperatura del area",
                },
              ],
            },
            {
              item: "Configuración fácil en menos de 3 minuto",
            },
            {
              item: "Personalizaciones del dispositivo",
            },
          ],
          url:'/Multisensor--de-planta-electrica',
          video: require("../assets/Plantaelectrica2.mp4"),
        },
      ],
    };
  },
  mounted() {
    console.log(this.services);
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);
/**Imagenes principales */
img {
  position: relative;
  width: 100%;
  height: 25%;
  margin: 100px 0px;
}
.cent {
  position: relative;
  width: 100%;
  height: 50%;
  margin: -95px 0px;
}
.src img {
  position: relative;
  top: -165px;
  right: -100px;
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
#myVideo2 {
  bottom: 0px;
  min-width: 90%;
  min-height: 50%;
  max-width: 109%;
  max-height: 110%;
}
#myVideo3 {
  min-width: 90%;
  min-height: 50%;
  max-width: 110%;
  max-height: 100%;
}
.bv-example-row {
  position: relative;
  margin-top: -190px;
}
/** */
.body {
  font-size: 1vw;
  font-weight: lighter;
  font-family: "Montserrat", sans-serif;
  color: #000;
}
.titulo {
  font-size: 2vw;
  font-weight: bolder;
  font-family: "Montserrat", sans-serif;
  color: #000;
}
.modelo {
  font-size: 1.5vw;
  font-weight: semibolder;
  font-family: "Montserrat", sans-serif;
  color: #000;
}
.box {
  text-align: left;
  grid-template-columns: auto auto auto;
  margin: 50px 0px;
}
@media only screen and (max-width: 780px) {
  .box {
    font-size: 0.7vw;
    width: 40%;
    margin: 10px 0px;
  }
  .btn {
    font-size: x-small;
    margin: 0px 4-0px;
  }
  .src img {
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
  text-align: left;
}
ul {
  text-decoration: none;
  list-style: none;
}
.btn {
  margin: -10px 70px;
}
@media only screen and (max-width: 1024px) {
  .centrar1 {
    width: 100%;
    margin-right: 1000px;
  }
}
</style>
