<script setup lang="ts">

import PageTitle from '@/components/PageTitle.vue'
import CloseLesson from '@/components/CloseLesson.vue'

defineProps<{
    title: string
}>()
</script>

<template>

    <div id="page-layout">

        <div id="page__header" class="flex items-center">
            <div class="grow-0">
                <CloseLesson />
            </div>
            <div class="grow">
                <PageTitle :text="title"></PageTitle>
            </div>
        </div>

        <div id="page__content">
            <slot />
        </div>

    </div>

</template>