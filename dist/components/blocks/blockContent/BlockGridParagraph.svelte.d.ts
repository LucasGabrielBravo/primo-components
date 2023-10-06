import { SvelteComponent } from "svelte";
import type { IParagrafo } from "../../../../types/fields";
declare const __propDef: {
    props: {
        paragrafos: IParagrafo[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockGridParagraphProps = typeof __propDef.props;
export type BlockGridParagraphEvents = typeof __propDef.events;
export type BlockGridParagraphSlots = typeof __propDef.slots;
export default class BlockGridParagraph extends SvelteComponent<BlockGridParagraphProps, BlockGridParagraphEvents, BlockGridParagraphSlots> {
}
export {};
