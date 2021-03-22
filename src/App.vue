<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width=50>
    <AppButton label='Hello' />
    <AppButton label="Primary" type="filled" />
    <AppButton label="Secondary" type="outlined" />
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue'

export default {
  name: 'App',
  components: {
    AppButton
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
