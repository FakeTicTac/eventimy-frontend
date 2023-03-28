<template>
    <div class="button_container">
        <router-link class="btn" to="/login">Log in</router-link>
        <router-link class="btn" to="/signup">Sign up</router-link>
    </div>
</template>

<script lang="ts">
    export default {

    }
</script>

<style lang="scss" scoped>
    .button_container {
        .btn {
            margin: .4rem;
            padding: 0.4rem 3.9rem;
            border-radius: .5rem;
            border: 1px solid red;
            font-size: 1.3rem;
            font-weight: 700;
            color: red;
        }
    }
</style>