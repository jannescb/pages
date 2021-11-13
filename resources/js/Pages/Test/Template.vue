<template>
    <div class="grid grid-cols-6">
        <div class="h-screen col-span-2 p-2 overflow-y-scroll bg-white">
            <slot name="debug" />
        </div>
        <div
            class="h-screen col-span-3 px-12 py-2 overflow-y-scroll  bg-primary-50"
        >
            <slot name="content" />
        </div>
        <div
            class="sticky top-0 flex flex-col items-end justify-between h-screen col-span-1 px-8 py-4 bg-white "
        >
            <div class="space-x-2">
                <slot name="actions" />
            </div>
            <div class="flex items-center flex-1 w-full">
                <div class="w-full">
                    <slot name="sidebar" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
//
</script>
