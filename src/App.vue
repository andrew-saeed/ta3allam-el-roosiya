<script setup>
import { RouterView } from 'vue-router'

import AppLayout from './layouts/AppLayout.vue'

import MainHeader from './components/MainHeader.vue'
</script>

<template>
  <AppLayout>
    <MainHeader />
    <main class="w-full">
      <RouterView @expandPage="isExpanded = $event" />
    </main>
  </AppLayout>
</template>
