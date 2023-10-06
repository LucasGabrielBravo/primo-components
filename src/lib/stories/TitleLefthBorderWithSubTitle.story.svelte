<script lang="ts">
  import TitleLefthBorderWithSubTitle from "$lib/components/blocks/titles/TitleLefthBorderWithSubTitle.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  export let Hst: Hst;

  let titulo: string = "Titulo";
  let subtitulo: string = "SubTitulo";
</script>

<Hst.Story title="TitleLefthBorderWithSubTitle">
  <TitleLefthBorderWithSubTitle {titulo} {subtitulo} />

  <svelte:fragment slot="controls" />
</Hst.Story>
