<script setup lang="ts">
import { useRouter } from 'vue-router'

import useAlphabetStore from '@/stores/alphabet'

import { useAudio } from '@/composables/useAudio'

const rouer = useRouter()
const { data } = useAlphabetStore()
const { playSound } = useAudio()
</script>
<template>
    <PageLayout :title="$t('message.pages.alphabet.title')">
        <p class="sticky top-3 left-0 flex justify-center pb-4">
            <IconTextBtn :text="$t('message.pages.alphabet.btns.ready_for_a_quiz')" class="medium" @click="rouer.push({path:'/alphabet/quiz', hash:'#page__header'})">
                <Quiz/>
            </IconTextBtn>
        </p>
        <ul id="lessons-list" class="grid gap-8 md:px-2 py-8 space-y-10 overflow-auto">
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