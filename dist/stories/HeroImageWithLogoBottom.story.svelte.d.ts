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
export type HeroImageWithLogoBottomProps = typeof __propDef.props;
export type HeroImageWithLogoBottomEvents = typeof __propDef.events;
export type HeroImageWithLogoBottomSlots = typeof __propDef.slots;
export default class HeroImageWithLogoBottom extends SvelteComponent<HeroImageWithLogoBottomProps, HeroImageWithLogoBottomEvents, HeroImageWithLogoBottomSlots> {
}
export {};
