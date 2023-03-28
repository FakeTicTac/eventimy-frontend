<template>
    <div class="page_list_container">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
    </div>
</template>

<script lang="ts">
    export default {
    }
</script>

<style lang="scss" scoped>
    .page_list_container {
        display: flex;
        flex-direction: row;
        padding: 5rem 0;
        justify-content: center;
        span {
            font-size: 18px;
            margin: 0 1rem;
            width: 1.5rem;
            text-align: center;
            border-top: 1px solid red;
            border-bottom: 1px solid red;
        }
    }
</style>