<template>
    <section id="shopContent">
        <div class="container">
            <div class="header-content">
                <div class="content-wrapper">
                    <div class="left">
                        <div class="left-heading">
                            <h2> Katana </h2>
                            <img src="../../assets/icons/Info.svg" alt="info">
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
                    </div>

                    <div class="right">
                        <img src="../../assets/img/katana.png" alt="katana">
                    </div>
                </div>
            </div>

            <div class="products-nav">
                <div class="right">
                    <Btn :isInput="true" text="Search" :addBtnToInput="true" :inputType="'email'" inputId="shop_search" :inputBtnClass="'dark-hover'"
                        @input-btn-click="searchProducts()">
                    </Btn>
                </div>
            </div>

            <div class="products">
                <div class="product-card" v-for="(card, index) in filteredProductsData" :key="index">
                    <div class="product-inner-card">
                        <router-link :to="{ name: 'product', params: { id: index } }" @click="saveProductData(card)">
                            <div class="product-img-container">
                                <img src="../../assets/img/product.jpg" alt="katana">
                            </div>
                        </router-link>
                        
                        <div class="product-content">
                            <div class="product-row text">
                                <div class="product-name">
                                    <h6> {{card.name}} </h6>
                                </div>
                                <div class="product-prices">
                                    <h6> {{ card.price }}€ </h6>
                                    <p> 220.99€ </p>
                                </div>
                            </div>
                            <div class="product-row center">
                                <div class="product-rating">
                                    <img src="../../assets/icons/Star_filled.svg" alt="s">
                                    <img src="../../assets/icons/Star.svg" alt="s">
                                    <img src="../../assets/icons/Star.svg" alt="s">
                                    <img src="../../assets/icons/Star.svg" alt="s">
                                    <img src="../../assets/icons/Star.svg" alt="s">
                                </div>
                                <Btn text="Add" :btnClass="'secondary'"></Btn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p class="countPara"> Count of products: {{ filteredProductsData.length }}</p>

        </div>
    </section>

    <section style="position: relative; margin-bottom: var(--divider-height);">
        <TiltDivider dividerType="bot-lr"></TiltDivider>
    </section>
</template>

<script>
import Btn from './Btn.vue';
import TiltDivider from './TiltDivider.vue';

import katanaImg from '@/assets/img/product.jpg';

export default {
    name: 'ShopContent',

    inject: [],

    components: {
        Btn,
        TiltDivider
    },

    data() {
        return {
            productsData: [
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
                {
                    img: katanaImg,
                    name: "Hazuya Katana",
                    price: 199.99,
                },
                {
                    img: katanaImg,
                    name: "Shobu-Zukuri Katana",
                    price: 259.99,
                },
                {
                    img: katanaImg,
                    name: "Choji Hamon Katana",
                    price: 199.99,
                },
                {
                    img: katanaImg,
                    name: "Kumo Katana",
                    price: 319.99,
                },
                {
                    img: katanaImg,
                    name: "Hinoken Katana",
                    price: 199.99,
                },
            ],
            filteredProductsData: []
        }
    },

    methods: {
        searchProducts() {
            const searchQuery = document.getElementById("shop_search").value;
            this.filterProducts(searchQuery);
        },

        filterProducts(query) {
            this.filteredProductsData = this.productsData.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));
        },

        saveProductData(product) {
            console.log(product);
        }
    },
    
    computed: {

    },

    created() {
        this.filterProducts("");
    },

    mounted() {

    }
}
</script>

<style scoped>
#shopContent {
    position: relative;
}

.right img {
    width: 100%;
}

.left-heading {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
}

.header-content .content-wrapper {
    display: flex;
    margin-top: 40px;
    justify-content: space-between;
    align-items: center;
    gap: 124px;
}

.products-nav {
    padding: 16px;
    background: var(--primary-color);
    display: flex;
    justify-content: flex-end;
}

.products {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    border: 3px solid var(--primary-color);
    padding: 8px;
    padding-top: 24px;
    margin-top: 40px;
}

.product-card {
    width: 24.1%;
    border: 1px solid var(--text-color);
    padding: 16px;
    background-image: url("../../assets/img/seigaiha_20x_3.png");
    background-size: 20% 10%;
    background-repeat: repeat;
}

.product-inner-card {
    border: 1px solid var(--text-color);
}

.product-row {
    display: flex;
}

.product-row.text {
    justify-content: space-between;
    gap: 24px;
}

.product-row.center {
    flex-direction: column;
    align-items: center;
}

.product-img-container img {
    width: 100%;
}

.product-content {
    background: var(--bg-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid var(--text-color);
    padding: 8px;
    gap: 8px;
}

.product-prices h6 {
    color: var(--accent-color);
}

.product-prices p {
    font-size: 14px;
    text-decoration: line-through;
}

.product-row .btn {
    margin-bottom: 8px;
}

.product-rating {
    margin-top: 16px;
    margin-bottom: 8px;
}

.countPara {
    margin-top: 8px;
    margin-bottom: 112px;
}

</style>