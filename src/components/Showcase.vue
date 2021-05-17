<script>
import AppButton from "./AppButton";
import AppAvatar from "./AppAvatar";
import AppCard from "./AppCard";
import AppTab from "./AppTab";
import AppLoading from "./AppLoading";
import AppList from "./AppList";
import AppNav from "./AppNav";
import BrFooter from "./BrFooter/BrFooter";
import BrFooterList from "./BrFooter/BrFooterList";
import BrFooterListItem from "./BrFooter/BrFooterListItem";
import BrFooterRedesSociais from "./BrFooter/BrFooterRedesSociais";
import BrFooterRedesSociaisItem from "./BrFooter/BrFooterRedesSociaisItem";

export default {
  name: "Showcase",
  components: {
    AppButton,
    AppAvatar,
    AppCard,
    AppTab,
    AppLoading,
    AppList,
    AppNav,
    BrFooter,
    BrFooterList,
    BrFooterListItem,
    BrFooterRedesSociais,
    BrFooterRedesSociaisItem
  },
};
</script>

<style>
.centered {
  max-width: 50%;
  margin: auto;
}
.button-group {
  display: flex;
  justify-content: center;
}
</style>

<template>
  <div>
    <AppLoading />
    <div class="button-group">
      <AppButton label="Hello" />
      <AppButton label="Primary" type="filled" />
      <AppButton label="Secondary" type="outlined" />
      <app-button>
        <span slot="button-icon">&#8855;</span>
      </app-button>
    </div>
    <div>
      <AppAvatar />
      <AppAvatar iconic />
      <AppAvatar imgSrc="https://picsum.photos/id/823/400" />
    </div>
    <div class="centered">
      <AppCard>
        <h1 slot="header">
          <AppAvatar imgSrc="https://picsum.photos/id/823/400/400" />
          <p>Lady Lannister</p>
          <span>Wildlife Paparazzi</span>
        </h1>
        <div slot="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus quod? Cupiditate saepe dignissimos ab nam id expedita vero cum ea similique labore, architecto voluptates
            quas! Voluptatum dolorem quibusdam pariatur!
          </p>
        </div>
        <div slot="footer">
          <AppButton label="Button" />
        </div>
      </AppCard>
      <app-tab></app-tab>
      <app-list :items="['item 1', 'item 2', 'item 3']"></app-list>
      <AppNav />
    </div>
    <br-footer logo="https://www.gov.br/++theme++padrao_govbr/img/govbr.png" texto="Todo o conteúdo deste site está publicado sob a licença Creative Commons">
      <br-footer-list url="#cat1" label="Categoria Número Um" slot="categoria-1">
        <br-footer-list-item url="#link1" label="link 1"></br-footer-list-item>
        <br-footer-list-item url="#link2" label="link 2"></br-footer-list-item>
        <br-footer-list-item url="#link3" label="link 3"></br-footer-list-item>
        <br-footer-list-item url="#link4" label="link 4"></br-footer-list-item>
        <br-footer-list-item url="#link5" label="link 5"></br-footer-list-item>
      </br-footer-list>

      <br-footer-list url="#cat2" label="Categoria Número Dois" slot="categoria-2">
        <br-footer-list-item url="#link1" label="link 1"></br-footer-list-item>
        <br-footer-list-item url="#link2" label="link 2"></br-footer-list-item>
        <br-footer-list-item url="#link3" label="link 3"></br-footer-list-item>
        <br-footer-list-item url="#link4" label="link 4"></br-footer-list-item>
        <br-footer-list-item url="#link5" label="link 5"></br-footer-list-item>
      </br-footer-list>

      <br-footer-list url="#cat3" label="Categoria Número Três" slot="categoria-3">
        <br-footer-list-item url="#link1" label="link 1"></br-footer-list-item>
        <br-footer-list-item url="#link2" label="link 2"></br-footer-list-item>
        <br-footer-list-item url="#link3" label="link 3"></br-footer-list-item>
        <br-footer-list-item url="#link4" label="link 4"></br-footer-list-item>
        <br-footer-list-item url="#link5" label="link 5"></br-footer-list-item>
      </br-footer-list>

      <br-footer-redes-sociais slot="redes-sociais" label="Redes Antissociais">
        <br-footer-redes-sociais-item url="#facebook">
          <img src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/button-negative.png" alt="Imagem" />
        </br-footer-redes-sociais-item>
      </br-footer-redes-sociais>

      <div slot="images">
        <img class="ml-4" src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png" alt="Imagem" />
        <img class="ml-4" src="https://cdn.dsgovserprodesign.estaleiro.serpro.gov.br/design-system/images/logo-assign-negative.png" alt="Imagem" />
      </div>
    </br-footer>
  </div>
</template>
