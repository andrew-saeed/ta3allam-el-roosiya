<script setup lang="ts">
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <header class="space-y-8">
    <section class="text-center space-y-4">
      <img class="w-40 h-40 mx-auto" src="/logo.png" alt="">
      <p class="text-xlarge font-bold">تعلم الروسية</p>
      <p class="text-medium">تعلم اللغة الروسية من خلال مجموعة متنوعة من الدروس و التدريبات</p>
    </section>
    <Nav />
  </header>

  <main class="mt-4">
    <RouterView />
  </main>
</template>
