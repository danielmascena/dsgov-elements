<template>
  <nav>
    <AppList :items="navbar" isExpanded listClosed />
  </nav>
</template>

<script>
import AppList from "../AppList/AppList";

export default {
  name: "AppNav",
  components: {
    AppList
  },
  data() {
    return {
      navbar: {
        label1: ["item 1", "item 2", "item 3"],
        label2: ["item 1", "item 2", "item 3"],
        label3: ["item 1", "item 2", "item 3"]
      }
    };
  }
};
</script>
