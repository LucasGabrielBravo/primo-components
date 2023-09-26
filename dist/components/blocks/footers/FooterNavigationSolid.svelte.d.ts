import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        logo: {
            alt: string;
            url: string;
        };
        links: {
            label: string;
            url: string;
        }[];
        redessocias: {
            logoredesocial: {
                alt: string;
                url: string;
            };
            link: {
                label: string;
                url: string;
            };
        }[];
        textodireitos: string;
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
