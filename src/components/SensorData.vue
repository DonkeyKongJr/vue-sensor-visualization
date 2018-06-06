<template>
  <v-app>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <v-btn raised color="primary" v-on:click="clickHandler">Click here</v-btn>
      click count: {{clickCount}}
    </div>
  </v-app>
</template>

<script>
export default {
  data: function(){ 
    return {
      clickCount: 0
    }
  }
  ,
  props: {
    msg: String,
  },
   methods: {
    clickHandler: function () {
      this.clickCount += 1;
      console.log('Logging... ' + this.clickCount.toString())
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
</style>
