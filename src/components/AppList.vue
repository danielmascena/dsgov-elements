<template>
    <ul class="list">
        <li class="list-item" v-for="(item, index) of items" :key="item+index">{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: "AppList",
    props: {
        items: Array
    }
}
</script>

<style scoped>

.list {
    padding: 0;
    list-style-type: none;
}
.list-item {

}
.divider {
    border-bottom: 1px solid;
}
</style>