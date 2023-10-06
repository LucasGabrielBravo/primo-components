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
export type ContactListCardProps = typeof __propDef.props;
export type ContactListCardEvents = typeof __propDef.events;
export type ContactListCardSlots = typeof __propDef.slots;
export default class ContactListCard extends SvelteComponent<ContactListCardProps, ContactListCardEvents, ContactListCardSlots> {
}
export {};
