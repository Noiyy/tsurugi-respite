<template>
    <section style="position: relative; margin-bottom: var(--divider-height);">
        <TiltDivider dividerType="top-lr"></TiltDivider>
    </section>

    <section id="pr-detailed-info">
        <div class="container">
            <div class="content">
                <div class="content-wrapper">
                    <div class="info-card">
                        <div class="info-inner-card">
                            <div class="left">
                                <h3>HONSANMAI KATANA </h3>
                                <p>The blade is honsanmai lamination, 1095 high carbon steel is the cutting edge, folded steel is used as jacket steel. It is clay-tempered with a natural hamon. Besides the hamon, the boundary lines between different steels are also visible. The tsuka is made of hardwood, it's wrapped with genuine rayskin and synthetic leather ito. The saya is made of hardwood, it is covered in polished mother-of-pearl and shells and give a unique glow of random colors. The koiguchi, kurigata and kojiri are polished buffalo horns. The tsuba, fuchi, kashira are made of iron. The sword is fully customisable. </p>
                            </div>
                            <div class="right">
                                <h3> DESCRIPTION </h3>
                            </div>
                        </div>
                    </div>
                </div>
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
    name: 'ProductDetailedInfo',

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
#pr-detailed-info .content-wrapper {
    display: flex;
    justify-content: center;
    padding: 96px 0;
}

.info-card {
    border: 1px solid var(--text-color);
    padding: 24px;
    background-image: url("../../assets/img/seigaiha_20x_3.png");
    background-size: 20% 30%;
    background-repeat: repeat;
}

.info-inner-card {
    border: 1px solid var(--text-color);
    display: flex;
    background: var(--bg-color);
    padding: 16px;
    gap: 48px;
}

.left {
    padding: 16px;
}

.left h3 {
    margin-bottom: 24px;
}

</style>