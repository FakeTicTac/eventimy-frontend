<template>
    <div class="event_poster_container">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/modern-glossy-music-event-poster-design-template-84d38a706368baec17981e71a5e5810d_screen.jpg?ts=1636991393">
        <div class="event_text_container">
            <span class="event_date">12 July 2023</span>
            <span class="event_title">Night Party</span>
        </div>
    </div>
</template>

<script lang="ts">
    export default {

    }
</script>

<style lang="scss" scoped>
    .event_poster_container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 80vh;
        background: red;
        img {
            height: 65vh;
        }
        .event_text_container {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: var(--et-c-gray);
            height: 15vh;
            font-size: 22px;
            .event_date {
                color: red;
            }
        }
    }
</style>