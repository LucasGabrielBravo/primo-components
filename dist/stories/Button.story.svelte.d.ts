import { SvelteComponent } from "svelte";
import type { Hst } from '@histoire/plugin-svelte';
declare const __propDef: {
    props: {
        Hst: Hst;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ButtonProps = typeof __propDef.props;
export type ButtonEvents = typeof __propDef.events;
export type ButtonSlots = typeof __propDef.slots;
export default class Button extends SvelteComponent<ButtonProps, ButtonEvents, ButtonSlots> {
}
export {};
