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
export type ServicoListCardProps = typeof __propDef.props;
export type ServicoListCardEvents = typeof __propDef.events;
export type ServicoListCardSlots = typeof __propDef.slots;
export default class ServicoListCard extends SvelteComponent<ServicoListCardProps, ServicoListCardEvents, ServicoListCardSlots> {
}
export {};
