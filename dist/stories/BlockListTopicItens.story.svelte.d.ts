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
export type BlockListTopicItensProps = typeof __propDef.props;
export type BlockListTopicItensEvents = typeof __propDef.events;
export type BlockListTopicItensSlots = typeof __propDef.slots;
export default class BlockListTopicItens extends SvelteComponent<BlockListTopicItensProps, BlockListTopicItensEvents, BlockListTopicItensSlots> {
}
export {};
