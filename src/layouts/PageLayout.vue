<script setup lang="ts">
import { useAppStore } from '@/stores/app'

import PageTitle from '@/components/PageTitle.vue'
import IconBtn from '@/components/IconBtn.vue'
import Expand from '@/components/icons/Expand.vue'
import Close from '@/components/icons/Close.vue'

defineProps<{
    title: string
}>()

const appStore = useAppStore()
</script>

<template>

    <div id="page-layout">

        <div id="page__header" class="flex items-center">
            <div class="grow-0">
                <IconBtn @click="appStore.toggleAppContentExpand()">
                    <Close v-show="appStore.appContentExpand" />
                    <Expand v-show="!appStore.appContentExpand" />
                </IconBtn>
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