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
export type BlockContentImageColProps = typeof __propDef.props;
export type BlockContentImageColEvents = typeof __propDef.events;
export type BlockContentImageColSlots = typeof __propDef.slots;
export default class BlockContentImageCol extends SvelteComponent<BlockContentImageColProps, BlockContentImageColEvents, BlockContentImageColSlots> {
}
export {};
