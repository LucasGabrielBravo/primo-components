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
export type BannerCtaTwoProps = typeof __propDef.props;
export type BannerCtaTwoEvents = typeof __propDef.events;
export type BannerCtaTwoSlots = typeof __propDef.slots;
export default class BannerCtaTwo extends SvelteComponent<BannerCtaTwoProps, BannerCtaTwoEvents, BannerCtaTwoSlots> {
}
export {};
