<template>
    <div>
        <input type="text" v-model="element.attributes.foo" />

        <Sections v-model="element.sections" :section="element" />
    </div>
</template>
<script setup lang="ts">
import TextSection from './TextSection.vue';
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
                key: 'TextSection',
                attributes: {
                    foo: 'Bar',
                },
                sections: [],
                children: ['TextSection'],
            }),
    },
});
</script>
