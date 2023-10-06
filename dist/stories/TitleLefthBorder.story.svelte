<script>import TitleLefthBorder from "../components/blocks/titles/TitleLefthBorder.svelte";
export let Hst;
let titulos = [{ text: "Titulo" }, { text: "Titulo1" }];
</script>

<Hst.Story title="TitleLefthBorder">
  <TitleLefthBorder {titulos} />

  <svelte:fragment slot="controls" />
</Hst.Story>
