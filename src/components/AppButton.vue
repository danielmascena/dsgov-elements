<template>
    <div>
        <button class="default" :class="{primary: type === 'filled', secondary: type === 'outlined'}" @click="activateLoad()" aria-label="">
           <span v-if="isLoading" class="load-icon"><p class="ghost-text">{{label}}</p></span> 
            <span v-else>
                <slot name="button-icon">
                </slot>
                {{label}}
            </span>
        </button>
    </div>
</template>


<script>
export default {
    name: "AppButton",
    props: {
        label: {
            type: String,
            validator: function(value){
                return value.length > 0;
            }
        },
        type: {
            type: String,
            default: 'text',
            validator: function(value) {
                return ['text', 'outlined', 'filled'].includes(value);
            }
        },
        density: {
            type: String,
            default: 'middle',
            validator: function(value) {
                return ['low', 'middle', 'high'].includes(value);
            }
        },
        isDisabled: {
            type: Boolean
        },
        isBlock: {
            type: Boolean
        }
    },
    data() {
        return {
            isLoading: false
        }
    },
    methods: {
        activateLoad() {
            this.isLoading = true;
            setTimeout(() => this.isLoading = false, 1000);
        }
    }
}
</script>

<style scoped>

button {
    --button-color: #1351B4;
}

.default {
    padding: 10px;
    background-color: transparent;
    border-radius: 25px;
    color: var(--button-color);
    min-width: 30px;
    height: 30px;
    line-height: 0.8;
    border: none;
    margin: 2px;
}

.default:focus {
    outline: none;
}

.default:hover {
    background-color: lightblue;
}

.default:active {
    background-color: navy;
    color: #FFF;
}

.primary {
    background-color: var(--button-color);
    color: #FFF;
}

.secondary {
    border: 1px solid var(--button-color);
}

.ghost-text {
    visibility: hidden;
    height: 1px;
    position: relative;
    top: -23px;
}

.load-icon:before {
    border: solid 1px var(--button-color);
    content: "";
    width: 10px;
    position: relative;
    display: inline-block;
    height: 10px;
    border-top: transparent;
    border-left: transparent;
    border-radius: 50%;
    animation: spinning 1s infinite linear;
}

.primary .load-icon:before {
    border-color: #FFF;
}

@keyframes spinning {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
</style>