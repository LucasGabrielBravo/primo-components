import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        titulo: string;
        paragrafo: string;
        listparceiros: {
            image: {
                url: string;
                alt: string;
            };
            nome: string;
            categoria: string;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type RoundedListProps = typeof __propDef.props;
export type RoundedListEvents = typeof __propDef.events;
export type RoundedListSlots = typeof __propDef.slots;
export default class RoundedList extends SvelteComponent<RoundedListProps, RoundedListEvents, RoundedListSlots> {
}
export {};
