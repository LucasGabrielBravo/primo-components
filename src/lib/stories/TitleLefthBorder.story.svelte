<script lang="ts">
  import TitleLefthBorder from "$lib/components/blocks/titles/TitleLefthBorder.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  export let Hst: Hst;

  let titulo: string = "Titulo";
</script>

<Hst.Story title="TitleLefthBorder">
  <TitleLefthBorder {titulo} />

  <svelte:fragment slot="controls" />
</Hst.Story>
