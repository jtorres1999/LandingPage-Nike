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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
