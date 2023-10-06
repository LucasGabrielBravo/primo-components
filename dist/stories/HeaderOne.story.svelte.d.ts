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
export type HeaderOneProps = typeof __propDef.props;
export type HeaderOneEvents = typeof __propDef.events;
export type HeaderOneSlots = typeof __propDef.slots;
export default class HeaderOne extends SvelteComponent<HeaderOneProps, HeaderOneEvents, HeaderOneSlots> {
}
export {};
