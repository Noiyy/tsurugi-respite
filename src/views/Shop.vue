<template>
    <div id="shop-content">
        <Header headerType="bg"></Header>
        <Subheader></Subheader>
        <ShopContent></ShopContent>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Header from '../components/mainTemplates/Header.vue';
import Subheader from '@/components/mainTemplates/Subheader.vue';
import ShopContent from '@/components/mainTemplates/ShopContent.vue';
import Footer from '../components/mainTemplates/Footer.vue';

export default {
    name: 'Shop',

    inject: [],

    components: {
        Header,
        Subheader,
        ShopContent,
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
#shop-content {
    display: flex;
    flex-direction: column;
}
</style>