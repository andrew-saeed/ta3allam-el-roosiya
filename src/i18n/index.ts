import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'ar',
    fallbackLocale: 'en',
    messages: {
        ar: {
            message: {
                'learnRussianTitle': 'تعلم الروسية',
                'learnRussianDescription': 'تعلم اللغة الروسية من خلال مجموعة متنوعة من الدروس و التدريبات',
                'nav': {
                    'start': 'ابدأ',
                    'hello': 'مرحباً'
                },
                'pages': {
                    'start': {
                        'title': 'الدروس'
                    },
                    'home': {
                        'title': 'عن التطبيق'
                    }
                }
            }
        },
        en: {
            message: {
                'learnRussianTitle': 'learn russian',
                'learnRussianDescription': 'Learn Russian with a Variety of Lessons and Exercises',
                'nav': {
                    'start': 'start',
                    'hello': 'hello'
                },
                'pages': {
                    'start': {
                        'title': 'lessons'
                    },
                    'home': {
                        'title': 'about the app'
                    }
                }
            }
        }
    }
})

export default i18n