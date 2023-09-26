import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        listCuidados: {
            cuidado: string;
        }[];
        titulo: string;
        paragrafo: string;
        imageGrande: {
            alt: string;
            url: string;
        };
        imagePequena: {
            alt: string;
            url: string;
        };
        botao1: {
            label: string;
            url: string;
        };
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
