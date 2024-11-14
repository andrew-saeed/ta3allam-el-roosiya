<script setup lang="ts">
import { ref } from 'vue'
import Select from 'primevue/select'
import { useAppStore } from '@/stores/app'

const { langs, currentLang, toggleLang } = useAppStore()
const selectedLang = ref(currentLang)
</script>
<template>
    <Select 
        v-model="selectedLang" 
        :options="langs" 
        optionLabel="name" 
        placeholder="Select a City" 
        v-on:change="toggleLang"/>
</template>