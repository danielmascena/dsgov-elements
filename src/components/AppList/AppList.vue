<template>
    <div>
        <section v-for="(list, key) in menuList" :key="key+list.length" class="list-container" :class="{divider: withDivision}">
            <h2 class="list-heading">
                <span class="list-heading__text">{{key}}</span>
                <button v-show="isExpansible" @click="toggleList(key)" class="list-heading__toggle-btn">
                    <i class="fas fa-angle-down" :class="{'upside-down': currentSubmenu === key}" aria-hidden="true"></i>
                </button>
            </h2>
            <ul class="list-menu" v-show="currentSubmenu === key">
                <li class="list-menu__item" v-for="(item, index) in list" :key="item+index">{{item}}</li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: "AppList",
    props: {
        items: Object,
        isExpansible: Boolean,
        listClosed: Boolean,
        withDivision: Boolean
    },
    data() {
        const menuList = Array.isArray(this.items) ? {'' : this.items} : this.items;
        const currentSubmenu = this.listClosed ? null : Object.keys(menuList)[0];
        return {
            menuList,
            currentSubmenu
        }
    },
    methods: {
        toggleList(key) {
            this.currentSubmenu = this.currentSubmenu === key ? null : key;
        }
    },
}
</script>

<style scoped>
.list-container.divider {
    border-bottom: 1px solid;
}
.list-container.divider:first-of-type {
    border-top: 1px solid;
}
.list-menu {
    padding: 0;
    list-style-type: none;
}
.collapse {
    display: none;
}
.list-heading {
    display: flex;
    margin: 0;
    justify-content: space-between;
    align-items: center;
}
.list-heading__text {
    font-size: 12.63px;
}
.list-heading__toggle-btn {
    --color-primary-default: #1351b4;
    --interactive: var(--color-primary-default);
    --button-medium: 40px;
    --button-size: var(--button-medium);
    appearance: none;
    background: none;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    height: var(--button-size);
    width: var(--button-size);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    --button-color: var(--interactive);
    color: var(--button-color);
}
.list-heading__toggle-btn:hover {
    background: lightblue;
}
.list-heading__toggle-btn:active {
    background: #eee;
}
.list-menu__item {
    font-size: 12.63px;
}
.upside-down {
    transform: rotate(180deg);
}
</style>