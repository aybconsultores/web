<template>
  <div id="app">
    <Layout>
      <router-view slot="body" />
    </Layout>
  </div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>
