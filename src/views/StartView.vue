<script setup lang="ts">
import { useRouter } from 'vue-router'

import PageLayout from '@/layouts/PageLayout.vue'

import useLessonsStore from '@/stores/lessons'
import type { lessonsListItem } from '@/stores/lessons'

const router = useRouter()
const { data } = useLessonsStore()

const openLesson = (lesson:lessonsListItem) => {
  if(!lesson.available) return

  router.push({path: `${lesson.slug}`})
}
</script>

<template>

  <PageLayout>
    <ul class="w-full grid gap-8 pb-8">
      <li 
        v-for="lesson in data" 
        :class="[
          'h-full text-medium font-bold capitalize p-2 rounded-md opacity-50 transition', 
          {'bg-primary-400 cursor-pointer hover:bg-primary-600 !opacity-100': lesson.available}
        ]" 
        @click="openLesson(lesson)"
      >
        <p class="flex gap-2">
          <span>{{ lesson.id }}.</span>
          <span>{{ $t(`message.pages.lessons.list['${lesson.id}']`) }}</span>
        </p>
        <p v-show="!lesson.available" class="inline-block text-sm-1 border border-surface-50 px-1 mt-1 rounded-lg">
          {{ $t('message.pages.lessons.keyWords.comingSoon') }}
        </p>
      </li>
    </ul>
  </PageLayout>

</template>