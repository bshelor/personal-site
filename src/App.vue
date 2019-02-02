<template>
  <div id="app">
    <Toolbar></Toolbar>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: { Toolbar }
}
</script>

<style>
#app {
  font-family: -apple-system, Roboto BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
