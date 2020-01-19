<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Layout msg="Welcome to Your Vue.js App">
      <router-view slot="body" />
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'app',
  components: {
    Layout
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
}
</style>
