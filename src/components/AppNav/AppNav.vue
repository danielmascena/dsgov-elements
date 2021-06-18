<template>
  <div class="menu">
    <div class="menu-trigger">
      <app-button circle @activated="toggleMenu">
        <span slot="button-icon">
          <i class="fas" :class="{'fa-times' : displayMenu, 'fa-bars' : !displayMenu}" aria-hidden="true"></i>
        </span>
      </app-button>
    </div>
    <div class="menu-container" v-show="displayMenu">

      <nav class="menu">
        <section v-for="(list, key) in menuList" :key="key+list.length">
            <div class="list-heading">
              <span class="list-heading__text">{{key}}</span>
              <button v-show="Array.isArray(list) && list.length > 1" @click="activateSubmenu(list)" class="list-heading__toggle-btn">
                <i class="fas fa-angle-down" :class="{'upside-down': shouldDisplay(list)}" aria-hidden="true"></i>
              </button>
            </div>
            <ul class="list-menu" v-show="shouldDisplay(list)">
              <li v-for="(item, index) in list" :key="item+index">
                <AppSubMenu v-if="typeof item === 'object'" :list="item" />
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
    };
  },
  methods: {
    toggleMenu() {
      this.displayMenu = !this.displayMenu;
    },
    activateSubmenu(list) {
      console.log({list});
      //list.display = !list.display;
    },
    shouldDisplay(list) {

      console.log({list});
      //this.$set(list, index, false);
      return Boolean(list);
    }
  },
  watch: {
    
  }
};
</script>

<style scoped>


</style>