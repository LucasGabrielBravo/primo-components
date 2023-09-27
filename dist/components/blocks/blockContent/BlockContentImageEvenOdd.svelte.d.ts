import { SvelteComponent } from "svelte";
import type { IBotao, IImage } from "../../../../types/fields";
declare const __propDef: {
    props: {
        toptitulo: string;
        titulo: string;
        subtitulo: string;
        conteudos: {
            image: IImage;
            titulo: string;
            texto: string;
            botao: IBotao;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockContentImageEvenOddProps = typeof __propDef.props;
export type BlockContentImageEvenOddEvents = typeof __propDef.events;
export type BlockContentImageEvenOddSlots = typeof __propDef.slots;
export default class BlockContentImageEvenOdd extends SvelteComponent<BlockContentImageEvenOddProps, BlockContentImageEvenOddEvents, BlockContentImageEvenOddSlots> {
}
export {};
