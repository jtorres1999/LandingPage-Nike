<template>
  <div id="app">
   <Navbar/>
   <Whatsapp/>
    <router-view/>
    <Foot/>
  </div>
  
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Foot from './components/Foot.vue'
import Whatsapp from './components/Whatsapp.vue'
export default {
  components: {
    Navbar,
    Whatsapp,
    Foot
  }
}
</script>

<style>
.navbar-dark .navbar-nav .nav-link :active{
  color: black  !important;;
}
.navbar a.nav-link:active{
  color: black !important;
}
</style>
