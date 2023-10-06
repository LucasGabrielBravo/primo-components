<script lang="ts">
    import BlockWithBlobsCarouselDepoiments from "$lib/components/blocks/blockContent/BlockWithBlobsCarouselDepoiments.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IImage } from "../../types/fields";
    export let Hst: Hst;

    let depoimentos = [
        {
            titulobranco: "Experiências ",
            titulosecunday: "verdadeiras",
            paragrafo:
                "“Qui dolor enim consectetur do et non ex amet culpa sintin ea non dolore. Enim minim magna anim id minim eucillum sunt dolore aliquip. Amet elit laborum culpairure incididunt adipisicing culpa amet officiaexercitation. Eu non aute velit id velit Lorem elit animpariatur.”",
            autor: "Mariana da Glória ",
            servicocontratado: "Solicitou serviço de Cuidador de Idosos",
        },
        {
            titulobranco: "Experiências 2 ",
            titulosecunday: "verdadeiras",
            paragrafo:
                "“Qui dolor enim consectetur do et non ex amet culpa sintin ea non dolore. Enim minim magna anim id minim eucillum sunt dolore aliquip. Amet elit laborum culpairure incididunt adipisicing culpa amet officiaexercitation. Eu non aute velit id velit Lorem elit animpariatur.”",
            autor: "Mariana da Glória ",
            servicocontratado: "Solicitou serviço de Cuidador de Idosos",
        },
        {
            titulobranco: "Experiências 3 ",
            titulosecunday: "verdadeiras",
            paragrafo:
                "“Qui dolor enim consectetur do et non ex amet culpa sintin ea non dolore. Enim minim magna anim id minim eucillum sunt dolore aliquip. Amet elit laborum culpairure incididunt adipisicing culpa amet officiaexercitation. Eu non aute velit id velit Lorem elit animpariatur.”",
            autor: "Mariana da Glória ",
            servicocontratado: "Solicitou serviço de Cuidador de Idosos",
        },
    ];

    let logo: IImage = {
        alt: "logo test",
        url: "https://trypyramid.com/img/pyramid-logo-black-horizontal.png",
    };
</script>

<Hst.Story title="BlockWithBlobsCarouselDepoiments">
    <BlockWithBlobsCarouselDepoiments {depoimentos} {logo} />

    <svelte:fragment slot="controls" />
</Hst.Story>
