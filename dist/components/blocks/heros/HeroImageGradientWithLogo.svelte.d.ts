import { SvelteComponent } from "svelte";
import type { IImage } from "../../../../types/fields";
declare const __propDef: {
    props: {
        backgroundimage: IImage;
        logo: IImage;
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
