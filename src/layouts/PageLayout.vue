<script setup lang="ts">

import PageTitle from '@/components/PageTitle.vue'

defineProps<{
    title?: string
}>()
</script>

<template>

    <div id="page-layout">

        <div id="page__header" class="my-6">
            <PageTitle v-if="title" :text="title"></PageTitle>
        </div>

        <div id="page__content">
            <slot />
        </div>

    </div>

</template>