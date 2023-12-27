<template>
    <header id="header" :class="headerClasses">
        <div class="container">
            <div class="content">
                <div class="logo-container">
                    <router-link to="/"><img src="../../assets/img/tr_logo_1.svg" class="img-fluid" alt="TR-logo"></router-link>
                </div>
                <div class="header-nav">
                    <div class="nav-links">
                        <img class="basket-icon link" src="../../assets/icons/Basket.svg" alt="cart">
                        <h3 @click="goToShop()" class="link bb">SHOP</h3>
                    </div>
                    <div class="menu-btn link" @click="emitter.emit('open-sidebarMenu');">
                        <img class="menu-btn open" src="../../assets/img/burger-btn-open_dark.svg" alt="menu">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

export default {
    name: 'Header',

    inject: [],

    props: {
        headerType: {
            type: String,
            default: "overlay"
        }
    },

    components: {

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
        headerClasses() {
            if (this.headerType == "bg") return "bg";
            else return;
        }
    },

    created() {

    },

    mounted() {

    }
}
</script>

<style scoped>
header {
    padding: 39px 0px;
}

header.bg {
    background: var(--secondary-color);
    background-image: url("../../assets/img/uroko_20x_2.png");
    background-size: 5% 80%;
    background-blend-mode: color-dodge;
    background-repeat: repeat;
}

header .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo-container {
    display: flex;
}

.logo-container img {
    width: 50px;
}

.header-nav {
    display: flex;
    gap: 48px;
}

.nav-links {
    display: flex;
    gap: 16px;
    font-family: 'Cinzel', serif;
    align-items: center;
}

.nav-links h3 {
    font-weight: 700;
    font-size: 20px;
}

.nav-links .basket-icon {
    margin-top: -4px;
}

</style>