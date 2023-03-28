<template>
    <div class="event_item_container">
        <div class="item_block">
            <img src="https://www.shutterstock.com/image-vector/music-event-poster-design-template-600w-1423222013.jpg">
            <div class="item_text_block">
                <span class="item_date">12 July 2023</span>
                <span class="item_title">Electronic Sound</span>
                <span class="item_description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dignissim dignissim tincidunt. Praesent a leo cursus, ultrices metus non, suscipit ligula.</span>
                <span class="item_location">Alexela Kontserdimaja</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
    }
</script>

<style lang="scss" scoped>
    .event_item_container {
        padding: 1rem 4.5rem;
        .item_block {
            display: flex;
            flex-direction: row;
            height: 30vh;
            border-radius: 1rem;
            padding: 1.8rem .5rem;
            background: var(--et-c-gray);
            .item_text_block {
                display: flex;
                flex-direction: column;
                padding: 3rem 4rem;

                justify-content: space-between;
                .item_date {
                    font-size: 25px;
                    color: red;
                }
                .item_title {
                    font-size: 25px;
                }
                .item_location,
                .item_description {
                    font-size: 16px;
                }
            }
        }
    }
</style>