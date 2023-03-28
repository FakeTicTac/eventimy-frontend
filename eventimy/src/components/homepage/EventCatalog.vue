<template>
    <div class="event_catalog_container">
        <Search />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <EventItem />
        <PageList />
    </div>
</template>

<script lang="ts">
    import EventItem from './event-catalog/EventItem.vue';
    import Search from './event-catalog/Search.vue';
    import PageList from './event-catalog/PageList.vue';

    export default {
        components: {
            EventItem,
            Search,
            PageList
        }
    
    }
</script>

<style lang="scss" scoped>
    .event_catalog_container {
        margin-top: 8rem;
    }
</style>