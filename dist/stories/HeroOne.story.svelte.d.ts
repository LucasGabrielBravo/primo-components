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
export type HeroOneProps = typeof __propDef.props;
export type HeroOneEvents = typeof __propDef.events;
export type HeroOneSlots = typeof __propDef.slots;
export default class HeroOne extends SvelteComponent<HeroOneProps, HeroOneEvents, HeroOneSlots> {
}
export {};
