<script lang="ts">
  import TitleRigthWithSubTitle from "$lib/components/blocks/titles/TitleRigthWithSubTitle.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  export let Hst: Hst;

  let titulo: string = "Titulo";
  let subtitulo: string = "SubTitulo";
</script>

<Hst.Story title="TitleRigthWithSubTitle">
  <TitleRigthWithSubTitle {titulo} {subtitulo} />

  <svelte:fragment slot="controls" />
</Hst.Story>
