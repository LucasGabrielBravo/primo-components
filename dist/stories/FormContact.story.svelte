<script>import FormContact from "../components/blocks/forms/FormContact.svelte";
export let Hst;
let nomeempresa = "Empresa Nome";
let cargosforselect = [
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" }
];
</script>

<Hst.Story title="FormContact">
    <FormContact {cargosforselect} {nomeempresa} />

    <svelte:fragment slot="controls" />
</Hst.Story>
