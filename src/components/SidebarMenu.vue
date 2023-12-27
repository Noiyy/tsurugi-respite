<template>
    <div id="sidebar-menu" v-if="showMenu">
        <div class="menu-wrapper">
            <div class="overlay link" @click="$emit('close-sidebarMenu')">
                <img class="img-fluid" src="../assets/img/tr_logo_full.svg" alt="">
            </div>

            <div class="menu">
                <div class="header-nav-links">
                    <div class="links">
                        <img class="basket-icon link" src="../assets/icons/Basket_dark.svg" alt="cart">
                        <router-link to="/shop" @click="$emit('close-sidebarMenu')" class="link-color"><h3 class="link bb-dark">SHOP</h3></router-link>
                    </div>
                    <div class="menu-btn link" @click="$emit('close-sidebarMenu')">
                        <img class="menu-btn open" src="../assets/img/burger-btn-close.svg" alt="menu">
                    </div>
                </div>

                <div class="nav-links">
                    <div class="nav-main-links">
                        <ul>
                            <li class="link bb-dark"><router-link to="/" @click="$emit('close-sidebarMenu')" class="link-color"><h3>Home</h3></router-link></li>
                            <li class="link bb-dark"><router-link to="/#contact" @click="$emit('close-sidebarMenu')" class="unstyled-link">
                                <h3>Contact</h3></router-link>
                            </li>
                            <li class="link bb-dark"><router-link to="/about" @click="$emit('close-sidebarMenu')" class="link-color"><h3>About</h3></router-link></li>
                        </ul>
                    </div>

                    <div class="product-type-links">
                        <ul>
                            <li class="link bb-dark"><router-link to="/shop" @click="$emit('close-sidebarMenu')" class="link-color"><h5>Katana</h5></router-link></li>
                            <li class="link bb-dark"><a><h5>Nodachi</h5></a></li>
                            <li class="link bb-dark"><a><h5>Tachi</h5></a></li>
                            <li class="link bb-dark"><a><h5>Wakizashi</h5></a></li>
                            <li class="link bb-dark"><a><h5>Tanto</h5></a></li>
                        </ul>
                    </div>
                </div>

                <div class="menu-footer">
                    <div class="footer-socials">
                        <img src="../assets/icons/IG_dark.svg" alt="IG" class="link">
                        <img src="../assets/icons/X_dark.svg" alt="X" class="link">
                        <img src="../assets/icons/YT_dark.svg" alt="YT" class="link">
                        <img src="../assets/icons/FB_dark.svg" alt="FB" class="link">
                        <img src="../assets/icons/TT_dark.svg" alt="TT" class="link">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SidebarMenu',

    emits: ['close-sidebarMenu'],

    props: {
        showMenu: {
            type: Boolean,
            default: false
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

    },

    created() {

    },

    mounted() {

    }
}
</script>

<style scoped>
#sidebar-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0,0,0,0.3);
    z-index: 900;
    color: var(--bg-color);
    display: flex;
}

.menu-wrapper {
    display: flex;
    width: 100%;
    height: 100%;
}

.overlay {
    display: flex;
    padding: 64px;
    flex-grow: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(6.5px);
}

.overlay img {
    width: 300px;
}

.menu {
    background: var(--text-color);
    display: flex;
    flex-direction: column;
    flex-grow: 1.4;
    padding: 24px;
    /* background-image: url("../assets/img/uroko_20x.png");
    background-size: 10% 10%;
    background-blend-mode: soft-light;
    background-repeat: repeat; */
}

h3 {
    font-size: 36px;
}

.header-nav-links {
    justify-content: flex-end;
    margin-top: 16px;
    margin-bottom: 80px;
}

.nav-links {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-left: 64px;
}

.nav-main-links ul, .product-type-links ul {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.product-type-links ul {
    font-size: 20px;
    gap: 2px;
}

.header-nav-links {
    display: flex;
    gap: 48px;
}

.links {
    display: flex;
    gap: 16px;
    font-family: 'Cinzel', serif;
    align-items: center;
}

.links h3 {
    font-weight: 700;
    font-size: 20px;
}

.links .basket-icon {
    margin-top: -4px;
}

.menu-footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 72px;
}

.menu-footer .footer-socials {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}

.link-color {
    color: var(--bg-color);
}

.unstyled-link {
    color: var(--bg-color) !important;
}

.router-link-active {
    color: rgba(0, 0, 0, 0.5);
}

</style>