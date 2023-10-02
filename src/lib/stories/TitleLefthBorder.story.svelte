<script lang="ts">
  import TitleLefthBorder from "$lib/components/blocks/titles/TitleLefthBorder.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  import type { IParagrafo } from "../../types/fields";
  export let Hst: Hst;

  let titulos: IParagrafo[] = [{ text: "Titulo" }, { text: "Titulo1" }];
</script>

<Hst.Story title="TitleLefthBorder">
  <TitleLefthBorder {titulos} />

  <svelte:fragment slot="controls" />
</Hst.Story>
