<script lang="ts">
    import { cva, type VariantProps } from "class-variance-authority";
    import classnames from "clsx";
    import Inputmask from "inputmask";
    import { onDestroy, onMount } from "svelte";
    import type { HTMLInputAttributes } from "svelte/elements";

    const input = cva([], {
        variants: {
            color: {
                default: "",
                primary: "primary",
                secondary: "secondary",
                tertiary: "tertiary",
            },
            border: {
                border: `border`,
                borderBottom: "borderBottom",
            },
        },
        compoundVariants: [],
        defaultVariants: {
            color: "primary",
            border: "borderBottom",
        },
    });

    interface $$Props
        extends Omit<HTMLInputAttributes, "color">,
            VariantProps<typeof input> {
        label?: string | undefined;
        group?: any | undefined;
        containerClass?: string;
        mask?: string | undefined;
    }

    export let label: string | undefined = undefined;
    export let mask: string | undefined = undefined;
    export let containerClass: string = "";
    export let value: any | undefined = undefined;
    // export let files: any | undefined = undefined;
    // export let group: any | undefined = undefined;
    export let color: $$Props["color"] = "default";
    export let border: $$Props["border"] = "borderBottom";

    let inputElement: HTMLInputElement | undefined;

    let inputMask: Inputmask.Instance | undefined = undefined;

    const autocomplete = "none";

    onMount(async () => {
        if (typeof window !== undefined) {
            const { default: InputMask } = await import("inputmask");

            const inputMask = new Inputmask({
                mask,
                placeholder: " ",
            });
        }

        if (inputMask && inputElement) {
            inputMask.mask(inputElement);
        }
    });

    onDestroy(() => {
        if (inputMask) {
            inputMask.remove();
        }
    });
</script>

{#if $$restProps["type"] === "radio"}
    <!-- <label class={classnames('flex items-center gap-x-2', containerClass)}>
		<input
			type="radio"
			bind:group
			on:change
			on:input
			{value}
			class={classnames(`variant-ringed-surface ${$$restProps['class']}`, $$restProps['type'])}
			{...$$restProps}
		/>
		<p>{label || 'label'}</p>
	</label> -->
    <span>não montado</span>
{:else if $$restProps["type"] === "checkbox"}
    <!-- <label class={classnames('flex items-center gap-x-2', containerClass)}>
		<input
			type="checkbox"
			bind:group
			on:change
			on:input
			{value}
			class={classnames(`variant-ringed-surface ${$$restProps['class']}`, $$restProps['type'])}
			{...$$restProps}
		/>
		<p>{label || 'label'}</p>
	</label> -->
    <span>não montado</span>
{:else}
    <label class={classnames("label", containerClass)}>
        {#if label}
            <span class="text-surface-800"
                >{label}
                {#if $$restProps.required}
                    <span class="text-red-500">*</span>
                {/if}
            </span>
        {/if}

        {#if mask}
            <input
                bind:this={inputElement}
                bind:value
                on:change
                on:input
                type="text"
                {autocomplete}
                class={`inputi ${input({
                    color,
                    border,
                    class: $$props.class,
                })}`}
                {...$$restProps}
            />
        {:else}
            <input
                bind:value
                on:change
                on:input
                type="text"
                class={`inputi label ${input({
                    color,
                    border,
                    class: $$props.class,
                })}`}
                {...$$restProps}
            />
        {/if}
    </label>
{/if}

<style lang="postcss">
    .label {
        @apply flex flex-col items-start;
    }
    .inputi {
        @apply w-full flex flex-col !rounded-none py-3 px-1;
    }
    .inputi.borderBottom {
        @apply border-b-2 border-primary-900/40;
    }
</style>
