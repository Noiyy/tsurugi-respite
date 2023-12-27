<template>
    <section id="contact">
        <div class="container">
            <div class="content">
                <h2> CONTACT US </h2>
                <div class="contact-wrapper">
                    <div class="contact-form-container">
                        <form action="">
                            <div class="contact-row">
                                <div class="cf_input-group">
                                    <label for="cf_name">Name:</label>
                                    <input type="text" id="cf_name" placeholder="Meno">
                                </div>
                                
                                <div class="cf_input-group">
                                    <label for="cf_email">Email:</label>
                                    <input type="email" id="cf_email" placeholder="mail@gmail.com">
                                </div>
                            </div>

                            <div class="contact-row">
                                <div class="cf_input-group">
                                    <label for="cf_msg">Message:</label>
                                    <textarea id="cf_msg" rows="4" placeholder=" ... a nice message"></textarea>
                                </div>
                            </div>

                            <div class="contact-row">
                                <Btn text="Submit" @btn-click="formSubmitHandler()"></Btn>
                            </div>
                        </form>
                    </div>

                    <div class="contact-info-container">
                        <div class="info-text">
                            <p> Have any questions? Interested in a custom katana? Feel free to let us know! </p>
                        </div>
                        <div class="info-img">
                            <img class="img-fluid" src="../../assets/img/katanas1.jpg" alt="katana">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Btn from './Btn.vue';

export default {
    name: 'Lorem',

    inject: [],

    components: {
        Btn
    },

    data() {
        return {

        }
    },

    methods: {
        formSubmitHandler() {
            const name = document.getElementById("cf_name").value;
            const email = document.getElementById("cf_email").value;
            const message = document.getElementById("cf_msg").value;

            alert("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);
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
#contact {
    background: var(--primary-color);
}

#contact .content {
    margin-top: var(--divider-height);
    margin-bottom: 64px;
}

#contact .content h2 {
    margin-bottom: 32px;
}

.contact-wrapper {
    display: flex;
    gap: 124px;
    justify-content: space-between; 
}

.contact-form-container {
    flex: 2;
}

.contact-info-container {
    flex: 1;
}

.contact-info-container img {
    margin-top: 24px;
    width: 100%;
}

.contact-form-container textarea {
    resize: none;
}

form {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.contact-row {
    display: flex;
    gap: 124px;
}

.contact-row .btn {
    margin-top: 8px;
}

.cf_input-group {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 4px;
}

.cf_input-group label {
    font-family: 'Cinzel', serif;
    font-weight: 700;
}

.cf_input-group input, .cf_input-group textarea {
    border: 1px solid var(--text-color);
    background: var(--bg-color);
    color: var(--text-color);
    padding: 8px;
    border-radius: 4px;
}
</style>