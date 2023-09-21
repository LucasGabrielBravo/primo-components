<script lang="ts">
  import HeaderOne from "$lib/components/blocks/HeaderOne.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  export let Hst: Hst;

  let logo = {
    alt: "teste",
    url: "https://lh6.googleusercontent.com/nkf6yLuUySSqSzzQv556n2TJy_U7PtNEjMu-DSwnCB2kvB8S2flIt58teRc7kDQPXHlhQ5Y9tbGtt7wc74clLE8=w16383",
  };

  let telefone: string = "+55 21 99369-6648";

  let botaoOrcamento = {
    label: "Pedir orçamento",
    url: "/",
  };

  let ligueChamada = "Ligue para:";
</script>

<Hst.Story title="HeaderOne">
  <HeaderOne {logo} {telefone} {botaoOrcamento} {ligueChamada} />

  <svelte:fragment slot="controls" />
</Hst.Story>
