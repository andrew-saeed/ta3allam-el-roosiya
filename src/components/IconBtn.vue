<template>
    <button type="button" class="bg-primary-400 hover:bg-primary-600 rounded-full transition">
        <slot />
    </button>
</template>

<style lang="scss" scoped>
    button {
        padding: 4px;

        &.small {
            width: 2.5rem;
            height: 2.5rem;
        }
        &.medium {
            width: 3.25rem;
            height: 3.25rem;
        }
        &.big {
            width: 5rem;
            height: 5rem;
        }
    }
</style>