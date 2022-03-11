<template>
  <div class="p-12">
    <Alerts />
    <Buttons />
  </div>
</template>

<script>
// import Pages
import Alerts from './pages/Alerts.vue';
import Buttons from './pages/Buttons.vue';

export default {
  name: 'App',
  components: {
    Alerts,
    Buttons
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
