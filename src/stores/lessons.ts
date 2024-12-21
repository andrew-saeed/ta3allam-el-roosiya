import { defineStore } from 'pinia'

const useLessonsStore = defineStore('lessons', () => {

    const data = [
        {id: 1, title: 'alphabet', slug: 'alphabet',  available: true},
        {id: 2, title: 'basic russian', slug: 'basic-russian', available: false},
        {id: 3, title: 'first nouns', slug: 'first-nouns',available: false},
        {id: 4, title: 'russian culture ethics', slug: 'russian-culture-ethics',available: false},
        {id: 5, title: 'numbers', slug: 'numbers',available: false},
        {id: 6, title: 'days, months and dates', slug: 'days-months-dates',available: false},
        {id: 7, title: 'family', slug: 'family',available: false},
        {id: 8, title: 'professions or occupations', slug: 'professions-or-occupations',available: false},
        {id: 9, title: 'countries, capitals, inhabitants', slug: 'countries-capitals-inhabitants',available: false},
        {id: 10, title: 'conjugation rules + useful verbs', slug: 'conjugation-rules-useful-verbs',available: false},
        {id: 11, title: 'colors', slug: 'colors',available: false},
        {id: 12, title: 'kitchen + food', slug: 'kitchen-food',available: false},
        {id: 13, title: 'time', slug: 'time',available: false},
        {id: 14, title: 'movie night', slug: 'movie-night',available: false},
        {id: 15, title: 'sports', slug: 'sports',available: false},
        {id: 16, title: 'cases', slug: 'cases',available: false},
        {id: 17, title: 'prepositions + adjectives', slug: 'prepositions-adjectives',available: false},
        {id: 18, title: 'in the city', slug: 'in-the-city',available: false},
        {id: 19, title: 'travel', slug: 'travel',available: false},
    ]

    return { data }
})

export default useLessonsStore