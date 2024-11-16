<script setup lang="ts">
import Select from 'primevue/select'
import { useAppStore } from '@/stores/app'

const { langs, currentLang, toggleLang } = useAppStore()
</script>
<template>
    <Select 
        v-model="currentLang" 
        :options="langs" 
        optionLabel="name" 
        placeholder="Select a City" 
        @change="toggleLang"/>
</template>