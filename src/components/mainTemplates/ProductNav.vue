<template>
    <section id="product-nav">
        <div class="container">
            <div class="content">
                <ul>
                    <li><Btn text="Description"></Btn></li>
                    <li><Btn text="Gallery" btn-class="secondary"></Btn></li>
                    <li><Btn text="Reviews" btn-class="secondary"></Btn></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import TiltDivider from './TiltDivider.vue';
import Btn from './Btn.vue';

export default {
    name: 'ProductNav',

    inject: [],

    components: {
        TiltDivider,
        Btn
    },

    data() {
        return {

        }
    },

    methods: {

    },
    
    computed: {

    },

    created() {

    },

    mounted() {

    }
}
</script>

<style scoped>
#product-nav {
    background-color: var(--primary-color);
    position: relative;
}

#product-nav .content {
    padding: 16px;
}

#product-nav ul {
    display: flex;
    justify-content: center;
    gap: 72px;
}
</style>