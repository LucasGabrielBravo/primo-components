<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import type { Hst } from '@histoire/plugin-svelte';
  import { logEvent } from 'histoire/client';
	export let Hst: Hst

  let color: string & (typeof Button)['prototype']['$$prop_def']['color'] = "default"
  let size: string & (typeof Button)['prototype']['$$prop_def']['size'] = "md"
  let content: string = "Button"

  $: source = `
    import { Button } from "/index.js"

    <Button
      color="${color}"
      size="${size}"
    >
      ${content}
    </Button>  
  `
</script>

<Hst.Story {source} title="Button">
  <Button {color} {size} on:click={(event) => logEvent("on:click", event)}>
    {content}
  </Button>

  <svelte:fragment slot="controls">
		<Hst.Text bind:value={content} title="Content" />

    <Hst.Select bind:value={color} options={["default", "primary", "secondary", "tertiary", "primary-gradient", "secondary-gradient", "tertiary-gradient", "primary-secondary", "secondary-tertiary", "tertiary-primary"]} title="Color" />
    <Hst.Select bind:value={size} options={["sm", "md", "lg", "xl"]} title="Size" />
	</svelte:fragment>
</Hst.Story>