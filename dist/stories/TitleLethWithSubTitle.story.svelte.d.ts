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
export type TitleLethWithSubTitleProps = typeof __propDef.props;
export type TitleLethWithSubTitleEvents = typeof __propDef.events;
export type TitleLethWithSubTitleSlots = typeof __propDef.slots;
export default class TitleLethWithSubTitle extends SvelteComponent<TitleLethWithSubTitleProps, TitleLethWithSubTitleEvents, TitleLethWithSubTitleSlots> {
}
export {};
