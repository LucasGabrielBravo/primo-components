<script lang="ts">
    import BlockWithBlobs from "$lib/components/blocks/blockContent/BlockWithBlobs.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    export let Hst: Hst;

    let titulobranco = "Experiências ";
    let titulosecunday = "verdadeiras";
    let paragrafo =
        "“Qui dolor enim consectetur do et non ex amet culpa sintin ea non dolore. Enim minim magna anim id minim eucillum sunt dolore aliquip. Amet elit laborum culpairure incididunt adipisicing culpa amet officiaexercitation. Eu non aute velit id velit Lorem elit animpariatur.”";
    let autor = "Mariana da Glória ";
    let servicocontratado = "Solicitou serviço de Cuidador de Idosos";
</script>

<Hst.Story title="BlockWithBlobs">
    <BlockWithBlobs
        {titulobranco}
        {titulosecunday}
        {paragrafo}
        {autor}
        {servicocontratado}
    />

    <svelte:fragment slot="controls" />
</Hst.Story>
