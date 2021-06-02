<template>
  <div class="menu">
    <div class="menu-trigger">
      <app-button>
        <span slot="button-icon">
          <i class="fas fa-bars" aria-hidden="true"></i>
        </span>
      </app-button>
    </div>
    <div class="menu-container">
      <nav>
      </nav>
    </div>
  </div>
</template>

<script>
import AppButton from '../AppButton/AppButton';

export default {
  name: "AppNav",
  components: {
    AppButton
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
