import { SvelteComponent } from "svelte";
import type { IParagrafo } from "../../../../types/fields";
declare const __propDef: {
    props: {
        titulos: IParagrafo[];
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
