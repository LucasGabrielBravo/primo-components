<script lang="ts">
    import Input from "$lib/components/Input.svelte";
    import type { Hst } from "@histoire/plugin-svelte";

    let color: string & (typeof Input)["prototype"]["$$prop_def"]["color"] =
        "primary";
    let border: string & (typeof Input)["prototype"]["$$prop_def"]["border"] =
        "borderBottom";

    export let Hst: Hst;

    $: source = `
    import { Input } from "/index.js"

    <Button
      color="${color}"
      border="${border}"
    >
  `;
</script>

<Hst.Story title="Input">
    <Input
        name="nomeCompleto"
        label="Nome Completo"
        color="primary"
        border="borderBottom"
        placeholder="Nome Completo"
    />

    <Input
        name="Telefone"
        label="Telefone"
        color="primary"
        border="borderBottom"
        mask="(99)99999-9999"
    />
    <Input
        name="TextArea"
        label="TextArea"
        required
        color="primary"
        border="borderBottom"
        type="textarea"
        placeholder="Digite sua mensagem aqui..."
    />
    <Input
        name="Checked"
        label="Checked"
        color="primary"
        required
        border="borderBottom"
        type="checkbox"
    />

    <svelte:fragment slot="controls">
        <Hst.Select
            bind:value={color}
            options={["default", "primary", "secondary", "tertiary"]}
            title="Color"
        />
        <Hst.Select
            bind:value={border}
            options={["borderBottom"]}
            title="Size"
        />
    </svelte:fragment>
</Hst.Story>
