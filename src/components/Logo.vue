<template>
    <div id="logo" class="relative">
        <div class="absolute left-1/2 z-0 w-40 h-40 bg-red-600 dark:bg-primary p-8 -translate-x-1/2 rounded-full"></div>
        <img class="relative z-10 w-40 h-40 mx-auto" src="/logo.png" alt="">
    </div>
</template>

<style lang="scss">
 #logo > div {
    filter: blur(30px);
 }
</style>