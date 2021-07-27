<template>
  <div class="menu">
    <div class="menu-button">
      <app-button circle @activated="toggleMenu">
        <span slot="button-icon">
          <i class="fas" :class="{'fa-times' : displayMenu, 'fa-bars' : !displayMenu}" aria-hidden="true"></i>
        </span>
      </app-button>
    </div>
    <div class="menu-container" v-show="displayMenu" @click.capture="log">

      <nav class="menu-container__content">
        <section v-for="(list, key) in menu" :key="key+list.length" class="menu-container__row">
            <div class="menu-container__row-label first-level" @click.capture="activateSubmenu(list)">
              <span class="first-level">{{key}}</span>
              <button v-show="Array.isArray(list) && list.length > 1" class="menu-container__row-label__collapse first-level">
                <i class="first-level fas" :class="{'fa-angle-up': list.display, 'fa-angle-down': !list.display}" aria-hidden="true"></i>
              </button>
            </div>
            <ul v-show="list.display" class="menu-container__row-submenu">
              <li v-for="(item, index) in list" :key="item+index" class="menu-container__row-submenu__item">
                <AppSubMenu v-if="typeof item === 'object'"
                  :submenu="item"
                />
                <p v-else class="menu-container__row-submenu__item-legend">{{item}}</p>
              </li>
            </ul>
        </section>
      </nav>

    </div>
    <aside class="sidebar">
      <slot name="menu-addons"></slot>
    </aside>
  </div>
</template>

<script>

import AppButton from '../AppButton/AppButton';
import AppSubMenu from './AppSubMenu.vue';

const SELECTED_CLASS = 'selected-submenu';
const CLOSE_UP_CLASS = 'closeup-mode';
const SUBMENU_CONTAINER = 'submenu-container';

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
      const topEl = this.$el.querySelector('.menu-container');

      if (target.matches('.first-level')) {
        topEl.classList.remove(CLOSE_UP_CLASS);
      } else {
        const isCloseUp = topEl.classList.contains(CLOSE_UP_CLASS);
        const antecedentSelected = target.closest('.' + SELECTED_CLASS);
        const len = selectedElements.length;
        const rowEl = target.closest('.' + SUBMENU_CONTAINER);

        console.log(target);

        if (!isCloseUp) {
          topEl.classList.add(CLOSE_UP_CLASS);
        }
        if (antecedentSelected) {
          if (selectedElements.length && antecedentSelected === selectedElements[len - 1]) {
         if (rowEl === antecedentSelected) { 
              selectedElements.pop().classList.remove(SELECTED_CLASS);
          if (selectedElements.length)  selectedElements[selectedElements.length - 1].classList.add(SELECTED_CLASS);
          } else {
            antecedentSelected.classList.remove(SELECTED_CLASS);
            rowEl.classList.add(SELECTED_CLASS);
            selectedElements.push(rowEl);
          }
          } else if (antecedentSelected === selectedElements[len - 2]) {
              selectedElements.pop().classList.remove(SELECTED_CLASS);
          } else {
            if (selectedElements.length)
              selectedElements.pop().classList.remove(SELECTED_CLASS);
            rowEl.classList.add(SELECTED_CLASS);
            selectedElements.push(rowEl);
          }
        } else if (rowEl){
          rowEl.classList.add(SELECTED_CLASS);
          selectedElements.push(rowEl);
        }
        if (selectedElements.length === 0 && isCloseUp) topEl.classList.remove(CLOSE_UP_CLASS);
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

.menu-container {
  position: relative;
  height: 200px;
  overflow: auto;
}
.closeup-mode {
overflow: clip; 
}

.menu-container__row-label:hover,
.menu-container__row-submenu__item:hover {
    background-image: linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16));
}

.menu-container__row-label:hover,
.menu-container__row-submenu__item:active {
    background-image: linear-gradient(rgba(19, 81, 180, 0.45), rgba(19, 81, 180, 0.45));
}

.menu-container__row-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.menu-container__row-label__collapse {
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

.menu-container__row-label:hover {
    background-image: linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16));
}

.menu-container__row-label:active {
    background-image: linear-gradient(rgba(19, 81, 180, 0.45), rgba(19, 81, 180, 0.45));
}

.menu-container__row-submenu {
  list-style-type: none;
    padding: 0;
}

.menu-container__row-submenu__item-legend {
  cursor: pointer;
  margin: 0;
  padding: 16px;
}
</style>
