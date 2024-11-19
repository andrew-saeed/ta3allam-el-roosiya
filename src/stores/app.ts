import { ref } from 'vue'
import { defineStore } from 'pinia'
import i18n from '@/i18n'

import type { SelectChangeEvent } from 'primevue'

type Lang = {id: 'ar' | 'en', name: string, dir: 'rtl' | 'ltr'}
type LangID = Lang['id']
type LangDir = Lang['dir']
type AppConfig = {lang: LangID, darkMode: boolean}

const defaultConfig = `{"lang": "ar", "darkMode": false}`

export const useAppStore = defineStore('app', () => {

  /* Base */
  const htmlElement = document.documentElement
  const terAppConfig:AppConfig = JSON.parse(localStorage.getItem('terAppConfig') || defaultConfig)
  const langs = ref<Lang[]>([
    {id: 'ar', name: 'العربية', dir: 'rtl'},
    {id: 'en', name: 'english', dir: 'ltr'},
  ])
  const appContentExpand = ref(false)

  /* Helpers */
  const updateLangUi = (id:LangID, dir:LangDir) => {
    htmlElement.lang = id
    htmlElement.dir = dir
    i18n.global.locale = id
  }
  const updateDarkModeClass = (darkMode:boolean) => {
    darkMode ? htmlElement.classList.add('dark') : htmlElement.classList.remove('dark')
  }

  /* Init */
  const darkMode = ref(terAppConfig.darkMode)
  updateDarkModeClass(darkMode.value)

  const currentLang = ref(langs.value.filter(lang => lang.id === terAppConfig.lang)[0])
  updateLangUi(currentLang.value.id, currentLang.value.dir)

  /* Actions */
  const toggleLang = (e:SelectChangeEvent) => {
    updateLangUi(e.value.id, e.value.dir)
    terAppConfig.lang = e.value.id
    localStorage.setItem("terAppConfig", JSON.stringify(terAppConfig))
  }

  const toggleDarkMode = () => {
    htmlElement.classList.toggle('dark')
    terAppConfig.darkMode = !terAppConfig.darkMode
    localStorage.setItem("terAppConfig", JSON.stringify(terAppConfig))
  }

  const toggleAppContentExpand = () => {
    appContentExpand.value = !appContentExpand.value
  }

  return { 
    langs, 
    currentLang, 
    darkMode,
    appContentExpand,
    toggleLang,
    toggleDarkMode,
    toggleAppContentExpand
  }
})