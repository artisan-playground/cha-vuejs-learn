<template>
  <div id="app">
    <header>
      PORTFOLIO
      <ul>
        <li><router-link to="/profile">Go to Profile</router-link></li>
        <li><router-link to="/education">Go to Education</router-link></li>
        <li><router-link to="/activity">Go to Activity</router-link></li>
      </ul>
    </header>
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
  text-align: left;
  width: 100%;
  padding: 1rem;
  max-width: 100rem;
  font-size: larger;
}
footer {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 5rem auto;
  border-radius: 10px;
  background-color: indianred;
  color: white;
  text-align: center;
  width: 100%;
  padding: 1rem;
  max-width: 100rem;
}
ul {
  display: flex;
  justify-content: center;
  text-indent: 4rem;
}
</style>
