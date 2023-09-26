import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        subtitulo: string;
        titulo: string;
        chamada: string;
        botao: {
            label: string;
            url: string;
        };
        image: {
            alt: string;
            url: string;
        };
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
