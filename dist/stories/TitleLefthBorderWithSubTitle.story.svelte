<script>import TitleLefthBorderWithSubTitle from "../components/blocks/titles/TitleLefthBorderWithSubTitle.svelte";
export let Hst;
let titulo = "Titulo";
let subtitulo = "SubTitulo";
</script>

<Hst.Story title="TitleLefthBorderWithSubTitle">
  <TitleLefthBorderWithSubTitle {titulo} {subtitulo} />

  <svelte:fragment slot="controls" />
</Hst.Story>
