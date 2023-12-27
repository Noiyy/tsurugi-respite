<template>
    <div id="product-content">
        <MainHero 
            heroClass="heroProduct"
            :heroStyle="heroStyle"
            >
            <template #content>
                <Header></Header>
                <div class="router-history">
                    <router-link class="link bb" to="/shop">Katana</router-link>
                    >
                    <p > Honsa </p>
                </div>
                
                <div class="product-showcase">
                    <h1> HONSANMAI KATANA </h1>
                    <div class="product-window">
                        <div class="product-inner-window">
                            <div class="product-img-container">
                                <img class="img-fluid" src="../assets/img/product.jpg" alt="katana">
                            </div>

                            <div class="product-info">
                                <div class="product-heading">
                                    <div class="product-prices">
                                        <h6> 199.99€ </h6>
                                        <p> 220.99€ </p>
                                    </div>
                                    <p>Premium quality 1095 high carbon steel</p>
                                </div>

                                <div class="product-add-info">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</p>
                                </div>

                                <div class="product-cta">
                                    <p>Store code: K_01H978NJK</p>
                                    <Btn text="Add to Cart"></Btn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </MainHero>

        <section style="position: relative; margin-bottom: var(--divider-height);">
            <TiltDivider dividerType="bot-rl"></TiltDivider>
        </section>

        <ProductNav></ProductNav>
        <ProductDetailedInfo></ProductDetailedInfo>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import MainHero from '../components/mainTemplates/MainHero.vue';
import Header from '../components/mainTemplates/Header.vue';
import Btn from '../components/mainTemplates/Btn.vue';
import TiltDivider from '../components/mainTemplates/TiltDivider.vue';
import ProductNav from '@/components/mainTemplates/ProductNav.vue';
import ProductDetailedInfo from '@/components/mainTemplates/ProductDetailedInfo.vue';
import Footer from '../components/mainTemplates/Footer.vue';

export default {
    name: 'ProductDetail',

    inject: [],

    components: {
        MainHero,
        Header,
        Btn,
        TiltDivider,
        ProductNav,
        ProductDetailedInfo,
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

        heroStyle() {
            return "";
        }
    },

    created() {

    },

    mounted() {

    }
}
</script>

<style scoped>
#product-content {
    display: flex;
    flex-direction: column;
}

.product-showcase {
    margin-bottom: 96px;
}

.product-showcase, .router-history {
    z-index: 2;
}

.router-history {
    display: flex;
    gap: 8px;
}

.product-showcase {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
}

.product-showcase h1 {
    margin-bottom: 32px;
}

.product-window {
    border: 1px solid var(--text-color);
    padding: 24px;
    background-image: url("../assets/img/seigaiha_20x_3.png");
    background-size: 20% 30%;
    background-repeat: repeat;
}

.product-inner-window {
    border: 1px solid var(--text-color);
    display: flex;
}

.product-img-container {
    flex: 2;
}

.product-img-container img {
    height: 100%;
    object-fit: cover;
}

.product-info {
    background: var(--bg-color);
    display: flex;
    flex-direction: column;
    gap: 40px;
    text-align: end;
    flex: 2.15;
}

.product-prices h6 {
    color: var(--accent-color);
    font-size: 24px;
}

.product-prices p {
    font-size: 18px;
    text-decoration: line-through;
}

.product-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
}

.product-heading p {
    max-width: 200px;
}

.product-cta {
    display: flex;
    align-items: center;
    gap: 32px;
    justify-content: flex-end;
    background: var(--primary-color);
    padding: 16px;
}

.product-add-info {
    padding: 0 16px;
    margin-left: 72px;
}

</style>

<style>
.heroProduct {
    background-image: url("../assets/img/product.jpg") !important;
}
</style>