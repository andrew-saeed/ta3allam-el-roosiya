import { defineStore } from 'pinia'

const useAlphabetStore = defineStore('alphabet', () => {

    const data = [
        {id:1, c: 'А', s: 'а', sound: 'a.mp3', examples: [
            {id: 'арбуз', word: 'watermelon', sound: 'Арбуз.mp3', targetChar: 'А'}
        ]},
        {id:2, c: 'Б', s: 'б', sound: 'be.mp3', examples: [
            {id: 'банан', word: 'banana', sound: 'банан.mp3', targetChar: 'Б'}
        ]},
        {id:3, c: 'В', s: 'в', sound: 'we.mp3', examples: [
            {id: 'ветер', word: 'wind', sound: 'ветер.mp3', targetChar: 'В'}
        ]},
        {id:4, c: 'Г', s: 'г', sound: 'ge.mp3', examples: [
            {id: 'город', word: 'city', sound: 'город.mp3', targetChar: 'Г'}
        ]},
        {id:5, c: 'Д', s: 'д', sound: 'de.mp3', examples: [
            {id: 'дом', word: 'house', sound: 'дом.mp3', targetChar: 'Д'}
        ]},
        {id:6, c: 'Е', s: 'е', sound: 'je.mp3', examples: [
            {id: 'еда', word: 'food', sound: 'еда.mp3', targetChar: 'Е'}
        ]},
        {id:7, c: 'Ё', s: 'ё', sound: 'jo.mp3', examples: [
            {id: 'ёж', word: 'hedgehog', sound: 'еж.mp3', targetChar: 'Ё'}
        ]},
        {id:8, c: 'Ж', s: 'ж', sound: 'sche.mp3', examples: [
            {id: 'жирафа', word: 'Giraffe', sound: 'Жирафа.mp3', targetChar: 'Ж'}
        ]},
        {id:9, c: 'З', s: 'з', sound: 'se.mp3', examples: [
            {id: 'земля', word: 'land', sound: 'земля.mp3', targetChar: 'З'}
        ]},
        {id:10, c: 'И', s: 'и', sound: 'i.mp3', examples: [
            {id: 'игра', word: 'game', sound: 'игра.mp3', targetChar: 'И'}
        ]},
        {id:11, c: 'Й', s: 'й', sound: 'i-kratkaje.mp3', examples: [
            {id: 'йогурт', word: 'yogurt', sound: 'йогурт.mp3', targetChar: 'Й'}
        ]},
        {id:12, c: 'К', s: 'к', sound: 'ka.mp3', examples: [
            {id: 'картошка', word: 'potato', sound: 'картошка.mp3', targetChar: 'К'}
        ]},
        {id:13, c: 'Л', s: 'л', sound: 'el.mp3', examples: [
            {id: 'лимон', word: 'lemon', sound: 'Лимон.mp3', targetChar: 'Л'}
        ]},
        {id:14, c: 'М', s: 'м', sound: 'em.mp3', examples: [
            {id: 'машина', word: 'car', sound: 'машина.mp3', targetChar: 'М'}
        ]},
        {id:15, c: 'Н', s: 'н', sound: 'en.mp3', examples: [
            {id: 'нос', word: 'nose', sound: 'нос.mp3', targetChar: 'Н'}
        ]},
        {id:16, c: 'О', s: 'о', sound: 'o.mp3', examples: [
            {id: 'огурец', word: 'cucumber', sound: 'огурец.mp3', targetChar: 'О'}
        ]},
        {id:17, c: 'П', s: 'п', sound: 'pe.mp3', examples: [
            {id: 'помидор', word: 'tomatoes', sound: 'помидор.mp3', targetChar: 'П'}
        ]},
        {id:18, c: 'Р', s: 'р', sound: 'er.mp3', examples: [
            {id: 'роза', word: 'rose', sound: 'роза.mp3', targetChar: 'Р'}
        ]},
        {id:19, c: 'С', s: 'с', sound: 'es.mp3', examples: [
            {id: 'стол', word: 'table', sound: 'стол.mp3', targetChar: 'С'}
        ]},
        {id:20, c: 'Т', s: 'т', sound: 'te.mp3', examples: [
            {id: 'тетрадъ', word: 'notebook', sound: 'тетрадъ.mp3', targetChar: 'Т'}
        ]},
        {id:21, c: 'У', s: 'у', sound: 'u.mp3', examples: [
            {id: 'учебник', word: 'textbook', sound: 'учебник.mp3', targetChar: 'У'}
        ]},
        {id:22, c: 'Ф', s: 'ф', sound: 'ef.mp3', examples: [
            {id: 'Фильм', word: 'movie', sound: 'Фильм.mp3', targetChar: 'Ф'}
        ]},
        {id:23, c: 'Х', s: 'х', sound: 'cha.mp3', examples: [
            {id: 'хорошо', word: 'fine', sound: 'Хорошо.mp3', targetChar: 'Х'}
        ]},
        {id:24, c: 'Ц', s: 'ц', sound: 'tse.mp3', examples: [
            {id: 'цена', word: 'price', sound: 'цена.mp3', targetChar: 'Ц'}
        ]},
        {id:25, c: 'Ч', s: 'ч', sound: 'tsche.mp3', examples: [
            {id: 'читать', word: 'read', sound: 'читать.mp3', targetChar: 'Ч'}
        ]},
        {id:26, c: 'Ш', s: 'ш', sound: 'scha.mp3', examples: [
            {id: 'шарик', word: 'ball', sound: 'шарик.mp3', targetChar: 'Ш'}
        ]},
        {id:27, c: 'Щ', s: 'щ', sound: 'schtscha.mp3', examples: [
            {id: 'щетка', word: 'brush', sound: 'щетка.mp3', targetChar: 'Щ'}
        ]},
        {id:28, c: 'Ъ', s: 'ъ', sound: 'twordyj-znak.mp3', examples: [
            {id: 'объем', word: 'volume', sound: 'объем.mp3', targetChar: 'Ъ'}
        ]},
        {id:29, c: 'Ы', s: 'ы', sound: 'y.mp3', examples: [
            {id: 'сыр', word: 'cheese', sound: 'сыр.mp3', targetChar: 'Ы'}
        ]},
        {id:30, c: 'Ь', s: 'ь', sound: 'machkij-znak.mp3', examples: [
            {id: 'кольцо', word: 'ring', sound: 'кольцо.mp3', targetChar: 'Ь'}
        ]},
        {id:31, c: 'Э', s: 'э', sound: 'e.mp3', examples: [
            {id: 'это', word: 'This', sound: 'Это.mp3', targetChar: 'Э'}
        ]},
        {id:32, c: 'Ю', s: 'ю', sound: 'ju.mp3', examples: [
            {id: 'юля', word: 'julia', sound: 'юля.mp3', targetChar: 'Ю'}
        ]},
        {id:33, c: 'Я', s: 'я', sound: 'ja.mp3', examples: [
            {id: 'яблоко', word: 'apple', sound: 'яблоко.mp3', targetChar: 'Я'}
        ]}
    ]

    return { data }
})

export default useAlphabetStore