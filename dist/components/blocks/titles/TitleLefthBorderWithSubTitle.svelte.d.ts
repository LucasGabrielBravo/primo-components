import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        titulo: string;
        subtitulo: string;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type TitleLefthBorderWithSubTitleProps = typeof __propDef.props;
export type TitleLefthBorderWithSubTitleEvents = typeof __propDef.events;
export type TitleLefthBorderWithSubTitleSlots = typeof __propDef.slots;
export default class TitleLefthBorderWithSubTitle extends SvelteComponent<TitleLefthBorderWithSubTitleProps, TitleLefthBorderWithSubTitleEvents, TitleLefthBorderWithSubTitleSlots> {
}
export {};
