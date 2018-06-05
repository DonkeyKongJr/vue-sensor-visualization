<template>
  <div id="app">
    <img src="./assets/logo.png">
    <SensorData msg="Welcome to Vue Sensor Visualization."/>
  </div>
</template>

<script>
import SensorData from './components/SensorData.vue'

export default {
  name: 'app',
  components: {
    SensorData
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
