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
export type BannerImageProps = typeof __propDef.props;
export type BannerImageEvents = typeof __propDef.events;
export type BannerImageSlots = typeof __propDef.slots;
export default class BannerImage extends SvelteComponent<BannerImageProps, BannerImageEvents, BannerImageSlots> {
}
export {};
