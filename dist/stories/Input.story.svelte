<script>import Input from "../components/Input.svelte";
let color = "primary";
let border = "borderBottom";
export let Hst;
$:
  source = `
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
