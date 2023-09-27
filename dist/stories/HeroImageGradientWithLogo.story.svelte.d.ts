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
export type HeroImageGradientWithLogoProps = typeof __propDef.props;
export type HeroImageGradientWithLogoEvents = typeof __propDef.events;
export type HeroImageGradientWithLogoSlots = typeof __propDef.slots;
export default class HeroImageGradientWithLogo extends SvelteComponent<HeroImageGradientWithLogoProps, HeroImageGradientWithLogoEvents, HeroImageGradientWithLogoSlots> {
}
export {};
