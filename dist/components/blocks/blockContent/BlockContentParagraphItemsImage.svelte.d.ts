import { SvelteComponent } from "svelte";
import type { IImage, IParagrafo } from "../../../../types/fields";
declare const __propDef: {
    props: {
        titulo: string;
        image: IImage;
        paragrafo: string;
        titulolista: string;
        items: IParagrafo[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockContentParagraphItemsImageProps = typeof __propDef.props;
export type BlockContentParagraphItemsImageEvents = typeof __propDef.events;
export type BlockContentParagraphItemsImageSlots = typeof __propDef.slots;
export default class BlockContentParagraphItemsImage extends SvelteComponent<BlockContentParagraphItemsImageProps, BlockContentParagraphItemsImageEvents, BlockContentParagraphItemsImageSlots> {
}
export {};
