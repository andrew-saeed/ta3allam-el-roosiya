<script setup lang="ts">
import Nav from './Nav.vue'
import LangPicker from './LangPicker.vue'
import ModePicker from './ModePicker.vue'
</script>

<template>

    <header class="md:sticky top-0 left-0 w-full md:h-svh md:flex md:items-center">
        <div class="header__box w-full px-4 max-md:py-12">
            <section class="text-center capitalize space-y-12">
                <div class="ctrls flex justify-between">
                    <LangPicker />
                    <ModePicker />
                </div>
                <img class="w-40 h-40 mx-auto" src="/logo.png" alt="">
                <div class="hero">
                    <p class="text-xlarge leading-xlarge text-primary-400 font-bold">{{ $t('message.header.title') }}</p>
                    <p class="text-medium leading-medium mt-6">{{ $t('message.header.description') }}</p>
                </div>
            </section>
            <div class="mt-12">
                <Nav />
            </div>
        </div>
    </header>

</template>