import { ref } from 'vue'
import { defineStore } from 'pinia'
import i18n from '@/i18n'
import type { SelectChangeEvent } from 'primevue'

type Lang = {id: "ar" | "en", name: string, dir: "rtl" | "ltr"}
type LangID = Lang['id']
type LangDir = Lang['dir']
type AppConfig = {lang: LangID}

export const useAppStore = defineStore('app', () => {
  const htmlElement = document.documentElement
  const defaultConfig:AppConfig = {"lang": "ar"}
  const terAppConfig:AppConfig = JSON.parse(localStorage.getItem("terAppConfig") || `${defaultConfig}`)
  const updateLangUi = (id:LangID, dir:LangDir) => {
    htmlElement.lang = id
    htmlElement.dir = dir
    i18n.global.locale = id
  }
  
  const langs = ref<Lang[]>([
    {id: 'ar', name: 'العربية', dir: 'rtl'},
    {id: 'en', name: 'english', dir: 'ltr'},
  ])

  const currentLang = ref(langs.value.filter(lang => lang.id === terAppConfig.lang)[0])
  updateLangUi(currentLang.value.id, currentLang.value.dir)

  const toggleLang = (e:SelectChangeEvent) => {
    updateLangUi(e.value.id, e.value.dir)
    localStorage.setItem("terAppConfig", `{"lang":"${e.value.id}"}`)
  }

  return { langs, currentLang, toggleLang }
})