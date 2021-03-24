<template>
  <div id="app">
    <figure>
      <img alt="Vue logo" src="./assets/logo.png" width=50>
    </figure>
    <div>
      <AppButton label='Hello' />
      <AppButton label="Primary" type="filled" />
      <AppButton label="Secondary" type="outlined" />
    </div>
    <div>
      <AppAvatar />
      <AppAvatar iconic />
      <AppAvatar imgSrc="https://picsum.photos/id/823/400" />
    </div>
  </div>
</template>

<script>
import AppButton from './components/AppButton.vue';
import AppAvatar from './components/AppAvatar.vue';

export default {
  name: 'App',
  components: {
    AppButton,
    AppAvatar,
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
