<script lang="ts">
  import TitleLethWithSubTitle from "$lib/components/blocks/titles/TitleLethWithSubTitle.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  export let Hst: Hst;

  let titulo: string = "Titulo";
  let subtitulo: string =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
</script>

<Hst.Story title="TitleLethWithSubTitle">
  <TitleLethWithSubTitle {titulo} {subtitulo} />

  <svelte:fragment slot="controls" />
</Hst.Story>
