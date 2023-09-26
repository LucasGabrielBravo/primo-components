<script>import HeaderOne from "../components/blocks/headers/HeaderOne.svelte";
export let Hst;
let logo = {
  alt: "teste",
  url: "https://lh5.googleusercontent.com/mna8YIThwr4JCqcMlujxZM3FPXG7Pe1RJqe2DgMagUID4X65ZmdC4XFd2YmMQE7r5Rj-szwWmq98g4-jpIEx9Cs=w16383"
};
let telefone = "+55 21 99369-6648";
let botaoOrcamento = {
  label: "Pedir or\xE7amento",
  url: "/"
};
let ligueChamada = "Ligue para:";
</script>

<Hst.Story title="HeaderOne">
  <HeaderOne {logo} {telefone} {botaoOrcamento} {ligueChamada} />

  <svelte:fragment slot="controls" />
</Hst.Story>
