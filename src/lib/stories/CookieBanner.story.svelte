<script lang="ts">
    import CookieBanner from "$lib/components/CookieBanner.svelte";
    import type { Hst } from "@histoire/plugin-svelte";

    export let Hst: Hst;

    $: source = `
    import { CookieBanner } from "/index.js"

    <CookieBanner
    heading="Titulo"
    description="Descrição"
    acceptLabel="Aceitar Botão"
    rejectLabel="Rejeitar Botão"
    settingsLabel="Configurações Botão"
    closeLabel="Fechar Botão"
    editLabel="Editar Botão"
    />
  `;
</script>

<Hst.Story title="Cookie">
    <CookieBanner />
</Hst.Story>
