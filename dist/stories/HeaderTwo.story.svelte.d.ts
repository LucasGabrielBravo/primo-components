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
export type HeaderTwoProps = typeof __propDef.props;
export type HeaderTwoEvents = typeof __propDef.events;
export type HeaderTwoSlots = typeof __propDef.slots;
export default class HeaderTwo extends SvelteComponent<HeaderTwoProps, HeaderTwoEvents, HeaderTwoSlots> {
}
export {};
