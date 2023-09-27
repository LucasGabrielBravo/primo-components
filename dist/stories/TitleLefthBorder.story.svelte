<script>import TitleLefthBorder from "../components/blocks/titles/TitleLefthBorder.svelte";
export let Hst;
let titulo = "Titulo";
</script>

<Hst.Story title="TitleLefthBorder">
  <TitleLefthBorder {titulo} />

  <svelte:fragment slot="controls" />
</Hst.Story>
