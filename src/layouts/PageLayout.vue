<script setup lang="ts">

import PageTitle from '@/components/PageTitle.vue'

defineProps<{
    title?: string
}>()
</script>

<template>

    <div id="page-layout" class="relative min-h-svh bg-primary-900 dark:bg-surface-700 text-surface-0 px-2 py-8">

        <Teleport to="body">
            <a class="burger-menu rounded-full p-2 fixed bottom-2 right-2 bg-blue-light" href="#main-nav">
                <BurgerMenu class="w-[2rem]" />
            </a>
        </Teleport>

        <div id="page__header" class="my-6">
            <PageTitle v-if="title" :text="title"></PageTitle>
        </div>

        <div id="page__content">
            <slot />
        </div>
    </div>

</template>

<style lang="scss">
.safari-fix-h-full #page__content {
  height: 100%;
}
</style>