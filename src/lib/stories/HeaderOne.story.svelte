<script lang="ts">
  import HeaderOne from "$lib/components/blocks/headers/HeaderOne.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  export let Hst: Hst;

  let logo = {
    alt: "teste",
    url: "https://lh5.googleusercontent.com/mna8YIThwr4JCqcMlujxZM3FPXG7Pe1RJqe2DgMagUID4X65ZmdC4XFd2YmMQE7r5Rj-szwWmq98g4-jpIEx9Cs=w16383",
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
