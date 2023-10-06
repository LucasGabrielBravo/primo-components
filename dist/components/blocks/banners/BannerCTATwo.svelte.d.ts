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
export type BannerCtaTwoProps = typeof __propDef.props;
export type BannerCtaTwoEvents = typeof __propDef.events;
export type BannerCtaTwoSlots = typeof __propDef.slots;
export default class BannerCtaTwo extends SvelteComponent<BannerCtaTwoProps, BannerCtaTwoEvents, BannerCtaTwoSlots> {
}
export {};
