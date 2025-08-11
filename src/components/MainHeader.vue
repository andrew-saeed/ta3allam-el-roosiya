<script setup lang="ts">
import Nav from './Nav.vue'
import LangPicker from './LangPicker.vue'
import ModePicker from './ModePicker.vue'
import Logo from './Logo.vue'
import AppHeader from './AppHeader.vue'
</script>

<template>

    <header class="md:sticky top-0 left-0 w-full md:h-svh md:flex md:items-center">
        <div class="header__box w-full px-4 max-md:py-12">
            <section class="text-center space-y-12">
                <div class="ctrls flex justify-between">
                    <LangPicker />
                    <ModePicker />
                </div>
                <Logo />                
                <div class="hero">
                    <AppHeader />
                    <p class="text-base-1">{{ $t('message.header.description') }}</p>
                </div>
            </section>
            <div class="mt-6">
                <Nav />
            </div>
        </div>
    </header>

</template>