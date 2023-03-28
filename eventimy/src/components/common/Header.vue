<template>
    <div class="header_container">
        <div class="header_primary">
            <div class="primary_logo">
                <img src="@/assets/images/components/common/header/website-logo.svg">
            </div>
            <div class="primary_search">
                <input type="text" placeholder="Search for anything...">
            </div>
            <div class="primary_login">
                <Authentication/>
            </div>
        </div>
        <div class="header_navigation">
            <span v-for="navigationItem in navigationItems" :key="navigationItem">
                {{ navigationItem }}
            </span>
        </div>
    </div>
</template>

<script lang="ts">
    import Authentication from './Authentication.vue';

    export default {
    components: { Authentication },
        component: {
            Authentication,
        },
        data() {
            return {
                navigationItems: [
                    "Home",
                    "Music",
                    "Hobbies",
                    "Visual Arts",
                    "Food & Drink",
                    "Business",
                    "Sport",
                    "Holiday"
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .header_container {
        display: flex;
        flex-direction: column;
        .header_primary {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 71px;
            padding: 1rem 0;
            .primary_logo {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 4.5rem;
                img {
                    width: 100px;
                }
            }
            .primary_search {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0 4.5rem;
                input {
                    width: 25vw;
                    height: 2.5rem;
                    background: none;
                    border-radius: 0.5rem;
                    border: 1px solid red;
                    &::placeholder {
                        color: #fff;
                        font-size: 18px;
                        font-family: "Alata", sans-serif;
                        padding-left: 2rem;
                        font-weight: 400;
                    }
                }
            }
            .primary_login {
                display: flex;
                flex-direction: row;
                align-items: center;
                padding: 0 4.5rem;
            }
        }
        .header_navigation {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            height: 63px;
            padding: 2rem 0;
            span {
                padding: 0 4.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                font-size: 18px;

            }
        }
    }
</style>