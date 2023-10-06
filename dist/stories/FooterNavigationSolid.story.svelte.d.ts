import { SvelteComponent } from "svelte";
import type { Hst } from "@histoire/plugin-svelte";
declare const __propDef: {
    props: {
        Hst: Hst;
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
