<template>
    <div id="home-content">
        <MainHero></MainHero>
        <Testimonials></Testimonials>
        <Bestsellers></Bestsellers>
        <Contact></Contact>
        <Newsletter></Newsletter>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Bestsellers from '../components/mainTemplates/Bestsellers.vue';
import MainHero from '../components/mainTemplates/MainHero.vue';
import Testimonials from '../components/mainTemplates/Testimonials.vue';
import Contact from '../components/mainTemplates/Contact.vue';
import Newsletter from '../components/mainTemplates/Newsletter.vue';
import Footer from '../components/mainTemplates/Footer.vue';

export default {
    name: 'HomeContent',

    inject: [],

    components: {
        MainHero,
        Testimonials,
        Bestsellers,
        Contact,
        Newsletter,
        Footer
    },

    data() {
        return {

        }
    },

    methods: {
        ...mapActions(
            {

            }
        ),
    },
    
    computed: {
        ...mapGetters(
            {

            }
        ),
    },

    created() {

    },

    mounted() {
        
    }
}
</script>

<style scoped>
#home-content {
    display: flex;
    flex-direction: column;
}
</style>