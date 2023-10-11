import { SvelteComponent } from "svelte";
import type { IImage, ILink } from "../../../../types/fields";
declare const __propDef: {
    props: {
        logo: IImage;
        links: ILink[];
        redessocias: {
            logoredesocial: IImage;
            link: ILink;
        }[];
        textodireitos: string;
        politica: ILink;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type FooterNavigationSolidProps = typeof __propDef.props;
export type FooterNavigationSolidEvents = typeof __propDef.events;
export type FooterNavigationSolidSlots = typeof __propDef.slots;
export default class FooterNavigationSolid extends SvelteComponent<FooterNavigationSolidProps, FooterNavigationSolidEvents, FooterNavigationSolidSlots> {
}
export {};
