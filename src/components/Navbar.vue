<template>
  <header>
    <b-navbar toggleable="lg" type="dark" >
      <router-link to="/" class="navbar-brand">
        <img v-bind:src="require('../assets/logo_abajo.png')" alt="logo" >
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>    
        <b-navbar-nav  class="navbar-nav ">
          <b-nav-item  >
          <router-link to="/" class="nav-link"  >INICIO</router-link>  
          </b-nav-item>
          <b-nav-item >
            <router-link to="/Productos" class="nav-link" >PRODUCTOS</router-link>  
          </b-nav-item>
          <b-nav-item >
            <router-link to="/Contactenos" class="nav-link" >CONTACTENOS</router-link>  
          </b-nav-item >      
            <button type="button" class="boton3" >DOWNLOAD</button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Montserrat);

  header{
  position: relative;
  z-index: 99999;
  width: 100%;
  height: 100px;
  position: fixed;
  /*COLOR DEL NAVBAR*/
  background-color: #f2f2f2;
 
  }
  .navbar-toggler {
    margin: 20px 20px;
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: #6ab23c;
    border: 1px solid transparent;
    border-radius: .25rem;
    transition: box-shadow .15s ease-in-out;
    
  }
  .navbar .navbar-toggler {
    color: #6ab23c;
    border-color: #6ab23c;
  }
  
  .navbar-brand img{
  width: 220px;
  height: 57px;
  }
  .nav-item{
  margin: 11px 15px;
  margin-top: -10px;
  }

  .navbar  a.nav-link {
    text-transform: capitalize;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: 0.5px;
    color: rgb(0, 0, 0);
    transition: all .55s;
    margin-top: 10px;
    border: none;
    font-family: "Montserrat", sans-serif;
    font-weight:lighter;
    
  }
  
  /*lo que voy a utilizar*/
  .navbar .nav-link:hover {
    
    padding-bottom: 0px ;
    border-bottom: 2px solid #6ab23c;
  }
  .boton3 {
  color: #000000 !important;
  font-size: 20px;
  font-weight: 550;
  padding: 1em 1.2em;
  background: rgba(0,0,0,0);
  border: none;
  border-radius: 10px;
  border-color: #6ab23c;
  transition: all 1.5s ease;
  position: relative;
  outline: none;
  font-family: "Montserrat", sans-serif;
}
.boton3:hover {
  background: #6ab23c;
  color: rgb(0, 0, 0) !important;
}

</style>