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
export type ListCardSurfaceProps = typeof __propDef.props;
export type ListCardSurfaceEvents = typeof __propDef.events;
export type ListCardSurfaceSlots = typeof __propDef.slots;
export default class ListCardSurface extends SvelteComponent<ListCardSurfaceProps, ListCardSurfaceEvents, ListCardSurfaceSlots> {
}
export {};
