<template>
    <article class="card" :data-flip="isFlip">
        <div class="front">
            <header class="card-header">
                <slot name="header"></slot>
            </header>
            <section class="card-content">
                <slot name="content"></slot>
            </section>
            <footer class="card-footer">
                <slot name="footer"></slot>
            </footer>
        </div>
    </article>
</template>

<script>

export default {
    name: "AppCard",
    props: {
        isFlip: {
            type: Boolean
        },
        
    }
};
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
    width: 300px;
}
.card-header > h1 {
    display: grid;
    grid-template-areas: 
        "av hd"
        ". sh";
}
.card-header > h1 > .avatar {
    grid-area: av;
}
.card-header > h1 > p {
    color: var(--color-primary-default,#1351b4) !important;
    font-size: 20px;
    grid-area: hd;
}
.card-header > h1 > span {
    font-size: 14px;
    grid-area: sh;
}
</style>
