<script setup lang="ts">

import PageTitle from '@/components/PageTitle.vue'

defineProps<{
    title?: string
}>()
</script>

<template>

    <div id="page-layout" class="min-h-svh bg-primary-900 dark:bg-surface-700 text-surface-0 px-2 py-8">

        <div id="page__header" class="my-6">
            <PageTitle v-if="title" :text="title"></PageTitle>
        </div>

        <div id="page__content">
            <slot />
        </div>

    </div>

</template>