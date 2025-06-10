<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <nav class="flex justify-center">
        <RouterLink to="/">{{ $t('message.nav.hello') }}</RouterLink>
        <RouterLink to="/lessons#page__header">{{ $t('message.nav.lessons') }}</RouterLink>
    </nav>
</template>
<style scoped>
    a {
        display: block;
        font-size: var(--ter-text-base-2);
        font-weight: bold;
        text-transform: capitalize;
        border-radius: 0.375rem;
        padding: 0.5rem 1rem;
        margin: 0 0.3rem;
        transition: background-color 0.3s ease-in-out;

        &:not(.router-link-exact-active):hover {
            background-color: var(--color-primary-600);
            color: var(--color-surface-50);
        }
    }
</style>