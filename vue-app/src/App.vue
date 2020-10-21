<template>
  <div id="app">
    <header>
      <h1><strong>PORTFOLIO</strong></h1 >
      <ul>
        <li class="link"><router-link class="link" to="/profile">Go to Profile</router-link></li>
        <li class="link">
            <router-link class="link" to="/education">Go to Education</router-link>
          </li>
          <li class="link">
            <router-link class="link" to="/activity">Go to Activity </router-link>
          </li>
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
  color:black;
  margin-top: 60px;
  background-image: url(https://i.pinimg.com/originals/a6/c2/bc/a6c2bc2f2fbe49640daf596b9548c97b.jpg);

}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;
  background-color: indianred;
  color:white;
  text-align: inherit;
  width: 100%;
  padding: 2px;
  max-width: 200rem;
  font-size: larger;
  margin:0 0 30px 0;

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
  max-width: 200rem;  
  font-size: large;
}
ul {
  display: flex;
  justify-content: center;
  text-indent: 4rem;
  color: white;
}
h1{
  color:white;
}
</style>
