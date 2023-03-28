<template>
    <div class="hero_container">
        <EventPoster />
        <EventPoster />
        <EventPoster />
        <Map />
    </div>
</template>

<script lang="ts">
    import EventPoster from './hero/EventPoster.vue';
    import Map from './hero/Map.vue';

    export default {
        components: {
            EventPoster,
            Map,
        }
    }
</script>

<style lang="scss" scoped>
    .hero_container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>