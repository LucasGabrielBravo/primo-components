<script>import TitleRigthWithSubTitle from "../components/blocks/titles/TitleRigthWithSubTitle.svelte";
export let Hst;
let titulo = "Titulo";
let subtitulo = "SubTitulo";
</script>

<Hst.Story title="TitleRigthWithSubTitle">
  <TitleRigthWithSubTitle {titulo} {subtitulo} />

  <svelte:fragment slot="controls" />
</Hst.Story>
