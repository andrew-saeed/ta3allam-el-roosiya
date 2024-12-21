<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

import PageLayout from '@/layouts/PageLayout.vue'

import IconBtn from '@/components/IconBtn.vue'
import IconTextBtn from '@/components/IconTextBtn.vue'
import Speaker from '@/components/icons/Speaker.vue'
import Quiz from '@/components/icons/Quiz.vue'
import TargetWordChar from '@/components/TargetWordChar.vue'

import useAlphabetStore from '@/stores/alphabet'

const rouer = useRouter()
const { data } = useAlphabetStore()

const audio = new Audio()
onMounted(() => {
    audio.volume = 1
})

const playSound = (file) => {
    audio.src = `/${file}`
    audio.play()
}
</script>
<template>
    <PageLayout :title="$t('message.pages.alphabet.title')">
        <p class="sticky top-3 left-0 flex justify-center pb-4">
            <IconTextBtn text="ready for a quiz" class="medium" @click="rouer.push({path:'/alphabet/quiz'})">
                <Quiz/>
            </IconTextBtn>
        </p>
        <ul class="grid gap-8 md:px-2 py-8 space-y-10 overflow-auto">
            <li v-for="char in data" class="text-medium-1 leading-medium-1">
                <div>
                    <div class="flex gap-4">
                        <h2 class="font-bold">{{ char.c }} {{ char.s }}</h2>
                        <p>
                            <IconBtn class="small" @click="playSound(char.sound)">
                                <Speaker />
                            </IconBtn>
                        </p>
                    </div>
                    <p class="flex items-center">{{ $t(`message.examples.alphabet['${char.s}']`) }}</p>
                </div>
                <ul>
                    <li v-for="example in char.examples">
                        <div class="flex gap-8 mt-6">
                            <TargetWordChar :word="example.id" :target="example.targetChar" />
                            <p class="flex items-center">
                                <IconBtn class="small" @click="playSound(example.sound)">
                                    <Speaker />
                                </IconBtn>
                            </p>
                        </div>
                        <p class="capitalize">{{ $t(`message.dictionary['${example.id}']`) }}</p>
                    </li>
                </ul>
            </li>
        </ul>
    </PageLayout>
</template>