<template>
  <div id="app">
    <header>PORTFOLIO</header>
    <img alt="Vue logo" src="./assets/cha.jpg" />
    <HelloWorld msg="Welcome to Portfolio Of Chacha" />
    <router-view />
    <footer>C H A L I N D A</footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  mounted() {
    this.getAPIVersion()
  },
  methods: {
    getAPIVersion() {
      axios
        .get('/api/version')
        .then(response => {
          console.log(`version=${response.data}`)
        })
        .catch(error => {
          console.error('error:', error.status, error)
        })
    },
  },
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
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 5rem auto;
  border-radius: 10px;
  background-color: indianred;
  color: white;
  text-align: center;
  width: 100%;
  max-width: 100rem;
}
footer {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 5rem auto;
  border-radius: 10px;
  background-color: indianred;
  color: white;
  text-align: center;
  width: 100%;
  max-width: 100rem;
}
</style>
