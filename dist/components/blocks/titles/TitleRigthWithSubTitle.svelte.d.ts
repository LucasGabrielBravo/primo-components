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
export type TitleRigthWithSubTitleProps = typeof __propDef.props;
export type TitleRigthWithSubTitleEvents = typeof __propDef.events;
export type TitleRigthWithSubTitleSlots = typeof __propDef.slots;
export default class TitleRigthWithSubTitle extends SvelteComponent<TitleRigthWithSubTitleProps, TitleRigthWithSubTitleEvents, TitleRigthWithSubTitleSlots> {
}
export {};
