<script>import TitleLethWithSubTitle from "../components/blocks/titles/TitleLethWithSubTitle.svelte";
export let Hst;
let titulo = "Titulo";
let subtitulo = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
</script>

<Hst.Story title="TitleLethWithSubTitle">
  <TitleLethWithSubTitle {titulo} {subtitulo} />

  <svelte:fragment slot="controls" />
</Hst.Story>
