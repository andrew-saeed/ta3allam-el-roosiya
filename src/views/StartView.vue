<script setup lang="ts">
import { useRouter } from 'vue-router';

import PageLayout from '@/layouts/PageLayout.vue'

import useLessonsStore from '@/stores/lessons'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const { lessons } = useLessonsStore()
const { toggleAppContentExpand } = useAppStore()

const openLesson = (slug:string) => {
  toggleAppContentExpand()
  router.push({name: slug})
}
</script>

<template>

  <PageLayout :title="$t('message.pages.start.title')" class="h-full grid grid-rows-[min-content_1fr]">
    <div class="h-full relative overflow-auto">
      <ul class="w-full md:absolute top-0 left-0 grid gap-8 md:px-2 py-8">
        <li v-for="lesson in lessons" class="h-full flex gap-2 bg-primary-400 text-medium font-bold capitalize p-2 rounded-md" @click="openLesson(lesson.slug)">
          <span>{{ lesson.id }}.</span>
          <span>{{ lesson.title }}</span>
        </li>
      </ul>
    </div>
  </PageLayout>

</template>