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
export type HeroImageWithLogoBottomProps = typeof __propDef.props;
export type HeroImageWithLogoBottomEvents = typeof __propDef.events;
export type HeroImageWithLogoBottomSlots = typeof __propDef.slots;
export default class HeroImageWithLogoBottom extends SvelteComponent<HeroImageWithLogoBottomProps, HeroImageWithLogoBottomEvents, HeroImageWithLogoBottomSlots> {
}
export {};
