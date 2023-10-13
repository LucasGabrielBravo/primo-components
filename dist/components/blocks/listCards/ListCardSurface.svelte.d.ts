import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        list: {
            icon: {
                alt: string;
                url: string;
            };
            number: string;
            descricao: string;
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type ListCardSurfaceProps = typeof __propDef.props;
export type ListCardSurfaceEvents = typeof __propDef.events;
export type ListCardSurfaceSlots = typeof __propDef.slots;
export default class ListCardSurface extends SvelteComponent<ListCardSurfaceProps, ListCardSurfaceEvents, ListCardSurfaceSlots> {
}
export {};
