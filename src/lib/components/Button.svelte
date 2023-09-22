<script lang="ts">
	import { cva, type VariantProps } from "class-variance-authority";
	import type { HTMLButtonAttributes } from "svelte/elements";

	const button = cva([], {
		variants: {
			color: {
				default: "",
				primary: "primary",
				secondary: "secondary",
				tertiary: "tertiary",
				"primary-gradient": "primary-gradient",
				"secondary-gradient": "secondary-gradient",
				"tertiary-gradient": "tertiary-gradient",
				"primary-secondary": "primary-secondary",
				"secondary-tertiary": "secondary-tertiary",
				"tertiary-primary": "tertiary-primary",
			},
			size: {
				sm: "sm",
				md: "",
				lg: "lg",
				xl: "xl",
			},
		},
		compoundVariants: [],
		defaultVariants: {
			size: "md",
			color: "default",
		},
	});

	interface $$Props
		extends Omit<HTMLButtonAttributes, "color">,
			VariantProps<typeof button> {
		href?: string;
	}

	export let href: string | undefined = undefined;
	export let color: $$Props["color"] = "default";
	export let size: $$Props["size"] = "md";
</script>

<svelte:element
	this={href ? "a" : "button"}
	{href}
	{...$$props}
	class={`button ${button({ size, color, class: $$props.class })}`}
>
	<slot />
</svelte:element>

<style lang="postcss">
	.button {
		@apply px-4 py-2 flex flex-row items-center justify-center border rounded-[--rounded-base];
		@apply border-slate-400 bg-slate-100 text-slate-700;
		@apply active:scale-95 transition-all;
	}

	.button.primary {
		@apply border-primary-500 bg-primary-500 text-[--on-primary,#FFF];
		@apply hover:border-primary-700 hover:bg-primary-600;
	}

	.button.secondary {
		@apply border-secondary-500 bg-secondary-500 text-[--on-secondary,#FFF];
		@apply hover:border-secondary-700 hover:bg-secondary-600;
	}

	.button.tertiary {
		@apply border-tertiary-500 bg-tertiary-500 text-[--on-tertiary,#FFF];
		@apply hover:border-tertiary-700 hover:bg-tertiary-600;
	}

	.button.primary-gradient {
		@apply bg-gradient-to-br from-primary-500 to-primary-700 text-[--on-primary,#FFF] border-[#FFF0];
		@apply hover:from-primary-600 hover:to-primary-800;
	}

	.button.secondary-gradient {
		@apply bg-gradient-to-br from-secondary-500 to-secondary-700 text-[--on-secondary,#FFF] border-[#FFF0];
		@apply hover:from-secondary-600 hover:to-secondary-800;
	}

	.button.tertiary-gradient {
		@apply bg-gradient-to-br from-tertiary-500 to-tertiary-700 text-[--on-tertiary,#FFF] border-[#FFF0];
		@apply hover:from-tertiary-600 hover:to-tertiary-800;
	}

	.button.primary-secondary {
		@apply bg-gradient-to-br from-primary-500 to-secondary-500 text-[--on-primary,#FFF] border-[#FFF0];
		@apply hover:from-primary-600 hover:to-secondary-600;
	}

	.button.secondary-tertiary {
		@apply bg-gradient-to-br from-secondary-500 to-tertiary-500 text-[--on-secondary,#FFF] border-[#FFF0];
		@apply hover:from-secondary-600 hover:to-tertiary-600;
	}

	.button.tertiary-primary {
		@apply bg-gradient-to-br from-tertiary-500 to-primary-500 text-[--on-tertiary,#FFF] border-[#FFF0];
		@apply hover:from-tertiary-600 hover:to-primary-600;
	}

	.button.sm {
		@apply px-2 py-1 text-sm;
	}

	.button.lg {
		@apply text-lg;
	}

	.button.xl {
		@apply px-5 py-3 text-xl;
	}
</style>
