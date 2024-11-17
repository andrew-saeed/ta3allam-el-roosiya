<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue'
</script>

<template>
  <PageLayout :title="$t('message.pages.home.title')" class="h-full grid gap-4 grid-rows-[min-content_min-content_1fr]">
    <section class="text-base-1 space-y-4">
      <p>{{ $t('message.pages.home.description') }}</p>
      <p>{{ $t('message.pages.home.target') }}</p>
      <p>{{ $t('message.pages.home.feedback') }}</p>
    </section>
    <div class="hello-box"></div>
  </PageLayout>
</template>

<style scoped lang="scss">
.hello-box {
  min-height: 15.625rem;
  background-image: url('/hello.png');
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
