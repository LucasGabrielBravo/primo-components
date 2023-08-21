<script>import { cva } from "class-variance-authority";
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
      "tertiary-primary": "tertiary-primary"
    },
    size: {
      sm: "sm",
      md: "",
      lg: "lg",
      xl: "xl"
    }
  },
  compoundVariants: [],
  defaultVariants: {
    size: "md",
    color: "default"
  }
});
export let href = void 0;
export let color = "default";
export let size = "md";
</script>

<svelte:element 
	this={(href) ? "a" : "button"}
	{href}
	{...$$props}
	class={`button ${button({ size, color, class: $$props.class })}`}
>
	<slot />	
</svelte:element>

<style>
	.button {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: var(--rounded-base);
    border-width: 1px;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    --tw-border-opacity: 1;
    border-color: rgb(148 163 184 / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(51 65 85 / var(--tw-text-opacity));
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
	.button:active {
    --tw-scale-x: .95;
    --tw-scale-y: .95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}		
	
	.button.primary {
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-bg-opacity));
    color: var(--on-primary,#FFF)
}		
	
	.button.primary:hover {
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-primary-700, 29 78 216) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-600, 37 99 235) / var(--tw-bg-opacity))
}

	.button.secondary {
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-bg-opacity));
    color: var(--on-secondary,#FFF)
}

	.button.secondary:hover {
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-secondary-700, 171 7 73) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-secondary-600, 225 10 96) / var(--tw-bg-opacity))
}

	.button.tertiary {
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-tertiary-500, 128 246 49) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-tertiary-500, 128 246 49) / var(--tw-bg-opacity));
    color: var(--on-tertiary,#FFF)
}

	.button.tertiary:hover {
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-tertiary-700, 73 171 7) / var(--tw-border-opacity));
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-tertiary-600, 96 225 10) / var(--tw-bg-opacity))
}

	.button.primary-gradient {
    border-color: #FFF0;
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    --tw-gradient-from: rgb(var(--color-primary-500, 59 130 246) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-primary-500, 59 130 246) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-primary-700, 29 78 216) / 1) var(--tw-gradient-to-position);
    color: var(--on-primary,#FFF)
}

	.button.primary-gradient:hover {
    --tw-gradient-from: rgb(var(--color-primary-600, 37 99 235) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-primary-600, 37 99 235) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-primary-800, 30 64 175) / 1) var(--tw-gradient-to-position)
}

	.button.secondary-gradient {
    border-color: #FFF0;
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    --tw-gradient-from: rgb(var(--color-secondary-500, 246 49 128) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-secondary-500, 246 49 128) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-secondary-700, 171 7 73) / 1) var(--tw-gradient-to-position);
    color: var(--on-secondary,#FFF)
}

	.button.secondary-gradient:hover {
    --tw-gradient-from: rgb(var(--color-secondary-600, 225 10 96) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-secondary-600, 225 10 96) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-secondary-800, 112 5 48) / 1) var(--tw-gradient-to-position)
}

	.button.tertiary-gradient {
    border-color: #FFF0;
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    --tw-gradient-from: rgb(var(--color-tertiary-500, 128 246 49) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-tertiary-500, 128 246 49) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-tertiary-700, 73 171 7) / 1) var(--tw-gradient-to-position);
    color: var(--on-tertiary,#FFF)
}

	.button.tertiary-gradient:hover {
    --tw-gradient-from: rgb(var(--color-tertiary-600, 96 225 10) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-tertiary-600, 96 225 10) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-tertiary-800, 48 112 5) / 1) var(--tw-gradient-to-position)
}

	.button.primary-secondary {
    border-color: #FFF0;
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    --tw-gradient-from: rgb(var(--color-primary-500, 59 130 246) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-primary-500, 59 130 246) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-secondary-500, 246 49 128) / 1) var(--tw-gradient-to-position);
    color: var(--on-primary,#FFF)
}

	.button.primary-secondary:hover {
    --tw-gradient-from: rgb(var(--color-primary-600, 37 99 235) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-primary-600, 37 99 235) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-secondary-600, 225 10 96) / 1) var(--tw-gradient-to-position)
}

	.button.secondary-tertiary {
    border-color: #FFF0;
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    --tw-gradient-from: rgb(var(--color-secondary-500, 246 49 128) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-secondary-500, 246 49 128) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-tertiary-500, 128 246 49) / 1) var(--tw-gradient-to-position);
    color: var(--on-secondary,#FFF)
}

	.button.secondary-tertiary:hover {
    --tw-gradient-from: rgb(var(--color-secondary-600, 225 10 96) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-secondary-600, 225 10 96) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-tertiary-600, 96 225 10) / 1) var(--tw-gradient-to-position)
}

	.button.tertiary-primary {
    border-color: #FFF0;
    background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
    --tw-gradient-from: rgb(var(--color-tertiary-500, 128 246 49) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-tertiary-500, 128 246 49) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-primary-500, 59 130 246) / 1) var(--tw-gradient-to-position);
    color: var(--on-tertiary,#FFF)
}

	.button.tertiary-primary:hover {
    --tw-gradient-from: rgb(var(--color-tertiary-600, 96 225 10) / 1) var(--tw-gradient-from-position);
    --tw-gradient-to: rgb(var(--color-tertiary-600, 96 225 10) / 0) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
    --tw-gradient-to: rgb(var(--color-primary-600, 37 99 235) / 1) var(--tw-gradient-to-position)
}

	.button.sm {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem
}	

	.button.lg {
    font-size: 1.125rem;
    line-height: 1.75rem
}

	.button.xl {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1.25rem;
    line-height: 1.75rem
}

</style>