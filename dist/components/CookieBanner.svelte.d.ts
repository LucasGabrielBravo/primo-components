/** @typedef {typeof __propDef.props}  CookieBannerProps */
/** @typedef {typeof __propDef.events}  CookieBannerEvents */
/** @typedef {typeof __propDef.slots}  CookieBannerSlots */
export default class CookieBanner extends SvelteComponent<{
    heading?: string | undefined;
    cookieName?: string | null | undefined;
    canRejectCookies?: boolean | undefined;
    showEditIcon?: boolean | undefined;
    description?: string | undefined;
    categories?: {
        analytics: () => void;
        tracking: () => void;
        marketing: () => void;
        necessary: () => void;
    } | undefined;
    cookieConfig?: {} | undefined;
    choices?: {} | undefined;
    acceptLabel?: string | undefined;
    rejectLabel?: string | undefined;
    settingsLabel?: string | undefined;
    closeLabel?: string | undefined;
    editLabel?: string | undefined;
    show?: (() => void) | undefined;
}, {
    [evt: string]: CustomEvent<any>;
}, {}> {
    get show(): () => void;
}
export type CookieBannerProps = typeof __propDef.props;
export type CookieBannerEvents = typeof __propDef.events;
export type CookieBannerSlots = typeof __propDef.slots;
import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        heading?: string | undefined;
        cookieName?: string | undefined | null;
        canRejectCookies?: boolean | undefined;
        showEditIcon?: boolean | undefined;
        description?: string | undefined;
        categories?: {
            analytics: () => void;
            tracking: () => void;
            marketing: () => void;
            necessary: () => void;
        } | undefined;
        cookieConfig?: {} | undefined;
        choices?: {} | undefined;
        acceptLabel?: string | undefined;
        rejectLabel?: string | undefined;
        settingsLabel?: string | undefined;
        closeLabel?: string | undefined;
        editLabel?: string | undefined;
        show?: (() => void) | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export {};
