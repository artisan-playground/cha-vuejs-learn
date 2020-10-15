<template>
  <div id="app">
    <header>
      <strong>PORTFOLIO</strong>
      <ul>
        <li class="link"><router-link class="link" to="/profile">Go to Profile</router-link></li>
        <a href="/vue-app/src/page/education.vue"
          ><li class="link">
            <router-link class="link" to="/education">Go to Education</router-link>
          </li></a
        >
        <a href="/vue-app/src/page/activity.vue"
          ><li class="link">
            <router-link class="link" to="/activity">Go to Activity</router-link>
          </li></a
        >
      </ul>
    </header>
    <router-view />
    <footer>C H A L I N D A</footer>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
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
.link {
  color: white;
}
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
  text-align: inherit;
  width: 100%;
  padding: 2px;
  max-width: 100rem;
  font-size: larger;
}
footer {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 8rem auto;
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
  color: white;
}
</style>
