<template>
    <div class="submenu-container">
        <p>
            <span>{{text}}</span>
            <button @click="toggleSubmenu()" class="submenu-container__collapse">
                <i class="fas fa-angle-down" :class="{'upside-down': display}" aria-hidden="true"></i>
            </button>
        </p>
        <ul v-show='display'>
            <li v-for="(item, index) in list" :key="index">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'AppSubMenu',
    props: {
        submenu: Object
    },
    data() {
        const {text, list} = this.submenu;
        return {
            text,
            list,
            display: false
        };
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
    align-items: center;
    flex-direction: column;
}
.submenu-container__collapse {
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
.submenu-container:hover {
    background-image: linear-gradient(rgba(19, 81, 180, 0.16), rgba(19, 81, 180, 0.16));
}
.submenu-container:active {
    background-image: linear-gradient(rgba(19, 81, 180, 0.45), rgba(19, 81, 180, 0.45));
}
ul {
    list-style-type: none;
}
</style>