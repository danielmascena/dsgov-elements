<template>
    <div>
        <section v-for="(list, key) in menuList" :key="key+list.length" class="list-container">
            <h2 class="list-heading">
                <span class="list-heading__text">{{key}}</span>
                <button v-show="isExpansible" @click="toggleList(key)" class="list-heading__toggle-btn">
                    <i class="fas fa-angle-down" :class="{'upside-down': currentSubmenu === key}" aria-hidden="true"></i>
                </button>
            </h2>
            <ul class="list-menu" v-show="currentSubmenu === key">
                <li class="list-menu__item" :class="{divider: withDivision, separator: withSeparator}" v-for="(item, index) in list" :key="item+index">{{item}}</li>
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
        withDivision: Boolean,
        withSeparator: Boolean
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
    --button-medium: 40px;
    --interactive: var(--color-primary-default);
    --button-size: var(--button-medium);
    --button-color: var(--interactive);
    color: var(--button-color);
    height: var(--button-size);
    width: var(--button-size);
    appearance: none;
    background: none;
    cursor: pointer;
    border: none;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
}
.list-heading__toggle-btn:hover {
    background: lightblue;
}
.list-heading__toggle-btn:active {
    background: #eee;
}
.list-menu__item {
    font-size: 12.63px;
    padding: 8px 16px;
}
.list-menu__item.divider {
    border-bottom: 1px solid;
}
.list-menu__item.separator:first-of-type {
    border-top: 1px solid;
}
.upside-down {
    transform: rotate(180deg);
}
</style>