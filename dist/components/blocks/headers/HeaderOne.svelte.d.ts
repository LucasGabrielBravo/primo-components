import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        logo: {
            alt: string;
            url: string;
        };
        ligueChamada: string;
        telefone: string;
        botaoOrcamento: {
            label: string;
            url: string;
        };
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeaderOneProps = typeof __propDef.props;
export type HeaderOneEvents = typeof __propDef.events;
export type HeaderOneSlots = typeof __propDef.slots;
export default class HeaderOne extends SvelteComponent<HeaderOneProps, HeaderOneEvents, HeaderOneSlots> {
}
export {};
