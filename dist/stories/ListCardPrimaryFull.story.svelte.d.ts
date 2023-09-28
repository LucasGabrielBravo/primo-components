import { SvelteComponent } from "svelte";
import type { Hst } from "@histoire/plugin-svelte";
declare const __propDef: {
    props: {
        Hst: Hst;
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
