import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        nomeempresa: string;
        cargosforselect: {
            label: string;
            value: string;
        }[];
        handleSubmit: <T>(data: any) => void;
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
