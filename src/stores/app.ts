import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { SelectChangeEvent } from 'primevue'

export const useAppStore = defineStore('app', () => {
  const langs = ref([
    {id: 'ar', name: 'العربية', dir: 'rtl', current: true},
    {id: 'en', name: 'english', dir: 'ltr', current: false},
  ])

  const currentLang = ref(langs.value[0])

  const toggleLang = (e:SelectChangeEvent) => {
    const htmlElement = document.documentElement
    htmlElement.lang = e.value.id
    htmlElement.dir = e.value.dir
  }

  return { langs, currentLang, toggleLang }
})