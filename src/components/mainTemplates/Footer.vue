<template>
    <footer id="footer">
        <div class="container">
            <div class="content">
                <div class="info-wrapper">
                    <div class="footer-info-group">
                        <h3> Our store </h3>
                        <ul>
                            <li class="link"><a>About us</a></li>
                            <li class="link"><a>Stores & Hours</a></li>
                            <li class="link"><a>FAQs</a></li>
                            <li class="link"><a>Sword testing</a></li>
                            <li class="link"><a>Terms of Service</a></li>
                        </ul>
                    </div>

                    <div class="footer-info-group">
                        <h3> Info </h3>
                        <ul>
                            <li class="link"><a>Shipping</a></li>
                            <li class="link"><a>Returns</a></li>
                            <li class="link"><a>Payment</a></li>
                            <li class="link"><a>Contact us</a></li>
                        </ul>
                    </div>

                    <div class="footer-info-group last">
                        <div class="footer-logo">
                            <img class="img-fluid" src="../../assets/img/tr_logo_1.svg" alt="">
                        </div>
                        <div class="footer-socials">
                            <img src="../../assets/icons/IG.svg" alt="IG" class="link">
                            <img src="../../assets/icons/X.svg" alt="X" class="link">
                            <img src="../../assets/icons/YT.svg" alt="YT" class="link">
                            <img src="../../assets/icons/FB.svg" alt="FB" class="link">
                            <img src="../../assets/icons/TT.svg" alt="TT" class="link">
                        </div>
                        <h6>contact@tsurugirespite.com</h6>
                        <div class="footer-payment-options">
                            <img src="../../assets/icons/GooglePay.svg" alt="GP">
                            <img src="../../assets/icons/ApplePay.svg" alt="AP">
                            <img src="../../assets/icons/PayPal.svg" alt="PP">
                            <img src="../../assets/icons/Visa.svg" alt="VISA">
                            <img src="../../assets/icons/Mastercard.svg" alt="MC">
                        </div>
                    </div>
                </div>

                <div class="copy-info">
                    <h6> ©TsurugiRespite 2023, all rights reserved. </h6>
                    <h6 style="margin-top: 8px; font-size: 13px;"> Made by <span class="link"><a href="https://noiyy.eu/">Noiyy</a></span> </h6>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer',

    inject: [],

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
footer {
    background: var(--primary-color);
    font-family: 'Cinzel', serif;
    font-weight: 700;
}

.info-wrapper {
    margin-top: 48px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 48px;
}

.copy-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
}

.copy-info span {
    border-bottom: 1px solid var(--text-color);
}

.copy-info span:hover {
    border-bottom: 1px solid transparent;
}

.footer-info-group {
    display: flex;
    flex-direction: column;
}

.footer-info-group h3 {
    border-bottom: 1px solid var(--text-color);
    margin-bottom: 16px;
}

.footer-info-group.last {
    justify-content: flex-end;
    text-align: end;
    gap: 16px;
}

.footer-socials, .footer-payment-options {
    display: flex;
    gap: 8px;
    justify-content: flex-end;
}

.footer-logo img {
    width: 50px;
}
</style>