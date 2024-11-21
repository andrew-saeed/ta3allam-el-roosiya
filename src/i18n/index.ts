import { createI18n } from 'vue-i18n'

const i18n = createI18n({
    locale: 'ar',
    fallbackLocale: 'en',
    messages: {
        ar: {
            message: {
                'header': {
                    'title': 'تعلم الروسية',
                    'description': 'رحلتك مع اللغة الروسية تبدأ هنا مع مجموعة متنوعة من الدروس والتمارين.'
                },
                'nav': {
                    'lessons': 'ابدأ',
                    'hello': 'مرحباً'
                },
                'pages': {
                    'lessons': {
                        'title': 'الدروس'
                    },
                    'home': {
                        'title': 'عن التطبيق',
                        'description': 'Ta3allam El Roosiya هو تطبيق ويب مفتوح المصدر يهدف إلى مساعدة الجميع (بما فيهم أنا) على تعلم اللغة الروسية وفهم أساسيات اللغة.',
                        'target': 'من خلال مجموعة من التمارين و الدروس احاول ان اجعل التطبيق مفيد لكل الراغبين في تعلم اللغة الروسية.',
                        'feedback': 'ملاحظاتك مهمة جداً'
                    }
                }
            }
        },
        en: {
            message: {
                'header': {
                    'title': 'learn russian',
                    'description': 'your journey with the Russian language begins here with a variety of lessons and exercises.'
                },
                'nav': {
                    'lessons': 'lessons',
                    'hello': 'hello'
                },
                'pages': {
                    'lessons': {
                        'title': 'lessons'
                    },
                    'home': {
                        'title': 'about the app',
                        'description': 'Ta3allam El Roosiya is an open source web application that aims to help everyone (including me) learn Russian and understand the basics of the language.',
                        'target': 'Through a set of exercises and lessons, I try to make the application useful for all those who wish to learn the Russian language.',
                        'feedback': 'Your feedback is much appreciated!'
                    }
                }
            }
        }
    }
})

export default i18n