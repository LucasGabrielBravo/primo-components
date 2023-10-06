import { SvelteComponent } from "svelte";
import type { IImage } from "../../../../types/fields";
declare const __propDef: {
    props: {
        depoimentos: {
            titulobranco: string;
            titulosecunday: string;
            paragrafo: string;
            autor: string;
            servicocontratado: string;
        }[];
        logo: IImage;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockWithBlobsCarouselDepoimentsProps = typeof __propDef.props;
export type BlockWithBlobsCarouselDepoimentsEvents = typeof __propDef.events;
export type BlockWithBlobsCarouselDepoimentsSlots = typeof __propDef.slots;
export default class BlockWithBlobsCarouselDepoiments extends SvelteComponent<BlockWithBlobsCarouselDepoimentsProps, BlockWithBlobsCarouselDepoimentsEvents, BlockWithBlobsCarouselDepoimentsSlots> {
}
export {};
