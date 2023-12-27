<template>
    <div id="about-content">
        <MainHero :isAbout="true"></MainHero>
        <AboutContent></AboutContent>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import MainHero from '../components/mainTemplates/MainHero.vue';
import AboutContent from '@/components/mainTemplates/AboutContent.vue';
import Footer from '../components/mainTemplates/Footer.vue';

export default {
    name: 'About',

    inject: [],

    components: {
        MainHero,
        AboutContent,
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
#about-content {
    display: flex;
    flex-direction: column;
}
</style>