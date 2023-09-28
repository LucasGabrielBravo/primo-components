<script lang="ts">
    import FormContact from "$lib/components/blocks/forms/FormContact.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    export let Hst: Hst;

    let nomeempresa = "Empresa Nome";
    let cargosforselect = [
        { label: "Teste", value: "Teste" },
        { label: "Teste", value: "Teste" },
        { label: "Teste", value: "Teste" },
        { label: "Teste", value: "Teste" },
        { label: "Teste", value: "Teste" },
        { label: "Teste", value: "Teste" },
    ];
</script>

<Hst.Story title="FormContact">
    <FormContact {cargosforselect} {nomeempresa} />

    <svelte:fragment slot="controls" />
</Hst.Story>
