<script setup>
import { onMounted } from 'vue'

import PageLayout from '@/layouts/PageLayout.vue'

import IconBtn from '@/components/IconBtn.vue'
import Speaker from '@/components/icons/Speaker.vue'
import TargetWordChar from '@/components/TargetWordChar.vue'

const alphabet = [
    {id:1, c: 'А', s: 'а', sound: 'a.mp3', like: '', examples: [
        {id: 'арбуз', word: 'watermelon', sound: 'Арбуз.mp3', targetChar: 'А'}
    ]},
    {id:2, c: 'Б', s: 'б', sound: 'be.mp3', like: '', examples: [
        {id: 'банан', word: 'banana', sound: 'банан.mp3', targetChar: 'Б'}
    ]},
    {id:3, c: 'В', s: 'в', sound: 'we.mp3', like: '', examples: [
        {id: 'ветер', word: 'wind', sound: 'ветер.mp3', targetChar: 'В'}
    ]},
    {id:4, c: 'Г', s: 'г', sound: 'ge.mp3', like: '', examples: [
        {id: 'город', word: 'city', sound: 'город.mp3', targetChar: 'Г'}
    ]},
    {id:5, c: 'Д', s: 'д', sound: 'de.mp3', like: '', examples: [
        {id: 'дом', word: 'house', sound: 'дом.mp3', targetChar: 'Д'}
    ]},
    {id:6, c: 'Е', s: 'е', sound: 'je.mp3', like: '', examples: [
        {id: 'еда', word: 'food', sound: 'еда.mp3', targetChar: 'Е'}
    ]},
    {id:7, c: 'Ё', s: 'ё', sound: 'jo.mp3', like: '', examples: [
        {id: 'ёж', word: 'hedgehog', sound: 'еж.mp3', targetChar: 'Ё'}
    ]},
    {id:8, c: 'Ж', s: 'ж', sound: 'sche.mp3', like: '', examples: [
        {id: 'жирафа', word: 'Giraffe', sound: 'Жирафа.mp3', targetChar: 'Ж'}
    ]},
    {id:9, c: 'З', s: 'з', sound: 'se.mp3', like: '', examples: [
        {id: 'земля', word: 'land', sound: 'земля.mp3', targetChar: 'З'}
    ]},
    {id:10, c: 'И', s: 'и', sound: 'i.mp3', like: '', examples: [
        {id: 'игра', word: 'game', sound: 'игра.mp3', targetChar: 'И'}
    ]},
    {id:11, c: 'Й', s: 'й', sound: 'i-kratkaje.mp3', like: '', examples: [
        {id: 'йогурт', word: 'yogurt', sound: 'йогурт.mp3', targetChar: 'Й'}
    ]},
    {id:12, c: 'К', s: 'к', sound: 'ka.mp3', like: '', examples: [
        {id: 'картошка', word: 'potato', sound: 'картошка.mp3', targetChar: 'К'}
    ]},
    {id:13, c: 'Л', s: 'л', sound: 'el.mp3', like: '', examples: [
        {id: 'лимон', word: 'lemon', sound: 'Лимон.mp3', targetChar: 'Л'}
    ]},
    {id:14, c: 'М', s: 'м', sound: 'em.mp3', like: '', examples: [
        {id: 'машина', word: 'car', sound: 'машина.mp3', targetChar: 'М'}
    ]},
    {id:15, c: 'Н', s: 'н', sound: 'en.mp3', like: '', examples: [
        {id: 'нос', word: 'nose', sound: 'нос.mp3', targetChar: 'Н'}
    ]},
    {id:16, c: 'О', s: 'о', sound: 'o.mp3', like: '', examples: [
        {id: 'огурец', word: 'cucumber', sound: 'огурец.mp3', targetChar: 'О'}
    ]},
    {id:17, c: 'П', s: 'п', sound: 'pe.mp3', like: '', examples: [
        {id: 'помидор', word: 'tomatoes', sound: 'помидор.mp3', targetChar: 'П'}
    ]},
    {id:18, c: 'Р', s: 'р', sound: 'er.mp3', like: '', examples: [
        {id: 'роза', word: 'rose', sound: 'роза.mp3', targetChar: 'Р'}
    ]},
    {id:19, c: 'С', s: 'с', sound: 'es.mp3', like: '', examples: [
        {id: 'стол', word: 'table', sound: 'стол.mp3', targetChar: 'С'}
    ]},
    {id:20, c: 'Т', s: 'т', sound: 'te.mp3', like: '', examples: [
        {id: 'тетрадъ', word: 'notebook', sound: 'тетрадъ.mp3', targetChar: 'Т'}
    ]},
    {id:21, c: 'У', s: 'у', sound: 'u.mp3', like: '', examples: [
        {id: 'учебник', word: 'textbook', sound: 'учебник.mp3', targetChar: 'У'}
    ]},
    {id:22, c: 'Ф', s: 'ф', sound: 'ef.mp3', like: '', examples: [
        {id: 'Фильм', word: 'movie', sound: 'Фильм.mp3', targetChar: 'Ф'}
    ]},
    {id:23, c: 'Х', s: 'х', sound: 'cha.mp3', like: '', examples: [
        {id: 'хорошо', word: 'fine', sound: 'Хорошо.mp3', targetChar: 'Х'}
    ]},
    {id:24, c: 'Ц', s: 'ц', sound: 'tse.mp3', like: '', examples: [
        {id: 'цена', word: 'price', sound: 'цена.mp3', targetChar: 'Ц'}
    ]},
    {id:25, c: 'Ч', s: 'ч', sound: 'sche.mp3', like: '', examples: [
        {id: 'читать', word: 'read', sound: 'читать.mp3', targetChar: 'Ч'}
    ]},
    {id:26, c: 'Ш', s: 'ш', sound: 'scha.mp3', like: '', examples: [
        {id: 'шарик', word: 'ball', sound: 'шарик.mp3', targetChar: 'Ш'}
    ]},
    {id:27, c: 'Щ', s: 'щ', sound: 'schtscha.mp3', like: '', examples: [
        {id: 'щетка', word: 'brush', sound: 'щетка.mp3', targetChar: 'Щ'}
    ]},
    {id:28, c: 'Ъ', s: 'ъ', sound: 'twordyj-znak.mp3', like: '', examples: [
        {id: 'объем', word: 'volume', sound: 'объем.mp3', targetChar: 'Ъ'}
    ]},
    {id:29, c: 'Ы', s: 'ы', sound: 'y.mp3', like: '', examples: [
        {id: 'сыр', word: 'cheese', sound: 'сыр.mp3', targetChar: 'Ы'}
    ]},
    {id:30, c: 'Ь', s: 'ь', sound: 'machkij-znak.mp3', like: '', examples: [
        {id: 'кольцо', word: 'ring', sound: 'кольцо.mp3', targetChar: 'Ь'}
    ]},
    {id:31, c: 'Э', s: 'э', sound: 'e.mp3', like: '', examples: [
        {id: 'это', word: 'This', sound: 'Это.mp3', targetChar: 'Э'}
    ]},
    {id:32, c: 'Ю', s: 'ю', sound: 'ju.mp3', like: '', examples: [
        {id: 'юля', word: 'julia', sound: 'юля.mp3', targetChar: 'Ю'}
    ]},
    {id:33, c: 'Я', s: 'я', sound: 'ja.mp3', like: '', examples: [
        {id: 'яблоко', word: 'apple', sound: 'яблоко.mp3', targetChar: 'Я'}
    ]}
]

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
    <PageLayout :title="$t('message.pages.alphabet.title')" class="h-full grid grid-rows-[min-content_1fr]">
        <div class="h-full relative overflow-auto">
            <ul class="w-full md:absolute top-0 left-0 grid gap-8 md:px-2 py-8 space-y-10">
                <li v-for="char in alphabet" class="text-medium-1">
                    <div class="">
                        <div class="flex gap-4">
                            <h2 class="font-bold">{{ char.c }} {{ char.s }}</h2>
                            <p>
                                <IconBtn @click="playSound(char.sound)">
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
                                    <IconBtn @click="playSound(example.sound)">
                                        <Speaker />
                                    </IconBtn>
                                </p>
                            </div>
                            <p class="capitalize">{{ $t(`message.dictionary['${example.id}']`) }}</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </PageLayout>
</template>