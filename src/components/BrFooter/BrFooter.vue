<template>
  <footer :class="{ 'br-footer': true, inverted: inverted }">
    <div class="container-lg">
      <div :class="{ logo: true, 'text-center': logoCentered }">
        <img :src="logo" alt="Logo footer" />
      </div>

      <div class="br-list horizontal" data-toggle="data-toggle" data-unique="data-unique">
        <div class="col-2">
          <slot name="categoria-1" />
        </div>
        <div class="col-2">
          <slot name="categoria-2" />
        </div>
        <div class="col-2">
          <slot name="categoria-3" />
        </div>
        <div class="col-2">
          <slot name="categoria-4" />
        </div>
        <div class="col-2">
          <slot name="categoria-5" />
        </div>
        <div class="col-2">
          <slot name="categoria-6" />
        </div>
      </div>
      <div class="d-none d-sm-block">
        <div class="row align-items-end justify-content-between py-5">
          <slot name="redes-sociais" />
          <div class="col assigns text-right">
            <slot name="images" />
          </div>
        </div>
      </div>
    </div>
    <span class="br-divider my-3"></span>
    <div class="container-lg">
      <div class="info">
        <div class="text-down-01 text-medium pb-3 text-center">{{ texto }}</div>
      </div>
    </div>
  </footer>
</template>

<script>
import "../../../node_modules/@govbr/dsgov/dist/components/footer/footer.css";

export default {
  name: "BrFooter",
  props: {
    inverted: {
      type: Boolean,
      default: false,
    },
    texto: {
      type: String,
      default: "Texto destinado a exibição de informações relacionadas à licença de uso.",
    },
    logo: {
      type: String,
      default: "https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-negative.png",
    },
    logoCentered: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
