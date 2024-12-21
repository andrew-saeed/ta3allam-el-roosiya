<script setup>
import { onMounted, ref } from 'vue'

import PageLayout from '@/layouts/PageLayout.vue'

import IconBtn from '@/components/IconBtn.vue'
import Speaker from '@/components/icons/Speaker.vue'

import useAlphabetStore from '@/stores/alphabet'

const {data} = useAlphabetStore()
const quiz = ref([])

onMounted(() => {

    const shuffledData = [...new Set(data)].sort(() => 0.5 - Math.random())

    quiz.value = shuffledData.slice(0, 10).map((item) => {

        const randomAnswers = Array.from({length: data.length}, (_, i) => i)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4)
        .map((index) => {
            return data[index]
        })

        const duplicateAnswer = randomAnswers.find(answer => answer.id === item.id)
        if(!duplicateAnswer) {
            const correctAnswerIndex = Math.floor(Math.random() * 4)
            randomAnswers[correctAnswerIndex] = item 
        }

        return {
            correctAnswer: item.id,
            sound: item.sound,
            answers: randomAnswers
        }
    })
})

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
    <PageLayout title="alphabet quiz" class="grid grid-rows-[min-content_1fr]">
        <div class="h-full flex justify-center items-center">
            <ul class="space-y-24">
                <li v-for="question in quiz" class="flex gap-4">
                    <p>
                        <IconBtn class="big" @click="playSound(question.sound)">
                            <Speaker />
                        </IconBtn>
                    </p>
                    <ul class="flex flex-col gap-4 pt-8">
                        <li 
                            class="relative text-large p-8 bg-primary-600 border-4 border-primary-600 hover:border-surface-50 rounded-full cursor-pointer transition" 
                            v-for="answer in question.answers" 
                            @click="console.log(answer.id === question.correctAnswer)"
                        >
                            <span class="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">{{ answer.c }}</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </PageLayout>
</template>