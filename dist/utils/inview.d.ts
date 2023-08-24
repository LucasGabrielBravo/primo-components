interface IOptions {
    transition: number;
    opacity: string;
    direction: "up" | "down" | "left" | "right";
    threshold: number;
    distance: number;
}
export default function inview(element: HTMLElement, options?: Partial<IOptions>): {
    destroy(): void;
};
export {};
