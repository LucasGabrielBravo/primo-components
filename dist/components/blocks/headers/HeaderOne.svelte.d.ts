import { SvelteComponent } from "svelte";
import type { IBotao, IImage, ILink } from "../../../../types/fields";
declare const __propDef: {
    props: {
        redessocias: {
            logoredesocial: IImage;
            link: ILink;
        }[];
        logo: IImage;
        ligueChamada: string;
        telefone: string;
        botaoOrcamento: IBotao;
        links: ILink[];
        politica: ILink;
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
