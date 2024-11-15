<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
  <h1 class="text-medium-2 text-center font-bold capitalize">{{ text }}</h1>
</template>
