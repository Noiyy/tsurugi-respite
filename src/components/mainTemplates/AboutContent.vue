<template>
    <section id="about-content">
        <div class="container">
            <div class="content">
                <div class="content-wrapper">
                    <div class="left">
                        <h2> About Us </h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                    </div>
                    <div class="right">
                        <img class="img-fluid" src="../../assets/img/katanas2.jpg" alt="katanas">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="about-quote">
        <TiltDivider></TiltDivider>

        <div class="container">
            <div class="content">
                <blockquote class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</blockquote>
            </div>
        </div>
    </section>

    <section style="position: relative; margin-bottom: var(--divider-height);">
        <TiltDivider dividerType="bot-lr"></TiltDivider>
    </section>
</template>

<script>
import TiltDivider from './TiltDivider.vue';

export default {
    name: 'AboutContent',

    inject: [],

    components: {
        TiltDivider
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
#about-content {
    background-color: var(--primary-color);
    position: relative;
}

#about-content .content-wrapper {
    display: flex;
}

#about-content .content-wrapper {
    display: flex;
    padding-top: 96px;
    padding-bottom: 88px;
    gap: 120px;
    justify-content: space-between;
}

#about-content .left h2 {
    margin-bottom: 40px;
}

#about-content .right img {
    width: 100%;
}

#about-quote {
    position: relative;
}

#about-quote .content {
    padding-top: var(--divider-height);
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

#about-quote .content blockquote {
    max-width: 730px;
    margin: 88px 0;
    font-size: 20px;
}

blockquote:before,
blockquote:after {
  content: open-quote;
  color: var(--text-color);
}

blockquote:before {
    content: open-quote;
}

blockquote:after {
  content: close-quote;
}

</style>