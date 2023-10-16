import { SvelteComponent } from "svelte";
import type { IBotao, IImage, ILink } from "../../../../types/fields";
declare const __propDef: {
    props: {
        redessocias: {
            logoredesocial: IImage;
            link: ILink;
        }[];
        logo: IImage;
        botao: IBotao;
        links: ILink[];
        politica: ILink;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type HeaderTwoProps = typeof __propDef.props;
export type HeaderTwoEvents = typeof __propDef.events;
export type HeaderTwoSlots = typeof __propDef.slots;
export default class HeaderTwo extends SvelteComponent<HeaderTwoProps, HeaderTwoEvents, HeaderTwoSlots> {
}
export {};
