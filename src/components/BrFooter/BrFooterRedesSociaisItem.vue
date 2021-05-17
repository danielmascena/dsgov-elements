<template>
  <a class="mr-3" :href="url">
    <slot />
  </a>
</template>

<script>
export default {
  name: "BrFooterRedesSociaisItem",
  props: {
    url: {
      type: String,
    },
  },
};
</script>
