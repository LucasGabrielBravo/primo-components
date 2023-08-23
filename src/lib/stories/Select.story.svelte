<script lang="ts">
    import Select from "$lib/components/Select.svelte";
    import type { Hst } from "@histoire/plugin-svelte";

    export let Hst: Hst;

    let options = [
        { label: "teste", value: 0 },
        { label: "teste1", value: 1 },
        { label: "teste2", value: 2 },
        { label: "teste3", value: 3 },
    ];

    let placeholder = "Selecione";
    let label = "Assunto";
    let color = "primary";
    let border = "borderBottom";

    $: source = `
    import { Select } from "/index.js"

    let options = [
        { label: "teste", value: 0 },
        { label: "teste1", value: 1 },
        { label: "teste2", value: 2 },
        { label: "teste3", value: 3 },
    ];

    <Select
        laceholder={${placeholder}}
        label={${label}}
        color={${color}}
        border={${border}}
        {options}
      
    >
    </Select>  
  `;
</script>

<Hst.Story {source} title="Select">
    <Select {placeholder} {label} {color} {border} {options} />
    <Select {placeholder} {label} {color} {border} {options} required />
</Hst.Story>
