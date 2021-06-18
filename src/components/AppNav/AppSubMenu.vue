<template>
    <ul>
        <li v-for="(item, index) in list" :key="index">{{item}}</li>
    </ul>
</template>

<script>
export default {
    name: 'AppSubMenu',
    props: {
        list: Object
    }

}
</script>

<style scoped>
ul {
    list-style-type: none;
}
</style>