<script setup lang="ts">
defineProps<{
    word: string,
    target: string
}>()
</script>

<template>
<p class="text-large capitalize">
    <span v-for="char in word" :class="[{'text-primary-400': char.toLowerCase() == target.toLowerCase()}]">{{ char }}</span>
</p>
</template>