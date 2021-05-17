<template>
  <div id="app">
    <figure>
      <img alt="Vue logo" src="./assets/logo.png" width="50" />
    </figure>
    <Showcase />
  </div>
</template>

<script>
import "@govbr/dsgov/dist/dsgov-base.css";
import Showcase from "@/components/Showcase";

export default {
  name: "App",
  components: {
    Showcase
  }
};
</script>
