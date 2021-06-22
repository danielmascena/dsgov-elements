<template>
  <div class="menu">
    <div class="menu-button">
      <app-button circle @activated="toggleMenu">
        <span slot="button-icon">
          <i class="fas" :class="{'fa-times' : displayMenu, 'fa-bars' : !displayMenu}" aria-hidden="true"></i>
        </span>
      </app-button>
    </div>
    <div class="menu-container" v-show="displayMenu">

      <nav class="menu-container__content">
        <section v-for="(list, key) in menu" :key="key+list.length">
            <div class="menu-container__content-list">
              <span>{{key}}</span>
              <button v-show="Array.isArray(list) && list.length > 1" @click="activateSubmenu(list)" class="menu-container__content-list__collapse">
                <i class="fas fa-angle-down" :class="{'upside-down': list.display}" aria-hidden="true"></i>
              </button>
            </div>
            <ul v-show="list.display" class="menu-container__content-main">
              <li v-for="(item, index) in list" :key="item+index">
                <AppSubMenu v-if="typeof item === 'object'" :submenu="item" />
                <span v-else>{{item}}</span>
              </li>
            </ul>
        </section>
      </nav>

      <aside class="sidebar"> 
        <slot name="menu-addons"></slot>
      </aside>
    </div>
  </div>
</template>

<script>
import AppButton from '../AppButton/AppButton';
import AppSubMenu from './AppSubMenu.vue';

export default {
  name: "AppNav",
  components: {
    AppButton,
    AppSubMenu
  },
  props: {
    showMenu: Boolean,
    menuList: Object
  },
  data() {
    return {
      displayMenu: this.showMenu,
      menu: this.menuList 
    };
  },
  methods: {
    toggleMenu() {
      this.displayMenu = !this.displayMenu;
    },
    activateSubmenu(list) {
      this.$set(list, 'display', !list.display);
    }
  },
};
</script>

<style scoped>
.menu-container__content-main {
  list-style-type: none;
}
.menu-container__content-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu-container__content-list__collapse {
    --color-primary-default: #1351b4;
    --button-medium: 40px;
    --interactive: var(--color-primary-default);
    --button-size: var(--button-medium);
    --button-color: var(--interactive);
    height: var(--button-size);
    width: var(--button-size);
    color: var(--button-color);
    appearance: none;
    background: none;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.menu-container__content-list:hover {
    background-image: linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16));
}
.menu-container__content-list:active {
    background-image: linear-gradient(rgba(19, 81, 180, 0.45), rgba(19, 81, 180, 0.45));
}

</style>