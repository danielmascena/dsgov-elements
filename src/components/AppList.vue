<template>
    <div>
        <section v-for="(list, key) in menuList" :key="key+list.length">
            <h2>{{key}} <input type="button" v-show="isExpanded" @click="currentSubmenu = key" class="toggle-btn" value=">" /></h2>
            <ul class="list" v-show="currentSubmenu === key">
                <li class="list-item" v-for="(item, index) in list" :key="item+index">{{item}}</li>
            </ul>
        </section>
    </div>
</template>

<script>
export default {
    name: "AppList",
    props: {
        items: Object,
        isExpanded: Boolean,
        listClosed: Boolean,
    },
    data() {
        const menuList = Array.isArray(this.items) ? {'' : this.items} : this.items;
        const currentSubmenu = this.listClosed ? null : Object.keys(menuList)[0];
        return {
            menuList,
            currentSubmenu
        }
    }
}
</script>

<style scoped>
.list {
    padding: 0;
    list-style-type: none;
}
.collapse {
    display: none;
}
.toggle-btn {
    appearance: none;
    background: none;
    cursor: pointer;
    border: none;
    border-radius: 50%;
}
.toggle-btn:hover {
    background: #ccc;
}
.toggle-btn:active {
    background: #eee;
}
.divider {
    border-bottom: 1px solid;
}
</style>