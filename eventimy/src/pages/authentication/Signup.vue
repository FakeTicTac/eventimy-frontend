<template>
    <div class="signup_container">
        <Header />
        <Footer />
    </div>
</template>

<script lang="ts">
    import Header from "../../components/common/Header.vue";
    import Footer from "../../components/common/Footer.vue";
    
    export default {
        components: {
            Header,
            Footer
        }
    }
</script>

<style scoped>
    .signup_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
