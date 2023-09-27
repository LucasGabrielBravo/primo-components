import { SvelteComponent } from "svelte";
import type { IBotao, IImage, IParagrafo } from "../../../../types/fields";
declare const __propDef: {
    props: {
        listCuidados: IParagrafo[];
        titulo: string;
        paragrafo: string;
        imageGrande: IImage;
        imagePequena: IImage;
        botao1: IBotao;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockContentOneProps = typeof __propDef.props;
export type BlockContentOneEvents = typeof __propDef.events;
export type BlockContentOneSlots = typeof __propDef.slots;
export default class BlockContentOne extends SvelteComponent<BlockContentOneProps, BlockContentOneEvents, BlockContentOneSlots> {
}
export {};
