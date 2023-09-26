import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        titulo: string;
        paragrafos: {
            paragrafo: string;
        }[];
        botao1: {
            label: string;
            url: string;
        };
        backgroundimage: {
            alt: string;
            url: string;
        };
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
