<template>
    <section id="bestsellers">
        <TiltDivider></TiltDivider>

        <div class="container">
            <div class="content">
                <div class="carousel-container">
                    <h2> BESTSELLERS </h2>
                    <div class="carousel">
                        <vueper-slides autoplay>
                            <vueper-slide v-for="(item, index) in bestsellersData" 
                                :key="index" 
                                :title="item.name" 
                                :content="`${item.price}€`"
                                :image="item.img" 
                                @click="$router.push({name: 'product', params: { id: index }})"/>
                        </vueper-slides>
                    </div>
                </div>

                <div class="bestsellers-text">
                    <p>Interested in our other blades? Head on over to our full list of products right below.</p>
                    <Btn text='View All' @btn-click="$router.push({name: 'shop'})"></Btn>
                </div>
            </div>
        </div>
    </section>

    <section style="position: relative; margin-bottom: var(--divider-height);">
        <TiltDivider :dividerType="'bot-rl'"></TiltDivider>
    </section>
</template>

<script>
import Btn from './Btn.vue';
import TiltDivider from './TiltDivider.vue';

import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

import katanaImg from '@/assets/img/product.jpg';

export default {
    name: 'Bestsellers',

    inject: [],

    components: {
        Btn,
        TiltDivider,
        VueperSlides,
        VueperSlide
    },

    data() {
        return {
            bestsellersData: [
                {
                    img: katanaImg,
                    name: "Honsanmai Katana",
                    price: 399.99,
                },
                {
                    img: katanaImg,
                    name: "Yamato Katana",
                    price: 299.99,
                },
                {
                    img: katanaImg,
                    name: "Hitatsura Katana",
                    price: 199.99,
                },
                {
                    img: katanaImg,
                    name: "Bohi Hazuya Katana",
                    price: 199.99,
                },
                {
                    img: katanaImg,
                    name: "O-Kissaki Katana",
                    price: 129.99,
                },
            ]
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
#bestsellers {
    position: relative;
}

#bestsellers .content {
    margin-top: var(--divider-height);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center; 
}

.carousel-container {
    margin-top: 64px;
    width: 100%;
}

.carousel {
    margin-top: 48px;
    margin-bottom: 88px;
}

.bestsellers-text {
    margin-bottom: 64px;
}

.bestsellers-text p {
    margin-bottom: 16px;
}

</style>

<style>
.carousel__slide {
    width: 100%;
}

.vueperslide__title {
    font-weight: 700;
    font-size: 32px;
    font-family: 'Cinzel', serif;
    color: var(--text-color);
}

.vueperslide__content {
    color: var(--accent-color);
    font-weight: 700;
}
</style>