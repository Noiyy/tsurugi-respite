<template>
    <div class="divider" :class="dividerType">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" :style="`height: ${customHeight}px;`">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
    </div>
</template>

<script>

export default {
    name: 'TiltDivider',

    props: {
        dividerType: {
            type: String,
            default: "top-lr"
        },
        customHeight: {
            type: Number,
            default: null
        },
    },
}
</script>

<style scoped>
.divider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.divider svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 80px;
}

.divider.bot-rl, .divider.bot-lr {
    transform: rotate(180deg);
}

.divider.top-rl svg, .divider.bot-lr svg {
    transform: rotateY(180deg);
}

.divider .shape-fill {
    fill: #951D02;
}
</style>