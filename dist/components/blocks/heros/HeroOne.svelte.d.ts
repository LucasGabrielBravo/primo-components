import { SvelteComponent } from "svelte";
import type { IBotao, IImage } from "../../../../types/fields";
declare const __propDef: {
    props: {
        titulo: string;
        paragrafo: string;
        botao1: IBotao;
        botao2: IBotao;
        diferenciais: {
            titulo: string;
            descricao: string;
            icon: IImage;
        }[];
        backgroundimage: IImage;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeroOneProps = typeof __propDef.props;
export type HeroOneEvents = typeof __propDef.events;
export type HeroOneSlots = typeof __propDef.slots;
export default class HeroOne extends SvelteComponent<HeroOneProps, HeroOneEvents, HeroOneSlots> {
}
export {};
