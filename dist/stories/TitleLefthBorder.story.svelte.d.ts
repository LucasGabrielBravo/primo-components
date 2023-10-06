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
export type TitleLefthBorderProps = typeof __propDef.props;
export type TitleLefthBorderEvents = typeof __propDef.events;
export type TitleLefthBorderSlots = typeof __propDef.slots;
export default class TitleLefthBorder extends SvelteComponent<TitleLefthBorderProps, TitleLefthBorderEvents, TitleLefthBorderSlots> {
}
export {};
