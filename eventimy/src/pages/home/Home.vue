<template>
    <div class="homepage_container">
        <Header/>
        <Hero/>
        <EventCatalog />
        <Footer/>
    </div>
</template>

<script lang="ts">
    import Header from "../../components/common/Header.vue";
    import Hero from "../../components/homepage/Hero.vue";
    import EventCatalog from "../../components/homepage/EventCatalog.vue";
    import Footer from "../../components/common/Footer.vue";

    export default {
        components: {
            Header,
            Hero,
            EventCatalog,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
</style>