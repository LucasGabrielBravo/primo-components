import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        titulo: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TitleLefthBorderProps = typeof __propDef.props;
export type TitleLefthBorderEvents = typeof __propDef.events;
export type TitleLefthBorderSlots = typeof __propDef.slots;
export default class TitleLefthBorder extends SvelteComponent<TitleLefthBorderProps, TitleLefthBorderEvents, TitleLefthBorderSlots> {
}
export {};
