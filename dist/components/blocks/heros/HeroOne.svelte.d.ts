import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        titulo: string;
        paragrafo: string;
        botao1: {
            label: string;
            url: string;
        };
        botao2: {
            label: string;
            url: string;
        };
        diferenciais: {
            titulo: string;
            descricao: string;
            icon: {
                label: string;
                url: string;
            };
        }[];
        backgroundimage: {
            alt: string;
            url: string;
        };
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
