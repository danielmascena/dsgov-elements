<template>
  <div>
    <a class="br-item header" :href="url">
      <div class="content text-down-01 text-bold text-uppercase">{{ label }}</div>
      <div class="support">
        <i class="fas fa-angle-up" aria-hidden="true"></i>
      </div>
    </a>
    <div class="br-list">
      <span class="br-divider d-md-none"></span>
      <slot />
      <span class="br-divider d-md-none"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "BrFooterList",
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
