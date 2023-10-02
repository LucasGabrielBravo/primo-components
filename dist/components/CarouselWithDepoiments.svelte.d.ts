import { SvelteComponent } from "svelte";
import type { IImage } from "../../types/fields";
declare const __propDef: {
    props: {
        logo: IImage;
        depoimentos: {
            titulobranco: string;
            titulosecunday: string;
            paragrafo: string;
            autor: string;
            servicocontratado: string;
        }[];
        id?: string | undefined;
        hiddenArrows?: boolean | undefined;
        autoPlay?: boolean | undefined;
        interval?: number | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type CarouselWithDepoimentsProps = typeof __propDef.props;
export type CarouselWithDepoimentsEvents = typeof __propDef.events;
export type CarouselWithDepoimentsSlots = typeof __propDef.slots;
export default class CarouselWithDepoiments extends SvelteComponent<CarouselWithDepoimentsProps, CarouselWithDepoimentsEvents, CarouselWithDepoimentsSlots> {
}
export {};
