<template>
    <div class="btn" :class="btnClass" @click="$emit('btn-click')" v-if="!isInput">
        {{text}}
        <div :class="innerBtnClasses">
           {{text}}
        </div>
        <div :class="fillClasses"></div>
    </div>

    <div class="input-container" v-if="isInput">
        <div class="btn inputType">
            {{text}}
            <input :id="inputId" :class="innerBtnClasses" :type="inputType" :placeholder="text">
            <div :class="fillClasses"></div>
        </div>
        <div class="input-btn" :class="inputBtnClass" v-if="addBtnToInput" @click="$emit('input-btn-click')">
            <img src="../../assets/icons/Done_fill.svg" alt="">
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'Btn',

    emits: ['btn-click', 'input-btn-click'],

    inject: [],

    props: {
        text: {
            type: String,
            default: null
        },
        btnClass: {
            type: String,
            default: "primary"
        },
        isInput: {
            type: Boolean,
            default: false
        },
        addBtnToInput: {
            type: Boolean,
            default: false
        },
        inputType: {
            type: String,
            default: "text"
        },
        inputId: {
            type: String,
            default: null
        },
        inputBtnClass: {
            type: String,
            default: null
        }
    },

    components: {

    },

    data() {
        return {

        }
    },

    methods: {
    
    },
    
    computed: {
        innerBtnClasses() {
            if (this.btnClass == "primary") return "inner-btn-primary";
            else return "inner-btn-secondary";
        },

        fillClasses() {
            if (this.btnClass == "primary") return "fill-primary";
            else return "fill-secondary";
        }
    },

    created() {

    },

    mounted() {

    }
}
</script>

<style scoped>
.btn {
    position: relative;
    color: var(--text-color);
    border: 2px solid var(--text-color);
    border-radius: 4px;
    background-color: var(--bg-color);
    text-transform: capitalize;
    padding: 8px 56px;
    font-family: 'Cinzel', serif;
    text-align: center;
    font-size: 20px;
    font-weight: 700;
}

.btn.secondary {
    border: 2px solid var(--primary-color);
}

.inner-btn-primary {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 70%;
    background: var(--bg-color);
    border: 2px solid var(--text-color);
    border-radius: 4px;
    z-index: 2;
    transition: all 0.3s ease-in-out;
}

.btn .fill-primary {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/seigaiha_20x.png");
    background-size: 60% 60%;
    background-repeat: repeat;
    opacity: 0.25;
    z-index: 1;
    border-radius: 4px;
}

.inner-btn-secondary {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: 70%;
    background: var(--bg-color);
    border: 2px solid var(--primary-color);
    border-radius: 4px;
    z-index: 2;
    transition: all 0.3s ease-in-out;
}

.btn .fill-secondary {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("../../assets/img/seigaiha_20x.png");
    background-size: 60% 60%;
    background-repeat: repeat;
    opacity: 0.25;
    z-index: 1;
    border-radius: 4px;
}

.btn:hover .inner-btn-primary, .btn:hover .inner-btn-secondary {
    border: 2px solid var(--primary-color);
}

.btn.secondary:hover .inner-btn-secondary {
    border: 2px solid var(--text-color);
}

.btn:hover {
    border: 2px solid var(--text-color); 
}

.btn.secondary:hover {
    border: 2px solid var(--primary-color);
}

input {
    background: var(--bg-color);
    color: var(--text-color);
    border: 1px solid var(--text-color);
    padding: 16px 8px;
    text-align: center;
}

input.inner-btn-primary {
    width: 95%;
    height: 70%;
}

.input-container {
    display: flex;
}

.btn.inputType {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}

.input-btn {
    background: var(--primary-color);
    padding: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid var(--text-color);
    border-left: 0;
    transition: all 0.3s ease-in-out;
}

.input-btn:hover {
    background: rgba(149, 29, 2, 0.7);
    cursor: pointer;
}

.input-btn.dark-hover:hover {
    background: rgba(0, 0, 0, 0.3);
}

.input-btn img {
    width: 40px;
}

</style>