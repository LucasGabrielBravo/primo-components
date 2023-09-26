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
export type BlockBannerCtaTwoProps = typeof __propDef.props;
export type BlockBannerCtaTwoEvents = typeof __propDef.events;
export type BlockBannerCtaTwoSlots = typeof __propDef.slots;
export default class BlockBannerCtaTwo extends SvelteComponent<BlockBannerCtaTwoProps, BlockBannerCtaTwoEvents, BlockBannerCtaTwoSlots> {
}
export {};
