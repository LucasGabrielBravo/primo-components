<script>import { cva } from "class-variance-authority";
import clsx from "clsx";
export let label = void 0;
export let placeholder = void 0;
export let options = [];
export let required = void 0;
export let multiple = false;
export let color = "primary";
export let border = "borderBottom";
export let value = "";
export let labelClass = void 0;
const id = Math.random().toString(36).substring(2, 9);
const select = cva([], {
  variants: {
    color: {
      default: "",
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary"
    },
    border: {
      border: `border`,
      borderBottom: `borderBottom`
    }
  },
  compoundVariants: [],
  defaultVariants: {
    color: "primary",
    border: `borderBottom`
  }
});
</script>

<label for={id} class={clsx("label theme", labelClass)}>
    {#if label}
        <span class="text-surface-800">
            {label}
            {#if required}
                <span class="require">*</span>
            {/if}
        </span>
    {/if}
    <select
        {required}
        {placeholder}
        {...{ multiple }}
        class={`selecti ${select({
            color,
            border,
            class: $$props.class,
        })}`}
        bind:value
        on:change
    >
        <option selected={true} disabled value="">{placeholder}</option>
        {#each options as option}
            <option value={option.value}> {option.label} </option>
        {/each}
    </select>
</label>

<style>
    .label {
    display: flex;
    flex-direction: column;
    align-items: flex-start
}
    .require {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity))
}
    .selecti {
    display: flex !important;
    width: 100% !important;
    flex-direction: column !important;
    border-radius: 0px !important;
    background-color: transparent !important;
    padding-top: 14px !important;
    padding-bottom: 14px !important
}
    .selecti.borderBottom {
    border-bottom-width: 2px !important;
    border-color: rgb(var(--color-secondary-900, 59 3 25) / 0.4) !important;
    font-weight: 500
}
</style>
