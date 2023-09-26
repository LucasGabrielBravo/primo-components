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
export type BlockBannerCtaOneProps = typeof __propDef.props;
export type BlockBannerCtaOneEvents = typeof __propDef.events;
export type BlockBannerCtaOneSlots = typeof __propDef.slots;
export default class BlockBannerCtaOne extends SvelteComponent<BlockBannerCtaOneProps, BlockBannerCtaOneEvents, BlockBannerCtaOneSlots> {
}
export {};
