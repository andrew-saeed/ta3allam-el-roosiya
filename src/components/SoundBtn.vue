<script setup lang="ts">
import { useAudio } from '@/composables/useAudio'

defineProps<{
  file: string
}>()

const { playSound, isPlaying } = useAudio()
</script>

<template>
    <IconBtn class="overflow-hidden" @click="playSound(file)">
        <Speaker v-show="!isPlaying" />
        <WaveSignal class="animate-[ping_0.6s_ease-in-out_infinite]" v-show="isPlaying" />
    </IconBtn>
</template>