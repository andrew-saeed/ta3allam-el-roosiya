<template>
  <PageLayout :title="$t('message.pages.home.title')" class="h-full grid gap-4 grid-rows-[min-content_1fr] px-4 safari-fix-h-full">
    <section class="h-full flex flex-col gap-4 text-base-1 leading-medium">
      <div class="space-y-2">
        <div>
          <i18n-t keypath="message.pages.home.description" scope="global">
            <template #opensource>
              <div class="inline-block">
                <a href="https://github.com/andrew-saeed/ta3allam-el-roosiya" class="flex gap-2 items-center text-primary-400 font-bold capitalize underline underline-offset-4">
                  <span>{{ $t('message.pages.home.open_source') }}</span>
                  <Github class="w-6 h-6 grow-0"/>
                </a>
              </div>
            </template>
            <template #about>
              <a href="https://andrewsaeed.dev" class="text-primary-400 font-bold capitalize underline underline-offset-4">
                <span>{{ $t('message.pages.home.about_me') }} 👋</span>
              </a>
            </template>
          </i18n-t>
        </div>
        <div>{{ $t('message.pages.home.target') }}</div>
        <div>{{ $t('message.pages.home.feedback') }}</div>
      </div>
      <div class="hello-box grow"></div>
    </section>
  </PageLayout>
</template>

<style lang="scss">
.hello-box {
  background-image: url('/hello.png');
  background-size: contain;
  background-position: top;
  background-repeat: no-repeat;
}
</style>
