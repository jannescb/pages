<template>
    <SectionWrapper modal title="Cards Section">
        <template v-slot:modal>
            <div class="grid grid-cols-3 gap-2 p-2 bg-primary-50">
                <Sections
                    v-model="element.sections"
                    :section="element"
                    :group="element.uuid"
                />
            </div>
            <Cabinet class="w-full col-span-1 space-y-2" :group="element.uuid">
                <Drawer class="px-6 py-4 bg-gray-100 rounded" :as="CardSection">
                    Add Card
                </Drawer>
            </Cabinet>
        </template>
    </SectionWrapper>
</template>
<script setup lang="ts">
import CardSection from './CardSection.vue';
import { defineSection, Sections, Cabinet, Drawer } from '@aw-studio/pages';
import SectionWrapper from '@/components/SectionWrapper.vue';

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
