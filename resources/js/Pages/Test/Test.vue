<template>
    <Template>
        <template v-slot:debug>
            <pre class="mb-2">{{ form.content.sections }}</pre>
        </template>
        <template v-slot:content>
            <Sections v-model="form.content.sections" />
        </template>
        <template v-slot:actions>
            <button
                class="px-6 py-2 text-xs text-white bg-black rounded-sm"
                :class="{
                    'bg-opacity-25 pointer-events-none': !form.isDirty,
                }"
                @click="submit()"
            >
                Save Changes
            </button>
        </template>
        <template v-slot:sidebar>
            <Cabinet class="w-full col-span-1 space-y-2">
                <Drawer
                    class="px-6 py-4 bg-gray-100 rounded"
                    :as="CardsSection"
                >
                    Cards
                </Drawer>
                <Drawer class="px-6 py-4 bg-gray-100 rounded" :as="TextSection">
                    <strong>Image</strong>
                    <div
                        class="flex items-center justify-center p-4 text-white bg-gray-800 rounded "
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="-2 -1 24 24"
                            width="24"
                            fill="currentColor"
                        >
                            <path
                                d="M2 18.262V20h16v-1.728l-3.106.753-4.86-1.004-4.977 1.004L2 18.262zM2 16.2l3.104.775 4.936-.996 4.819.996L18 16.214V15a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1.2zM13 12h4a3 3 0 0 1 3 3v7H0v-7a3 3 0 0 1 3-3h4V9h6v3zm-2 0v-1H9v1h2zm-1-3.6a3 3 0 0 1-3-3C7 4.295 8 2.495 10 0c2 2.495 3 4.295 3 5.4a3 3 0 0 1-3 3zm-.002-1.981c.552 0 1-.48 1-1.072 0-.394-.334-1.037-1-1.928-.667.891-1 1.534-1 1.928 0 .592.448 1.072 1 1.072z"
                            ></path>
                        </svg>
                    </div>
                </Drawer>
            </Cabinet>
        </template>
    </Template>
</template>
<script setup lang="ts">
import { PropType } from 'vue';
import { Sections, Cabinet, Drawer, registerSections } from '@aw-studio/pages';
import { useForm } from '@inertiajs/inertia-vue3';

import TextSection from '@/sections/TextSection/TextSection.vue';
import CardsSection from '@/sections/CardSection/CardsSection.vue';
import CardSection from '@/sections/CardSection/CardSection.vue';
import Template from './Template.vue';

registerSections({ CardsSection, CardSection, TextSection });

const props = defineProps({
    page: {
        type: Object as PropType<PageInterface>,
        default: null,
    },
});

interface PageInterface {
    name: string;
    route: string;
    content: any;
}
const defineContent = (page: PageInterface, content: any) => {
    return page ? { ...JSON.parse(JSON.stringify(page.content)) } : content;
};
const form = useForm<PageInterface>({
    name: 'Home',
    route: 'home',
    content: defineContent(props.page, {
        h1: null,
        h2: null,
        sections: [],
    }),
});

const submit = () => {
    if (!form.isDirty) {
        return;
    }
    form.post('/pages');
};
</script>
