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
export type FormContactProps = typeof __propDef.props;
export type FormContactEvents = typeof __propDef.events;
export type FormContactSlots = typeof __propDef.slots;
export default class FormContact extends SvelteComponent<FormContactProps, FormContactEvents, FormContactSlots> {
}
export {};
