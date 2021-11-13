<template>
    <SectionWrapper>
        <input type="text" v-model="element.attributes.foo.value" />
        <input type="text" v-model="element.attributes.boom" />

        <hr />
        <Sections
            v-model="element.sections"
            :section="element"
            :group="element.uuid"
        />

        <Cabinet class="w-full col-span-1 space-y-2" :group="element.uuid">
            <Drawer class="px-6 py-4 bg-gray-100 rounded" :as="TextSection">
                Add Card
            </Drawer>
        </Cabinet>
    </SectionWrapper>
</template>
<script setup lang="ts">
import TextSection from './TextSection.vue';
import { defineSection, Cabinet, Drawer, Sections } from '@aw-studio/pages';
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
                key: 'TextSection',
                attributes: {
                    foo: {
                        value: 'bar',
                        relation: 'Baz',
                    },
                    boom: null,
                },
                sections: [],
                children: ['TextSection'],
            }),
    },
});
</script>
