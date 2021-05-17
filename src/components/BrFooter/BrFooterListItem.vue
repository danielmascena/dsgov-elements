<template>
  <a class="br-item" :href="url">
    <div class="content">{{ label }}</div>
  </a>
</template>

<script>
export default {
  name: "BrFooterListItem",
  props: {
    url: {
      type: String,
    },
    label: {
      type: String,
    },
  },
};
</script>
