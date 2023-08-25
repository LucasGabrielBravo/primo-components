<script lang="ts">
    import { cva, type VariantProps } from "class-variance-authority";
    import clsx from "clsx";
    import Select from "svelte-select";

    import type { HTMLSelectAttributes } from "svelte/elements";

    interface IOption {
        label: string;
        value: string | number | object;
    }
    interface $$Props
        extends Omit<HTMLSelectAttributes, "color">,
            VariantProps<typeof select> {
        label?: string | undefined;
        placeholder?: string | undefined;
        options?: IOption[] | undefined;
        required?: boolean | undefined;
        multiple?: boolean | undefined;
    }

    export let label: string | undefined = undefined;
    export let placeholder: string | undefined = undefined;
    export let options: IOption[] = [];
    export let required: boolean | undefined = undefined;
    export let multiple: boolean = false;
    export let color: $$Props["color"] = "primary";
    export let border: $$Props["border"] = "borderBottom";
    export let value: string | number | object = "";
    export let labelClass: HTMLLabelElement["className"] | undefined =
        undefined;

    const id = Math.random().toString(36).substring(2, 9);

    const select = cva([], {
        variants: {
            color: {
                default: "",
                primary: "primary",
                secondary: "secondary",
                tertiary: "tertiary",
            },
            border: {
                border: `border`,
                borderBottom: `borderBottom`,
            },
        },
        compoundVariants: [],
        defaultVariants: {
            color: "primary",
            border: `borderBottom`,
        },
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
    <Select
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
    </Select>
</label>

<style lang="postcss">
    .label {
        @apply flex flex-col items-start;
    }
    .require {
        @apply text-red-500;
    }
    .selecti {
        @apply !w-full !flex !flex-col !rounded-none !py-[14px]  !bg-transparent;
    }
    .selecti.borderBottom {
        @apply !border-b-2 !border-secondary-900/40;
    }
</style>
