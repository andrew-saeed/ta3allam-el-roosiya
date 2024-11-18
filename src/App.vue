<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

import AppLayout from './layouts/AppLayout.vue'

import Header from './components/Header.vue'

const isExpanded = ref(false)
const expandPage = () => isExpanded.value = !isExpanded.value
</script>

<template>
  <AppLayout>
    <Header :isExpanded="isExpanded" />
    <main class="w-full bg-primary-900 dark:bg-surface-700 text-surface-0 px-4 py-2 rounded-md">
      <RouterView @expandPage="expandPage" />
    </main>
  </AppLayout>
</template>
