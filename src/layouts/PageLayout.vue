<script setup lang="ts">
defineProps<{
    title: string
}>()
import PageTitle from '@/components/PageTitle.vue'
</script>
<template>
    <div id="page-layout">
        <PageTitle :text="title"></PageTitle>
        <slot />
    </div>
</template>