<template>
    <div class="login_container">
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
    .login_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
