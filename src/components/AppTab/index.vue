
<template>
    <div class="tab-container">
        <nav class="tab-navbar">
            <ul>
                <li class="tab-item">
                    <span class="tab-name"></span>
                </li>
            </ul>
        </nav>
        <div class="tab-content">
            <div class="tab-panel">
                <p class="tab-text">Lorem</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "AppTab",
    props: ["list"],

};
</script>

<style>
    .tab-container {

    }

    .tab-navbar {

    }

    .tab-item {
        list-style-type: none;
    }
    .is-active {

    }

    .tab-content {
    }
</style>
