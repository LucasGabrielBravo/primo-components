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
export type BlockWitchBlobsProps = typeof __propDef.props;
export type BlockWitchBlobsEvents = typeof __propDef.events;
export type BlockWitchBlobsSlots = typeof __propDef.slots;
export default class BlockWitchBlobs extends SvelteComponent<BlockWitchBlobsProps, BlockWitchBlobsEvents, BlockWitchBlobsSlots> {
}
export {};
