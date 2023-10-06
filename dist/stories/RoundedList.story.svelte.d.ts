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
export type RoundedListProps = typeof __propDef.props;
export type RoundedListEvents = typeof __propDef.events;
export type RoundedListSlots = typeof __propDef.slots;
export default class RoundedList extends SvelteComponent<RoundedListProps, RoundedListEvents, RoundedListSlots> {
}
export {};
