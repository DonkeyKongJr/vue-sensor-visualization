<template>
  <v-app>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <v-btn raised color="primary" v-on:click="reloadData">Reload</v-btn>
      <div class="sensordata">
        <p>Temperature: {{temp.toFixed(2)}}°C</p>
        <p>Humidity: {{humidity.toFixed(2)}}%</p>
      </div>
    </div>
  </v-app>
</template>

<script>
import axios from 'axios';

export default {
  data: function(){ 
    return {
      baseUrl: 'http://192.168.1.43:3000/',
      clickCount: 0,
      temp: 0,
      humidity: 0
    }
  }
  ,
  props: {
    msg: String,
  },
  created: function() {
      this.reloadData();
  },
   methods: {
    reloadData: function() {
      axios.post(`${this.baseUrl}sensordata`)
      .then((respone) => {
        if(respone.data) {
          this.temp = respone.data.temp;
          this.humidity = respone.data.humidity;
        }
      })
      .catch((err) => {
      console.log(`Error getting data from Raspberry Pi: ${err}`);  
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.sensordata{
  margin-top: 3%;
  font-size: 1.2rem;  
}
</style>
