declare module "svelte-countup" {
    import type { SvelteComponentTyped } from "svelte";
  
    interface CountupProps {
      initial: number,
      value: number,
      duration?: number,
      step?: number,
      roundto?: number,
      format?: boolean,
    }
  
    export default class Countup extends SvelteComponentTyped<CountupProps> {}
  }