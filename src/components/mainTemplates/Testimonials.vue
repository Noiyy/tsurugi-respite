<template>
    <section id="testimonials">
        <div class="container">
            <div class="content">
                
                <div class="testimonial-cards-container">
                    <div class="testimonial-card" v-for="(card, index) in testimonialsData" :key="index">
                        <div class="card-img">
                            <img :src="card.img" :alt="card.imgName">
                        </div>
                        <div class="card-text">
                            <h3> {{ card.heading }} </h3>
                            <p> {{ card.text }} </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- <div class="tilt-divider">
        <img src="../../assets/img/tilt_d_lr.svg">
    </div> -->
</template>

<script>
import settingsIcon from '@/assets/icons/Settings.svg';
import doneIcon from '@/assets/icons/Done_fill.svg';
import giftIcon from '@/assets/icons/Gift.svg';

export default {
    name: 'Testimonials',

    inject: [],

    components: {

    },

    data() {
        return {
            testimonialsData: [
                {
                    img: doneIcon,
                    heading: "Highest quality worldwide",
                    text: "Our experienced smiths will ensure the highest quality Tamagahane steel blades with attention to the smallest details."
                },
                {
                    img: settingsIcon,
                    heading: "Limitless customization",
                    text: "Choose from our many options to customize your new katana in any possible way you want, be it engravings or accessories."
                },
                {
                    img: giftIcon,
                    heading: "Premium Services With utmost care",
                    text: " We offer many special services to our loyal customers, starting with every order receiving a small token of our appreciation."
                }
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
#testimonials {
    background: var(--primary-color);
}

.testimonial-cards-container {
    display: flex;
    gap: 88px;
    justify-content: center;
    margin-top: 96px;
    margin-bottom: 48px;
}

.testimonial-card {
    text-align: center;
    width: 33%;
}

.testimonial-card .card-img {
    margin-bottom: 12px;
}

.testimonial-card .card-text h3 {
    font-size: 24px;
    font-weight: 700;
    line-height: 74.814%;
}

.testimonial-card .card-text p {
    margin-top: 24px;
}
</style>