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
export type BlockBannerCtaOneProps = typeof __propDef.props;
export type BlockBannerCtaOneEvents = typeof __propDef.events;
export type BlockBannerCtaOneSlots = typeof __propDef.slots;
export default class BlockBannerCtaOne extends SvelteComponent<BlockBannerCtaOneProps, BlockBannerCtaOneEvents, BlockBannerCtaOneSlots> {
}
export {};
