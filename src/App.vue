<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <AppLayout>
    <MainHeader />
    <main class="w-full">
      <RouterView />
    </main>
  </AppLayout>
</template>
