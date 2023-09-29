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
export type BannerCtaOneProps = typeof __propDef.props;
export type BannerCtaOneEvents = typeof __propDef.events;
export type BannerCtaOneSlots = typeof __propDef.slots;
export default class BannerCtaOne extends SvelteComponent<BannerCtaOneProps, BannerCtaOneEvents, BannerCtaOneSlots> {
}
export {};
