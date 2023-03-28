<template>
    <div class="event_search_container">
        <input type="text" placeholder="Event Type">
        <input type="text" placeholder="Dates">
        <input type="text" placeholder="Location">
    </div>
</template>

<script lang="ts">
    export default {
    }
</script>

<style lang="scss" scoped>
    .event_search_container {
        padding: 2rem 4.5rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        input {
            width: 25vw;
            height: 2.5rem;
            border-radius: 0.5rem;
            background: none;
            border: 1px solid red;
            &::placeholder {
                color: #fff;
                font-family: "Alata", sans-serif;
                font-size: 18px;
                padding-left: 2rem;
            }
        }
    }
</style>