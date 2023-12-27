<template>
    <section id="newsletter">
        <TiltDivider></TiltDivider>

        <div class="container">
            <div class="content">
                <div class="newsletter-text">
                    <p>Want to stay updated on our latest forged blades, or just get
                    notified of special offers and discounts?</p>
                </div>
                <div class="newsletter-input">
                    <Btn :isInput="true" :addBtnToInput="true" text="mail@gmail.com" :inputType="'email'" inputId="nl_email"
                        @input-btn-click="nlSubmitHandler()">
                    </Btn>
                </div>
            </div>
        </div>
    </section>

    <section style="position: relative; margin-bottom: var(--divider-height);">
        <TiltDivider :dividerType="'bot-lr'"></TiltDivider>
    </section>
</template>

<script>
import TiltDivider from './TiltDivider.vue';
import Btn from './Btn.vue';

export default { 
    name: 'Newsletter',

    inject: [],

    components: {
        TiltDivider,
        Btn
    },

    data() {
        return {

        }
    },

    methods: {
        nlSubmitHandler() {
            const email = document.getElementById("nl_email").value;
            alert("Email: " + email);
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

<style scoped>
#newsletter {
    position: relative;
    padding: 58px;
}

#newsletter .content {
    margin-top: var(--divider-height);
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 124px;
    padding: 0 64px;
}

.newsletter-text p {
    font-size: 20px;
}
</style>