<template>
    <section id="hero" :class="heroClass" :style="heroStyle">
        <video autoplay muted loop v-if="isAbout">
            <source src="../../assets/img/blacksmith.mp4" type="video/mp4">
        </video>

        <div class="container">
            <div class="content">
                <slot name="content">
                    <Header></Header>

                    <div class="hero-text">
                        <div class="hero-text-content"  v-if="!isAbout">
                            <h1> Work of Art </h1>
                            <p> Experience high-quality authentic katanas forged by decades-long master
                                artisans all the way from Japan, Hirosaki. </p>
                            <Btn text='SHOP' @btn-click="goToShop()"></Btn>
                        </div>

                        <div class="arrow-container" v-if="isAbout">
                            <img src="../../assets/icons/arrow_down.svg" alt="arrow_down">
                        </div>
                    </div>
                </slot>

                <div class="hero-img-overlay"></div>
            </div>
        </div>
    </section>
</template>

<script>
import Header from './Header.vue';
import Btn from './Btn.vue';

export default {
    name: 'MainHero',

    inject: [],

    props: {
        isAbout: {
            type: Boolean,
            default: false
        },
        heroClass: {
            type: String,
            default: null
        },
        heroStyle: {
            type: String,
            default: null
        }
    },

    components: {
        Header,
        Btn
    },

    data() {
        return {

        }
    },

    methods: {
        goToShop() {
            this.$router.push({
                name: 'shop'
            });
        }
    },
    
    computed: {

    },

    created() {

    },

    mounted() {

    }
}
</script>

<style>
header, .content, .hero-text {
    z-index: 2; /* above overlay */
}
</style>

<style scoped>
#hero {
    display: flex;
    background-image: url("../../assets/img/hero.png");
    background-size: cover;
    background-position: center;
    flex: 1;
    min-height: 100vh;
    min-height: 100svh;
    position: relative;
    overflow: hidden;
}

#hero video {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
}

#hero .container {
    display: flex;
    flex-direction: column;
}

.hero-img-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.content {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.hero-text {
    flex: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
}

.hero-text-content {
    margin-bottom: 32px;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.hero-text-content .btn {
    margin-top: 40px;
}

.arrow-container {
    margin-bottom: 24px;
}
</style>