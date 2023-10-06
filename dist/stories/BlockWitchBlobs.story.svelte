<script>import BlockWithBlobs from "../components/blocks/blockContent/BlockWithBlobs.svelte";
export let Hst;
let titulobranco = "Experi\xEAncias ";
let titulosecunday = "verdadeiras";
let paragrafo = "\u201CQui dolor enim consectetur do et non ex amet culpa sintin ea non dolore. Enim minim magna anim id minim eucillum sunt dolore aliquip. Amet elit laborum culpairure incididunt adipisicing culpa amet officiaexercitation. Eu non aute velit id velit Lorem elit animpariatur.\u201D";
let autor = "Mariana da Gl\xF3ria ";
let servicocontratado = "Solicitou servi\xE7o de Cuidador de Idosos";
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
