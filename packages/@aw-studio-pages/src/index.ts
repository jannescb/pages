import {ref} from 'vue'
import { v4 as uuid } from 'uuid';

export { default as Drawer } from './components/Drawer.vue'
export { default as Cabinet } from './components/Cabinet.vue'
export { default as Sections } from './components/Sections.vue'

export declare interface AttributeInterface {
    uuid?: string;
    key: string;
    type: string;
    as?: string | any;
    label?: string | null;
    value?: string | number | boolean | any[] | null;
    relation?: string;
    resource?: string;
    placeholder?: string;
    class?: string;
}
export declare interface SectionInterface {
    uuid?: string;
    key: string;
    attributes: AttributeInterface[];
    sections?: SectionInterface[];
    children?: any[];
    modal?: boolean;
    class?: string;
}
export declare interface PageInterface {
    name: string;
    route: string;
    content: any;
}

export const defineContent = (page: PageInterface, content: any) => {
    return page ? { ...JSON.parse(JSON.stringify(page.content)) } : content
}
// export const defineSection = (section:  SectionInterface) => {
export const defineSection = (section:  any) => {
    return section
}
export const defineAttribute = (attribute:  AttributeInterface) => {
    return attribute
}

export const sectionPool = ref<SectionInterface[]>([]);
export const collapse = ref<boolean>(false)

export const fillPool = (sections:  SectionInterface[]) => {
    sectionPool.value = sections
    return sectionPool
}

export const deletionQueue = ref<string[]>([])

export const prepareForDeletion = (section: SectionInterface) => {
    if(section.uuid){
        deletionQueue.value.push(section.uuid)
    }
};

export const cloneSection: any = (el: any) => {
    let section;
    if(el.props.section){
        section = el.props.section.default();
    }else{
        section = el.props.as.props.section.default();
    }
    
    // let sections = {
    //     sections: el.children ? [] : null,
    // };

    return {
        uuid: uuid(),
        ...section
        // key: el.props.key,
        // attributes: el.attributes.map((attr: any) => {
        //     return cloneAttribute(attr);
        // }),
        // ...sections,
    };
};

export const cloneAttribute = (attribute: AttributeInterface) => {
    let clone = {
        key: attribute.key,
        value: attribute.value,
        relation: attribute.relation,
        resource: attribute.resource,
    }
    return { uuid: uuid(), ...clone };
}


export const getSectionByKey = (key: string) => {
    return sectionPool.value.find((section: SectionInterface) => section.key == key)
}
export const getAttribute = (sectionKey: string, attributeKey: string) => {
    return getSectionByKey(sectionKey)
        ?.attributes
        .find((attr: AttributeInterface) => attr.key == attributeKey)
};


export const registeredSections = ref<any>([])
export const registerSections = (sectionComponents: any) => {
    registeredSections.value = sectionComponents
}