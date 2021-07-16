<template>
  <div class="menu" @click.capture="log">
    <div class="menu-button">
      <app-button circle @activated="toggleMenu">
        <span slot="button-icon">
          <i class="fas" :class="{'fa-times' : displayMenu, 'fa-bars' : !displayMenu}" aria-hidden="true"></i>
        </span>
      </app-button>
    </div>
    <div class="menu-container" v-show="displayMenu">

      <nav class="menu-container__content">
        <section v-for="(list, key) in menu" :key="key+list.length" class="menu-container__content-section">
            <div class="menu-container__content-list" @click.capture="activateSubmenu(list)">
              <span>{{key}}</span>
              <button v-show="Array.isArray(list) && list.length > 1" class="menu-container__content-list__collapse">
                <i class="fas" :class="{'fa-angle-up': list.display, 'fa-angle-down': !list.display}" aria-hidden="true"></i>
              </button>
            </div>
            <ul v-show="list.display" class="menu-container__content-main">
              <li v-for="(item, index) in list" :key="item+index">
                <AppSubMenu v-if="typeof item === 'object'"
                  :submenu="item"
                />
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

const SELECTED_CLASS = 'selected-submenu';
const CLOSE_UP_CLASS = 'closeup-mode';
const MENU_CLASS = 'menu-container__content-section';

const selectedElements = [];

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
    },
    log({target}) {
      const len = selectedElements.length;
      const rowEl = target.parentElement;
      const isInsideNavBar = target.matches('.menu-container *');
      const isFirstLevel = rowEl.parentElement.matches(MENU_CLASS);
      const isCloseUp = this.$el.classList.contains(CLOSE_UP_CLASS);

      if (isInsideNavBar) {

        const antecedentSelected = target.closest('.' + SELECTED_CLASS);
        if (antecedentSelected && antecedentSelected.parentElement !== isFirstLevel) {
          if (!isCloseUp) {
            this.$el.classList.add(CLOSE_UP_CLASS);
          }
          if (selectedElements.length && antecedentSelected === selectedElements[len - 1]) {
            rowEl.classList.add(SELECTED_CLASS);
            selectedElements.push(rowEl);
          } else if (antecedentSelected === selectedElements[len - 2]) {
              selectedElements.pop().classList.remove(SELECTED_CLASS);
          } else {
            if (selectedElements.length)
              selectedElements.pop().classList.remove(SELECTED_CLASS);
            rowEl.classList.add(SELECTED_CLASS);
            selectedElements.push(rowEl);
          }
        }

        console.log(antecedentSelected, target);
        /*
        if (parentMenu) {
          const parent = parentMenu.closest('.submenu-container');
          console.log(parent)
          parent.classList.add(SELECTED_CLASS);
          parentMenu.classList.remove(SELECTED_CLASS);
        }*/
      }
    }
  }
};

</script>

<style scoped>

.menu.closeup-mode {
  position: relative;
  height: 200px;
  overflow: auto;
}

.menu.closeup-mode .menu-container,
.menu.closeup-mode .menu-container__content,
.menu.closeup-mode .menu-container__content-section,
.selected-submenu * {
  color: blue;
}

.menu.closeup-mode .selected-submenu,
.menu.closeup-mode .selected-submenu *,
.menu.closeup-mode .selected-submenu * * {
  color: green;
  top: 0;
  left: 0;
  background: white;
  /*
  width: 100%;
  position: absolute;
  display: block;
  */
}

.menu.closeup-mode .submenu-container :not(.selected-submenu) {
  color: red;
  /*display: none;*/
  height: 0;
}
.menu.closeup-mode .selected-submenu * {
  /*display: flex;*/
}
.menu-container__content-main {
  list-style-type: none;
    padding: 0;
}

.menu-container__content-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
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
