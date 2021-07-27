<template>
    <div class="submenu-container">
        <p class="submenu-container__legend" @click="toggleSubmenu()">
            <span>{{text}}</span>
            <i
              class="submenu-container__legend_collapse fas"
              :class="{'fa-angle-left': display, 'fa-angle-right': !display}"
              aria-hidden="true"></i>
        </p>
        <ul v-show='display' class="submenu-container__list">
            <li v-for="(item, index) in list" :key="index" :id="getComponentId+'-'+index" class="submenu-container__list-row">
                <AppSubMenu v-if="typeof item === 'object'"
                  :submenu="item"
                />
                <span class="submenu-container__list-legend" v-else>{{item}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppSubMenu',
    props: {
        submenu: Object,
    },
    data() {
        const {text, list} = this.submenu;
        return {
            text,
            list,
            display: false
        };
    },
    computed: {
      getComponentId() {
        return this.$vnode.tag;
        //return this._uid;
      }
    },
    methods: {
        toggleSubmenu() {
            this.display = !this.display;
        }
    }
}
</script>

<style scoped>

.submenu-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.submenu-container.selected-submenu {
  color: green;
  background: white;
  position: absolute;
  width: 100%;
  height: 200px;
  top: 0;
  left: 0;
  overflow: auto;
}

.submenu-container__list-legend,
.submenu-container__legend {
    display: flex;
    justify-content: space-between;
    align-content: center;
    cursor: pointer;
    margin: 0;
    padding: 16px;
}

.submenu-container__legend:hover,
.submenu-container__list-legend:hover {
    background-image: linear-gradient(rgba(19, 81, 180, 0.45), rgba(19, 81, 180, 0.45));
}

.submenu-container__legend:active,
.submenu-container__list-legend:active {
    background-image: linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16));
}

.submenu-container__legend_collapse {
    --color-primary-default: #1351b4;
    color: var(--color-primary-default);
}

.submenu-container__list {
    list-style-type: none;
    padding: 0;
    flex: 1;
    margin: 0;
    background-color: #f8f8f8;
}

</style>
