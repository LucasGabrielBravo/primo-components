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
export type BlockContentOneProps = typeof __propDef.props;
export type BlockContentOneEvents = typeof __propDef.events;
export type BlockContentOneSlots = typeof __propDef.slots;
export default class BlockContentOne extends SvelteComponent<BlockContentOneProps, BlockContentOneEvents, BlockContentOneSlots> {
}
export {};
