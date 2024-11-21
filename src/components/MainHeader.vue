<script setup>
import { onMounted, useTemplateRef } from 'vue'

import Nav from './Nav.vue'
import LangPicker from './LangPicker.vue'
import ModePicker from './ModePicker.vue'

const header = useTemplateRef('header')

onMounted(() => {
    header.value.style.maxHeight = `${document.body.scrollHeight}px`
    header.value.firstChild.style.minWidth = `${header.value.scrollWidth - 32}px`
})
</script>

<template>

    <header ref="header" class="self-center w-full transition-[width,max-height,opacity] duration-300 ease-in-out overflow-hidden">
        <div class="header__box pb-12 md:pb-0">
            <section class="text-center capitalize">
                <div class="ctrls flex justify-between">
                    <LangPicker />
                    <ModePicker />
                </div>
                <div class="hero mt-12 space-y-2">
                    <img class="w-40 h-40 mx-auto" src="/logo.png" alt="">
                    <p class="text-xlarge leading-xlarge text-primary-400 font-bold">{{ $t('message.header.title') }}</p>
                    <p class="text-medium leading-medium">{{ $t('message.header.description') }}</p>
                </div>
            </section>
            <div class="mt-12">
                <Nav />
            </div>
        </div>
    </header>

</template>