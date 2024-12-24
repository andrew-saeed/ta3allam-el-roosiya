<script setup>
import { onMounted, ref } from 'vue'

import PageLayout from '@/layouts/PageLayout.vue'

import IconBtn from '@/components/IconBtn.vue'
import Speaker from '@/components/icons/Speaker.vue'
import X from '@/components/icons/X.vue'
import Check from '@/components/icons/Check.vue'
import Refresh from '@/components/icons/Refresh.vue'

import useAlphabetStore from '@/stores/alphabet'

import { useShuffleArr } from '@/composables/useShuffleArr'
import { useAudio } from '@/composables/useAudio'

const { data } = useAlphabetStore()
const { arr, shuffle } = useShuffleArr([...data])
const { playSound } = useAudio()
const quiz = ref([])

onMounted(() => { generateQuiz() })

const generateQuiz = ()  => {

    shuffle()

    quiz.value = arr.slice(0, 10).map((item) => {

        shuffle()

        const randomAnswers = arr.slice(0, 4)

        const duplicateAnswer = randomAnswers.find(answer => answer.id === item.id)
        if(!duplicateAnswer) {
            const correctAnswerIndex = Math.floor(Math.random() * 4)
            randomAnswers[correctAnswerIndex] = item 
        }

        return {
            answered: false,
            correctAnswer: item.id,
            sound: item.sound,
            answers: randomAnswers
        }
    })
}


</script>

<template>
    <PageLayout title="alphabet quiz" class="grid grid-rows-[min-content_1fr]">
        <div class="h-full flex justify-center items-center">
            <ul class="relative w-full">
                <li class="sticky top-0 left-0 z-20 flex justify-end pt-8">
                    <IconBtn class="small mx-4" @click="generateQuiz()">
                        <Refresh />
                    </IconBtn>
                </li>
                <li 
                    v-for="question in quiz" 
                    class="relative grid grid-cols-[min-content_min-content] justify-center gap-4 my-8 py-8" 
                    :key="question.id"
                >
                    <p class="relative z-20">
                        <IconBtn class="big" @click="playSound(question.sound)">
                            <Speaker />
                        </IconBtn>
                    </p>
                    <ul class="flex flex-col gap-4 pt-8">
                        <li
                            v-for="answer in question.answers"
                            :class="[{'z-20 border-surface-50': question.answered && answer.id == question.correctAnswer}, 'relative bg-primary-600 text-large p-8 border-4 border-primary-600 hover:border-surface-50 rounded-full cursor-pointer transition']" 
                            @click="question.answered = true"
                        >
                            <span class="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">{{ answer.c }}</span>
                            <span v-show="question.answered && answer.id === question.correctAnswer" class="absolute top-0 left-full w-[2rem] h-[2rem]">
                                <Check />
                            </span>
                            <span v-show="question.answered && answer.id !== question.correctAnswer" class="absolute top-0 left-full w-[1.5rem] h-[1.5rem]">
                                <X />
                            </span>
                        </li>
                        <li :class="[{'!visible !opacity-60': question.answered}, 'invisible absolute top-0 left-0 z-10 w-full h-full bg-black rounded-lg opacity-0 transition duration-300']"></li>
                    </ul>
                </li>
            </ul>
        </div>
    </PageLayout>
</template>