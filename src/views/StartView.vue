<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
</script>

<template>
  <PageLayout :title="$t('message.pages.start.title')">
  </PageLayout>
</template>