<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<template>
<button class="flex items-center gap-2 bg-red-400 hover:bg-red-600 px-4 py-2 rounded-md transition">
    <span class="svg-box">
        <slot />
    </span>
    <span class="btn-txt font-bold capitalize">{{ text }}</span>
</button>
</template>

<style lang="scss" scoped> 
    button {

        &.medium {
            .svg-box {
                max-width: 1.5rem;
                max-height: 1.5rem;
            }
            .btn-txt {
                font-size: var(--text-base-2);
                line-height: var(--text-base-2--line-height);
            }
        }
    }
</style>