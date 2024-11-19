<script setup>
import { RouterView } from 'vue-router'

import AppLayout from './layouts/AppLayout.vue'

import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <AppLayout>
    <MainHeader />
    <main class="w-full bg-primary-900 dark:bg-surface-700 text-surface-0 px-4 py-2 rounded-md">
      <RouterView @expandPage="isExpanded = $event" />
    </main>
  </AppLayout>
</template>
