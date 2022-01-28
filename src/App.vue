<template>
  <div id="app">
    <appHeader></appHeader>
    <Home />
    <Admin />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './components/Home.vue';
import Admin from './components/Admin'

export default {
  name: 'App',
  components: {
    appHeader: Header,
    Home,
    Admin,
  }
}
</script>

<style>

</style>
