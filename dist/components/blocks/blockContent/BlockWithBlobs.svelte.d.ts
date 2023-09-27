import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        titulobranco: string;
        titulosecunday: string;
        paragrafo: string;
        autor: string;
        servicocontratado: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type BlockWithBlobsProps = typeof __propDef.props;
export type BlockWithBlobsEvents = typeof __propDef.events;
export type BlockWithBlobsSlots = typeof __propDef.slots;
export default class BlockWithBlobs extends SvelteComponent<BlockWithBlobsProps, BlockWithBlobsEvents, BlockWithBlobsSlots> {
}
export {};
