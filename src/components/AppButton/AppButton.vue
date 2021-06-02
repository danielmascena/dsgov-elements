<template>
    <div class="button-container">
        <button class="default" :class="{primary: type === 'filled', secondary: type === 'outlined', rounded}" @click="activateLoad()" aria-label="">
           <span v-if="isLoading" class="loading-container">
            <span class="loading-icon"></span>
            <span class="ghost-text">{{label}}</span>
           </span> 
            <span v-else>
                <slot name="button-icon"></slot>
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
        isDisabled: Boolean,
        isBlock: Boolean,
        rounded: Boolean
    },
    data() {
        return {
            isLoading: false, 
        }
    },
    methods: {
        activateLoad() {
            this.isLoading = true;
            // trigger the loading to emulate a action occurring
            setTimeout(() => this.isLoading = false, 1000);
        }
    }
}
</script>

<style scoped>

.button-container {
    display: inline-grid;
}

button {
    --font-size-scale-up-01: 16.8px;
    --button-font-size: var(--font-size-scale-up-01);
    --button-color: #1351B4;
    --button-xsmall: 24px;
    --button-small: 32px;
    --button-medium: 40px;
    --button-large: 48px;
    --button-size: var(--button-medium);
}

.rounded {
    border-radius: 50%;
    width: 38px;
}

.default {
    padding: 0px 10px;
    border: 1px solid transparent;
    border-radius: 25px;
    color: var(--button-color);
    cursor: pointer;
    font-size: var(--button-font-size);
    min-width: 40px;
    position: relative;
    height: 38px;
    margin: 2px;
    font-weight: 600;
}
.default.is-icon {
    border-radius: 50%;
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
    border-color: var(--button-color);
    color: #FFF;
}

.primary:hover {
    background-color: #6e6ebd;
}

.secondary {
    border-color: var(--button-color);
}

.ghost-text {
    visibility: hidden;
}
.btn-icon {
    display: inline-block;
}

.loading-container {
    height: 100%;
    display: inline-grid;
    place-items: center;
}
.loading-icon {
    transform: translateX(-5px);
}

.loading-icon:before {
    border: solid 1px var(--button-color);
    content: "";
    width: 10px;
    position: absolute;
    height: 10px;
    border-top: transparent;
    border-left: transparent;
    border-radius: 50%;
    animation: spinning 1s infinite linear;
}

.primary .loading-icon:before {
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
