import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        id?: string | undefined;
        images?: string[] | undefined;
        hiddenArrows?: boolean | undefined;
        autoPlay?: boolean | undefined;
        interval?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CarouselProps = typeof __propDef.props;
export type CarouselEvents = typeof __propDef.events;
export type CarouselSlots = typeof __propDef.slots;
export default class Carousel extends SvelteComponent<CarouselProps, CarouselEvents, CarouselSlots> {
}
export {};
