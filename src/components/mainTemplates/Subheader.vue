<template>
    <section id="subHeader">
        <div class="container">
            <div class="content">
                <ul>
                    <li class="link active"><a>Katana</a></li>
                    <li class="link bb"><a>Nodachi</a></li>
                    <li class="link bb"><a>Tachi</a></li>
                    <li class="link bb"><a>Wakizashi</a></li>
                    <li class="link bb"><a>Tanto</a></li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Subheader',

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
        
    },

}
</script>

<style scoped>
#subHeader {
    background: var(--primary-color);
    padding: 12px;
}

#subHeader .content {
    display: flex;
    justify-content: center;
    align-items: center;
}

#subHeader .content ul {
    display: flex;
    gap: 32px;
}

#subHeader .content ul li {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    padding: 4px 16px;
}

.link.active {
    border: 1px solid var(--text-color);
}

</style>