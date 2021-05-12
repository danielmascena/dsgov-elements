<template>
  <footer :class="{ 'br-footer': true, 'inverted': inverted }">
    <div class="container-lg">
      <div class="logo">
        <img :src="logo" alt="Logo footer" />
      </div>

      <div class="br-list horizontal" data-toggle="data-toggle" data-unique="data-unique">
        <div class="col-2" v-for="categoria in categorias" :key="categoria.id">
          <a class="br-item header" href="javascript:void(0)">
            <div class="content text-down-01 text-bold text-uppercase">
              {{ categoria.header }}
            </div>
            <div class="support">
              <i class="fas fa-angle-up" aria-hidden="true"></i>
            </div>
          </a>
          <div class="br-list">
            <span class="br-divider d-md-none"></span>
            <a class="br-item" v-for="item in categoria.itensCategorias" :key="item.id" :href="item.href">
              <div class="content">{{ item.label }}</div>
            </a>
            <span class="br-divider d-md-none"></span>
          </div>
        </div>
      </div>
      <div class="d-none d-sm-block">
        <div class="row align-items-end justify-content-between py-5">
          <div class="col social-network">
            <p class="text-up-01 text-extra-bold text-uppercase">Redes Sociais</p>
            <a class="mr-3"  v-for="rede in redesSociais" :key="rede.id" :href="rede.href">
              <img :src="rede.src" alt="Imagem" />
            </a>
          </div>
          <div class="col assigns text-right">
            <img class="ml-4" src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png" alt="Imagem" /><img
              class="ml-4"
              src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png"
              alt="Imagem"
            />
          </div>
        </div>
      </div>
    </div>
    <span class="br-divider my-3"></span>
    <div class="container-lg">
      <div class="info">
        <div class="text-down-01 text-medium pb-3 text-center">Texto destinado a exibição de informações relacionadas à&nbsp;<strong>licença de uso.</strong></div>
      </div>
    </div>
  </footer>
</template>

<script>
import "../../../node_modules/@govbr/dsgov/dist/components/footer/footer.css";
import "../../../node_modules/@govbr/dsgov/dist/components/list/list.css";
import "../../../node_modules/@govbr/dsgov/dist/components/item/item.css";
import "../../../node_modules/@govbr/dsgov/dist/components/divider/divider.css";
import "../../../node_modules/@govbr/dsgov/dist/components/button/button.css";

export default {
  name: "AppFooter",
  props: {
    inverted: {
      type: Boolean,
      default: false
    },
    logo: {
      type: String,
      default: "https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-negative.png"
    },
    redesSociais: {
      id: {
        type: Number,
        required: true
      },
      src: {
        type: String,
        required: true
      },
      href: {
        type: String,
        required: true
      }
    },
    categorias: {
      type: Array
    }
  }
};
</script>
