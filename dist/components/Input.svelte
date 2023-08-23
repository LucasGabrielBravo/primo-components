<script>import { cva } from "class-variance-authority";
import classnames from "clsx";
import Inputmask from "inputmask";
import { onDestroy, onMount } from "svelte";
const input = cva([], {
  variants: {
    color: {
      default: "",
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary"
    },
    border: {
      border: `border`,
      borderBottom: "borderBottom"
    }
  },
  compoundVariants: [],
  defaultVariants: {
    color: "primary",
    border: "borderBottom"
  }
});
export let label = void 0;
export let mask = void 0;
export let containerClass = "";
export let value = void 0;
export let color = "default";
export let border = "borderBottom";
let inputElement;
let inputMask = void 0;
const autocomplete = "none";
onMount(async () => {
  if (typeof window !== void 0) {
    const { default: InputMask } = await import("inputmask");
    inputMask = new Inputmask({
      mask,
      placeholder: " "
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
                    <span class="require">*</span>
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

<style>
    .label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: 500
}
    .require {
    --tw-text-opacity: 1;
    color: rgb(239 68 68 / var(--tw-text-opacity))
}
    .inputi {
    display: flex;
    width: 100%;
    flex-direction: column;
    border-radius: 0px !important;
    background-color: transparent;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    padding-left: 0.25rem;
    padding-right: 0.25rem
}
    .inputi.borderBottom {
    border-bottom-width: 2px;
    border-color: rgb(var(--color-secondary-900, 59 3 25) / 0.4);
    background-color: transparent;
    font-weight: 300;
    color: var(--on-tertiary-900)
}
</style>
