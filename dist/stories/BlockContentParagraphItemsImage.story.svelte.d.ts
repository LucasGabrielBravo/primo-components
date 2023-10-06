import { SvelteComponent } from "svelte";
import type { Hst } from "@histoire/plugin-svelte";
declare const __propDef: {
    props: {
        Hst: Hst;
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
