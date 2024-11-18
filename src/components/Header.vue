<script setup>
import { onMounted, useTemplateRef } from 'vue'

import Nav from './Nav.vue'
import LangPicker from './LangPicker.vue'
import ModePicker from './ModePicker.vue'

defineProps({
    isExpanded: {
        type: Boolean,
        required: true
    }
})

const header = useTemplateRef('header')

onMounted(() => {
    header.value.style.maxHeight = `${document.body.scrollHeight}px`
    header.value.firstChild.style.minWidth = `${header.value.scrollWidth}px`
})
</script>

<template>

    <header ref="header" class="self-center w-full pb-12 transition-[width,max-height,opacity] duration-300 ease-in-out overflow-hidden" :class="{'!w-0 !max-h-0 opacity-0':isExpanded}">
        <div class="header__box">
            <section class="text-center capitalize">
                <div class="ctrls flex justify-between">
                    <LangPicker />
                    <ModePicker />
                </div>
                <div class="hero mt-12 space-y-2">
                    <img class="w-40 h-40 mx-auto" src="/logo.png" alt="">
                    <p class="text-xlarge leading-xlarge text-primary-400 font-bold">{{ $t('message.learnRussianTitle') }}</p>
                    <p class="text-medium leading-medium">{{ $t('message.learnRussianDescription') }}</p>
                </div>
            </section>
            <div class="mt-12">
                <Nav />
            </div>
        </div>
    </header>

</template>