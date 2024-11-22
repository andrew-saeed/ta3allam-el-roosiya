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
                    'lessons': 'الدروس',
                    'hello': 'مرحباً'
                },
                'pages': {
                    'lessons': {
                        'title': 'الدروس',
                        'list': {
                            '1': 'الأبجدية',
                            '2': 'الروسية الأساسية',
                            '3': 'أول الأسماء',
                            '4': 'أخلاقيات الثقافة الروسية',
                            '5': 'الأرقام',
                            '6': 'الأيام، الأشهر والتواريخ',
                            '7': 'العائلة',
                            '8': 'المهن أو الوظائف',
                            '9': 'الدول، العواصم، السكان',
                            '10': 'قواعد التصريف + الأفعال المفيدة',
                            '11': 'الألوان',
                            '12': 'المطبخ + الطعام',
                            '13': 'الوقت',
                            '14': 'ليلة الأفلام',
                            '15': 'الرياضة',
                            '16': 'الحالات',
                            '17': 'حروف الجر + الصفات',
                            '18': 'في المدينة',
                            '19': 'السفر'
                        }
                    },
                    'alphabet': {
                        'title': 'الأبجدية'
                    },
                    'home': {
                        'title': 'عن التطبيق',
                        'description': 'Ta3allam El Roosiya هو تطبيق ويب مفتوح المصدر يهدف إلى مساعدة الجميع (بما فيهم أنا) على تعلم اللغة الروسية وفهم أساسيات اللغة.',
                        'target': 'من خلال مجموعة من التمارين و الدروس احاول ان اجعل التطبيق مفيد لكل الراغبين في تعلم اللغة الروسية.',
                        'feedback': 'ملاحظاتك مهمة جداً'
                    }
                },
                'dictionary': {
                    'арбуз': 'بطيخ',
                    'банан': 'موز',
                    'ветер': 'رياح',
                    'город': 'مدينة',
                    'дом': 'منزل',
                    'еда': 'طعام',
                    'ёж': 'القنفذ',
                    'жирафа': 'زرافة',
                    'земля': 'أرض',
                    'игра': 'لعبة',
                    'йогурт': 'زبادي',
                    'картошка': 'البطاطس',
                    'лимон': 'ليمون',
                    'машина': 'سيارة',
                    'нос': 'أنف',
                    'огурец': 'خيار',
                    'помидор': 'طماطم',
                    'роза': 'وَردَة',
                    'стол': 'طاولة',
                    'тетрадъ': 'دفتر',
                    'учебник': 'كتاب مدرسي',
                    'Фильм': 'فيلم',
                    'хорошо': 'بخير',
                    'цена': 'سعر',
                    'читать': 'يقرأ',
                    'шарик': 'كرة',
                    'щетка': 'فرشاة',
                    'объем': 'حجم',
                    'сыр': 'جبن',
                    'кольцо': 'جرس',
                    'это': 'هذا',
                    'юля': 'جوليا',
                    'яблоко': 'تفاحة'
                },
                'examples': {
                    'alphabet': {
                        'а': 'أَ - أَب',
                        'б': 'ب - بَاب',
                        'в': 'ڤ - ڤِيزَا',
                        'г': 'غ - خفيفة قريبة من د - غَابَة',
                        'д': 'د - دَار',
                        'е': 'يِ - يَد',
                        'ё': 'يُ - يُوسُف',
                        'ж': 'ج - جَمَل',
                        'з': 'ز - زَهْرَة',
                        'и': 'إِ - كسرة - عِيد',
                        'й': 'ي - بَيْت',
                        'к': 'ك - كِتَاب',
                        'л': 'ل - لَيْل',
                        'м': 'م - مَاء',
                        'н': 'ن - نُور',
                        'о': 'أُ - أُم',
                        'п': 'پ - پَارِيس',
                        'р': 'ر - رَجُل',
                        'с': 'س - سَلَام',
                        'т': 'ت - تَمْر',
                        'у': 'و - نُور',
                        'ф': 'ف - فِيل',
                        'х': 'خ - خُبْز',
                        'ц': 'تس - تسلسل',
                        'ч': 'تش - تشكرات',
                        'ш': 'ش - شَمْس',
                        'щ': 'شّ - شَّاي',
                        'ъ': '---',
                        'ы': 'إِإِإِ',
                        'ь': '---',
                        'э': 'أَ - أَمِير',
                        'ю': 'يو - يُوسُف',
                        'я': 'يا - يَاسْمِين'
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
                        'title': 'lessons',
                        'list': {
                            '1': 'alphabet',
                            '2': 'basic russian',
                            '3': 'first nouns',
                            '4': 'russian culture ethics',
                            '5': 'numbers',
                            '6': 'days, months and dates',
                            '7': 'family',
                            '8': 'professions or occupations',
                            '9': 'countries, capitals, inhabitants',
                            '10': 'conjugation rules + useful verbs',
                            '11': 'colors',
                            '12': 'kitchen + food',
                            '13': 'time',
                            '14': 'movie night',
                            '15': 'sports',
                            '16': 'cases',
                            '17': 'prepositions + adjectives',
                            '18': 'in the city',
                            '19': 'travel'
                        }
                    },
                    'alphabet': {
                        'title': 'alphabet'
                    },
                    'home': {
                        'title': 'about the app',
                        'description': 'Ta3allam El Roosiya is an open source web application that aims to help everyone (including me) learn Russian and understand the basics of the language.',
                        'target': 'Through a set of exercises and lessons, I try to make the application useful for all those who wish to learn the Russian language.',
                        'feedback': 'Your feedback is much appreciated!'
                    }
                },
                'dictionary': {
                    'арбуз': 'watermelon',
                    'банан': 'banana',
                    'ветер': 'wind',
                    'город': 'city',
                    'дом': 'house',
                    'еда': 'food',
                    'ёж': 'Hedgehog',
                    'жирафа': 'giraffe',
                    'земля': 'land',
                    'игра': 'game',
                    'йогурт': 'yogurt',
                    'картошка': 'potato',
                    'лимон': 'lemon',
                    'машина': 'car',
                    'нос': 'nose',
                    'огурец': 'cucumber',
                    'помидор': 'tomatoes',
                    'роза': 'rose',
                    'стол': 'table',
                    'тетрадъ': 'notebook',
                    'учебник': 'school book',
                    'Фильм': 'film',
                    'хорошо': 'fine',
                    'цена': 'price',
                    'читать': 'reads',
                    'шарик': 'ball',
                    'щетка': 'brush',
                    'объем': 'size',
                    'сыр': 'cheese',
                    'кольцо': 'ring',
                    'это': 'this',
                    'юля': 'julia',
                    'яблоко': 'apple'
                },
                'examples': {
                    'alphabet': {
                        'а': 'a in "**f**ather"',
                        'б': 'b in "**b**ook"',
                        'в': 'v in "**v**ery"',
                        'г': 'g in "**g**oat"',
                        'д': 'd in "**d**oor"',
                        'е': 'ye in "**ye**s"',
                        'ё': 'yo in "**yo**ga"',
                        'ж': 'j in "plea**s**ure"',
                        'з': 'z in "**z**ebra"',
                        'и': 'ee in "m**ee**t"',
                        'й': 'y in "bo**y**"',
                        'к': 'k in "**k**ing"',
                        'л': 'l in "**l**amp"',
                        'м': 'm in "**m**other"',
                        'н': 'n in "**n**ight"',
                        'о': 'o in "m**o**re"',
                        'п': 'p in "**p**en"',
                        'р': 'Rolled like Spanish in "rrrr"',
                        'с': 's in **s**un',
                        'т': 't in "**t**able"',
                        'у': 'oo in "m**oo**n"',
                        'ф': 'f in "**f**ish"',
                        'х': 'kh in "خُبْز"',
                        'ц': 'ts in "bi**ts**"',
                        'ч': 'ch in "**ch**air"',
                        'ш': 'sh in "**sh**ip"',
                        'щ': 'longer sh in "fre**sh**"',
                        'ъ': 'Hard sign',
                        'ы': 'eee in "ros**e**s"',
                        'ь': 'Soft sign',
                        'э': 'e in "b**e**d"',
                        'ю': 'you in "**you**"',
                        'я': 'ya in "**ya**rd"'
                    }
                }
            }
        }
    }
})

export default i18n