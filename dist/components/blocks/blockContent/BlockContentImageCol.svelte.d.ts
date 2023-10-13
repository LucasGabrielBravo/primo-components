import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        toptitulo: string;
        titulo: string;
        subtitulo: string;
        conteudos: {
            image: any;
            titulo: string;
            texto: string;
            botao: any;
        }[];
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
