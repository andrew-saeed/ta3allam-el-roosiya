<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <nav class="flex justify-center">
        <RouterLink to="/">مرحباً</RouterLink>
        <RouterLink to="/start">ابدا</RouterLink>
    </nav>
</template>
<style scoped>
    a {
        display: block;
        font-size: var(--ter-text-base-2);
        font-weight: bold;
        padding: 0.5rem 1rem;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: var(--ter-white-mute);
        }
    }
</style>