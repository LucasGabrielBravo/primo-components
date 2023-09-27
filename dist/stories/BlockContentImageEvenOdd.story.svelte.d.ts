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
export type BlockContentImageEvenOddProps = typeof __propDef.props;
export type BlockContentImageEvenOddEvents = typeof __propDef.events;
export type BlockContentImageEvenOddSlots = typeof __propDef.slots;
export default class BlockContentImageEvenOdd extends SvelteComponent<BlockContentImageEvenOddProps, BlockContentImageEvenOddEvents, BlockContentImageEvenOddSlots> {
}
export {};
