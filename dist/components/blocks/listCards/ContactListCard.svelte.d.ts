import { SvelteComponent } from "svelte";
import type { IImage } from "../../../../types/fields";
declare const __propDef: {
    props: {
        color?: "default" | "primary" | "secondary" | "tertiary" | null | undefined;
        titulo: string;
        botao: {
            label: string;
            url: string;
        };
        passos: {
            descricao: string;
            img: {
                url: string;
                alt: string;
            };
        }[];
        image: IImage;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type ContactListCardProps = typeof __propDef.props;
export type ContactListCardEvents = typeof __propDef.events;
export type ContactListCardSlots = typeof __propDef.slots;
export default class ContactListCard extends SvelteComponent<ContactListCardProps, ContactListCardEvents, ContactListCardSlots> {
}
export {};
