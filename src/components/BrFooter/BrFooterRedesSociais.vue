<template>
  <div class="col social-network" slot="redes-sociais">
    <p class="text-up-01 text-extra-bold text-uppercase">{{ this.label }}</p>
    <slot />
  </div>
</template>

<script>
export default {
  name: "BrFooterRedesSociais",
  props: {
    label: {
      type: String,
    },
  },
};
</script>
