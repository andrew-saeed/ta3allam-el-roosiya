<script setup lang="ts">
import { RouterView } from 'vue-router'

import Nav from './components/Nav.vue'
import LangPicker from './components/LangPicker.vue'
import ModePicker from './components/ModePicker.vue'
</script>

<template>
  <header class="self-center">
    <section class="text-center capitalize">
      <div class="ctrls flex justify-between">
        <LangPicker />
        <ModePicker />
      </div>
      <div class="hero mt-12 space-y-2">
        <img class="w-40 h-40 mx-auto" src="/logo.png" alt="">
        <p class="text-xlarge leading-xlarge text-primary-400 font-bold">{{ $t('message.learnRussianTitle') }}</p>
        <p class="text-medium leading-medium">{{ $t('message.learnRussianDescription') }}</p>
      </div>
    </section>
    <div class="mt-12">
      <Nav />
    </div>
  </header>

  <main class="bg-primary-900 dark:bg-surface-700 text-surface-0 px-4 py-2 rounded-md">
    <RouterView />
  </main>
</template>
