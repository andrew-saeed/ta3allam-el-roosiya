<script setup lang="ts">
import PageLayout from '@/layouts/PageLayout.vue'
</script>

<template>
  <PageLayout :title="$t('message.pages.home.title')" class="h-full grid gap-4 grid-rows-[min-content_1fr] px-4">
    <section class="h-full flex flex-col gap-4 text-base-1">
      <div class="space-y-2">
        <p>{{ $t('message.pages.home.description') }}</p>
        <p>{{ $t('message.pages.home.target') }}</p>
        <p>{{ $t('message.pages.home.feedback') }}</p>
      </div>
      <div class="hello-box grow"></div>
    </section>
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
