import { SvelteComponent } from "svelte";
import type { IBotao, IImage } from "../../../../types/fields";
declare const __propDef: {
    props: {
        subtitulo: string;
        titulo: string;
        chamada: string;
        botao: IBotao;
        image: IImage;
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
