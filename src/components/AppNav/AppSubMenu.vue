<template>
    <div class="submenu-container">
        <p class="submenu-container__legend" @click="toggleSubmenu()">
            <span>{{text}}</span>
            <i
              class="submenu-container__legend_collapse fas"
              :class="{'fa-angle-left': display, 'fa-angle-right': !display}"
              aria-hidden="true"></i>
        </p>
        <ul v-show='display' class="submenu-cotainer__list">
            <li v-for="(item, index) in list" :key="index" :id="getComponentId+'-'+index">
                <AppSubMenu v-if="typeof item === 'object'"
                  :submenu="item"
                />
                <span v-else>{{item}}</span>
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

.submenu-container__list {
    list-style-type: none;
    padding: 0;
}

.submenu-container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px;
}

.submenu-container__legend {
    display: flex;
    justify-content: space-between;
    align-content: center;
    cursor: pointer;
    margin: 0;
}

.submenu-container__legend_collapse {
    --color-primary-default: #1351b4;
    color: var(--color-primary-default);
}

.submenu-container:hover {
    background-image: linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16));
}

.submenu-container:active {
    background-image: linear-gradient(rgba(19, 81, 180, 0.45), rgba(19, 81, 180, 0.45));
}
</style>
