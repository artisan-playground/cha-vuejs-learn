<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button><router-link to="/profile">Go to Profile</router-link></button>
    <p><button><router-link to="/education">Go to Education</router-link></button></p>
    <p><button><router-link to="/activity">Go to Activity</router-link></button></p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
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
  color: #4272b9;
}
</style>
