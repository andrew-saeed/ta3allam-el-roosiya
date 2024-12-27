<template>
    <p class="text-xlarge leading-xlarge text-primary-400 font-bold">{{ $t('message.header.title') }}</p>
</template>

<style lang="scss" scoped>
    .dark p {
        background: linear-gradient(90deg, var(--p-primary-500) 10%, rgba(221,11,11,1) 100%);
        background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>