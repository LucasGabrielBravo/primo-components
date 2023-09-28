import { SvelteComponent } from "svelte";
import type { IParagrafo } from "../../../../types/fields";
declare const __propDef: {
    props: {
        items: IParagrafo[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockListTopicItensProps = typeof __propDef.props;
export type BlockListTopicItensEvents = typeof __propDef.events;
export type BlockListTopicItensSlots = typeof __propDef.slots;
export default class BlockListTopicItens extends SvelteComponent<BlockListTopicItensProps, BlockListTopicItensEvents, BlockListTopicItensSlots> {
}
export {};
