<template>
    <nav>
        <AppList :items="navbar" />
    </nav>
</template>

<script>
import AppList from './AppList';

export default {
    name: "AppNav",
    components: {
        AppList,
    },
    data() {
        return {
            navbar: ['item 1', 'item 2', 'item 3']
        }
    }
}
</script>