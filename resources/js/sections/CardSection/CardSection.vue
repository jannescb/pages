<template>
    <div class="col-span-1 p-4 rounded shadow bg-green">
        <input type="text" v-model="element.attributes.title" />
        <input type="text" v-model="element.attributes.body" />
    </div>
</template>
<script setup lang="ts">
import { defineSection } from '@aw-studio/pages';

defineProps({
    as: {
        type: Object,
        required: true,
    },
    element: {
        type: Object,
        required: true,
    },
    section: {
        type: Object,
        default: () =>
            defineSection({
                key: 'CardSection',
                attributes: {
                    title: null,
                    body: null,
                },
            }),
    },
});
</script>
