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
export type CarouselWithBlockProps = typeof __propDef.props;
export type CarouselWithBlockEvents = typeof __propDef.events;
export type CarouselWithBlockSlots = typeof __propDef.slots;
export default class CarouselWithBlock extends SvelteComponent<CarouselWithBlockProps, CarouselWithBlockEvents, CarouselWithBlockSlots> {
}
export {};
