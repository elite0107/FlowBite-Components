<template>
  <Alerts />
</template>

<script>
// import Pages
import Alerts from './pages/Alerts.vue';

export default {
  name: 'App',
  components: {
    Alerts
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
  margin-top: 60px;
}
</style>
