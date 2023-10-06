import { SvelteComponent } from "svelte";
import type { IBotao, IImage, IParagrafo } from "../../../../types/fields";
declare const __propDef: {
    props: {
        titulo: string;
        paragrafos: IParagrafo[];
        botao1: IBotao;
        backgroundimage: IImage;
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
