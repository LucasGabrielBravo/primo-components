<script>import FormContact from "../components/blocks/forms/FormContact.svelte";
export let Hst;
let nomeempresa = "Empresa Nome";
let cargosForSelect = [
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste" }
];
</script>

<Hst.Story title="FormContact">
    <FormContact {cargosForSelect} {nomeempresa} />

    <svelte:fragment slot="controls" />
</Hst.Story>
