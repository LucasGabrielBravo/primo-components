<script>import CookieBanner from "../components/CookieBanner.svelte";
export let Hst;
$:
  source = `
    import { CookieBanner } from "/index.js"

    <CookieBanner
    heading="Titulo"
    description="Descri\xE7\xE3o"
    acceptLabel="Aceitar Bot\xE3o"
    rejectLabel="Rejeitar Bot\xE3o"
    settingsLabel="Configura\xE7\xF5es Bot\xE3o"
    closeLabel="Fechar Bot\xE3o"
    editLabel="Editar Bot\xE3o"
    />
  `;
</script>

<Hst.Story title="Cookie">
    <CookieBanner />
</Hst.Story>
