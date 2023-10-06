import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        list: {
            icon: {
                alt: string;
                url: string;
            };
            number: string;
            descricao: string;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ListCardPrimaryFullProps = typeof __propDef.props;
export type ListCardPrimaryFullEvents = typeof __propDef.events;
export type ListCardPrimaryFullSlots = typeof __propDef.slots;
export default class ListCardPrimaryFull extends SvelteComponent<ListCardPrimaryFullProps, ListCardPrimaryFullEvents, ListCardPrimaryFullSlots> {
}
export {};
