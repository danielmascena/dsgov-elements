<template>
  <article class="card" :data-flip="isFlip">
    <div class="front">
      <header class="card-header">
        <slot name="header"></slot>
        <aside v-if="isFullCard" class="card-side-button">
          <app-button
            ><span
              slot="button-icon"
              class="btn-icon"
              style="transform: rotate(90deg); font-size: .5em"
              >{{ "&#9900;".repeat(3) }}</span
            ></app-button
          >
        </aside>
      </header>
      <section class="card-content">
        <slot name="content"></slot>
      </section>
      <footer class="card-footer">
        <slot name="footer"></slot>
      </footer>
    </div>
  </article>
</template>

<script>
import AppButton from "../AppButton/AppButton";

export default {
  name: "AppCard",
  components: {
    AppButton
  },
  props: {
    isFlip: {
      type: Boolean
    },
    isFullCard: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: column;
  width: 360px;
  margin: 30px;
  box-shadow: rgb(0 0 0 / 16%) 0px 3px 6px 0px;
  padding: 20px;
}
.card-header {
  display: flex;
  justify-content: center;
}
.card-header > h1 {
  margin: 0px;
  display: inline-grid;
  grid-template-areas:
    "av hd hd"
    "av sh sh";
}
.card-header > h1 > .avatar {
  grid-area: av;
}
.card-header > h1 > p {
  color: var(--color-primary-default, #1351b4) !important;
  font-size: 20px;
  grid-area: hd;
  margin: 0px;
}
.card-header > h1 > span {
  font-size: 14px;
  grid-area: sh;
}
.card-side-button {
  grid-area: sb;
  margin-left: 20px;
}
.card-content {
  text-align: left;
}
</style>
