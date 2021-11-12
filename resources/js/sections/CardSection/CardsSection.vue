<template>
    <div class="p-4 bg-white rounded shadow">
        Cards Section
        <Sections
            v-model="element.sections"
            :section="element"
            :group="element.uuid"
        />
        <pre>{{ element.sections }}</pre>

        <Cabinet class="w-full col-span-1 space-y-2" :group="element.uuid">
            <Drawer class="px-6 py-4 bg-gray-100 rounded" :as="CardSection">
                Add Card
            </Drawer>
        </Cabinet>
    </div>
</template>
<script setup lang="ts">
import CardSection from './CardSection.vue';
import { defineSection, Sections, Cabinet, Drawer } from '@aw-studio/pages';

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
                key: 'CardsSection',
                sections: [],
                children: ['CardSection'],
            }),
    },
});
</script>
