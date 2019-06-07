<template>
  <div id="app">
    <Header />
    <div>
      <Nav />
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components: {
    Nav,
    Header
  }
}
</script>

<style>

</style>
