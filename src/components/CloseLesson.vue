<script setup>
import { useRouter } from 'vue-router'

import { useAppStore } from '@/stores/app'

import IconBtn from '@/components/IconBtn.vue'
import Close from '@/components/icons/Close.vue'

const router = useRouter()
const appStore = useAppStore()

const closeLesson = () => {
    appStore.toggleAppContentExpand()
    router.push({name: 'start'})
}
</script>

<template>
    <IconBtn @click="closeLesson()" v-show="appStore.appContentExpand">
        <Close />
    </IconBtn>
</template>