<template>
    <span class="avatar" :title="name">
        <span v-if="isIcon || imgSrc" class="image">
            <i v-if="isIcon" class="user-icon" aria-hidden="true"></i>
            <img v-else :src="imgSrc" alt="Avatar" />
        </span>
        <span v-else class="text-secondary">{{avatarLetter}}</span>
    </span>
</template>

<script>

export default {
    name: "AppAvatar",
    props: {
        name: {
            type: String,
            default: "John Doe",
            validator: function(val) {
                return val.trim().length > 1;
            }
        },
        imgSrc: {
            type: String,
            validator: function(val) {
                return val.match(/^https?:\/\/[\w\d/.]*/g);
            }
        },
        iconic: {
            type: Boolean
        }
    },
    computed: {
        isIcon() {
            return this.iconic && !this.imgSrc;
        },
        avatarLetter() {
            return this.name[0].toUpperCase();
        }
    }
};

</script>

<style scoped>
.avatar {
    margin: 10px;
    display: inline-block;
    background-color: lightgreen;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    overflow: hidden;
}
.image img {
    height: 30px;
    width: 30px;
}
.user-icon:before {
    content: "\265E";
}
</style>