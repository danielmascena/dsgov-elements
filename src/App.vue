<template>
  <div id="app">
    <figure>
      <img alt="Vue logo" src="./assets/logo.png" width=50>
    </figure>
    <Showcase />
  </div>
</template>

<script>
import Showcase from '@/components/Showcase';

export default {
  name: 'App',
  components: {
    Showcase
  }
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
</style>
