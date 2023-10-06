import { SvelteComponent } from "svelte";
import type { IBotao, IParagrafo } from "../../../../types/fields";
declare const __propDef: {
    props: {
        titulo: string;
        paragrafos: IParagrafo[];
        listservicos: {
            image: {
                url: string;
                alt: string;
            };
            servico: string;
        }[];
        botao1: IBotao;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ServicoListCardProps = typeof __propDef.props;
export type ServicoListCardEvents = typeof __propDef.events;
export type ServicoListCardSlots = typeof __propDef.slots;
export default class ServicoListCard extends SvelteComponent<ServicoListCardProps, ServicoListCardEvents, ServicoListCardSlots> {
}
export {};
