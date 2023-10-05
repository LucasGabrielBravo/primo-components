<script>import FormContact from "../components/blocks/forms/FormContact.svelte";
export let Hst;
let nomeempresa = "Empresa Nome";
let cargosforselect = [
  { label: "Teste", value: "Teste" },
  { label: "Teste", value: "Teste 1" },
  { label: "Teste", value: "Teste 2" },
  { label: "Teste", value: "Teste 3" },
  { label: "Teste", value: "Teste 4" },
  { label: "Teste", value: "Teste 5" }
];
function handleSubmit(data) {
  console.table(data);
}
</script>

<Hst.Story title="FormContact">
    <FormContact {cargosforselect} {nomeempresa} {handleSubmit} />

    <svelte:fragment slot="controls" />
</Hst.Story>
