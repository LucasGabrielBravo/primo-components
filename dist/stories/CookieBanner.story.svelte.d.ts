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
export type CookieBannerProps = typeof __propDef.props;
export type CookieBannerEvents = typeof __propDef.events;
export type CookieBannerSlots = typeof __propDef.slots;
export default class CookieBanner extends SvelteComponent<CookieBannerProps, CookieBannerEvents, CookieBannerSlots> {
}
export {};
