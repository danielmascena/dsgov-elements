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
    <AppFooter :categorias="categorias" :logo="logoFooter" />
  </div>
</template>

<script>
import AppButton from "./AppButton";
import AppAvatar from "./AppAvatar";
import AppCard from "./AppCard";
import AppTab from "./AppTab";
import AppLoading from "./AppLoading";
import AppList from "./AppList";
import AppNav from "./AppNav";
import AppFooter from "./AppFooter/AppFooter";

import "../../node_modules/@govbr/dsgov/dist/dsgov-base.css";

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
    AppFooter,
  },
  data() {
    return {
      logoFooter: "https://dataprev.gov.br/imagens/marcaDataprev_.png",
      categorias: [
        {
          id: 1,
          header: "Categoria A",
          itensCategorias: [
            { id: 1, label: "10 party hats", href: "http://www.google.com" },
            { id: 2, label: "2 board games", href: "http://www.youtube.com" },
            { id: 3, label: "20 cups", href: "http://www.gmail.com" },
          ],
        },
        {
          id: 2,
          header: "Categoria B",
          itensCategorias: [
            { id: 4, label: "101 party hats", href: "http://www.google.com" },
            { id: 5, label: "20 board games", href: "http://www.youtube.com" },
            { id: 6, label: "201 cups", href: "http://www.gmail.com" },
          ],
        },
      ],
    };
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
