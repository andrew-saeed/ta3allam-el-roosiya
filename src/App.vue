<script setup lang="ts">
import { RouterView } from 'vue-router'

import Nav from './components/Nav.vue'
import LangPicker from './components/LangPicker.vue'
import ModePicker from './components/ModePicker.vue'
</script>

<template>
  <header>
    <section class="text-center capitalize">
      <div class="ctrls flex justify-between">
        <LangPicker />
        <ModePicker />
      </div>
      <div class="hero mt-12 space-y-2">
        <img class="w-40 h-40 mx-auto" src="/logo.png" alt="">
        <p class="text-xlarge text-blue-400 font-bold">{{ $t('message.learnRussianTitle') }}</p>
        <p class="text-medium">{{ $t('message.learnRussianDescription') }}</p>
      </div>
    </section>
    <div class="mt-12">
      <Nav />
    </div>
  </header>

  <main class="mt-4">
    <RouterView />
  </main>
</template>
