<template>
    <div class="p-4 rounded shadow bg-green">
        Card
        <Sections
            v-model="element.sections"
            :section="element"
            :group="element.uuid"
        />
    </div>
</template>
<script setup lang="ts">
import { defineSection, Sections } from '@aw-studio/pages';

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
                attributes: { fo: 'bar' },
            }),
    },
});
</script>
