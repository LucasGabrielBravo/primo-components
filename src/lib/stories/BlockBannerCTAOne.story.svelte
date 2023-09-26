<script lang="ts">
    import BlockBannerCtaOne from "$lib/components/blocks/blockContent/BlockBannerCTAOne.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    export let Hst: Hst;

    let titulo = "Titulo";
    let paragrafos = [
        {
            paragrafo:
                "Somos uma rede de cuidadores de excelência especializados em atencação domiciliar e hospitalar do Rio de Janeiro.",
        },
        {
            paragrafo:
                "Somos uma rede de cuidadores de excelência especializados em atencação domiciliar e hospitalar do Rio de Janeiro.",
        },
    ];

    let botao1 = {
        label: "Pedir orçamento",
        url: "/",
    };
    let backgroundimage = {
        alt: "bgImage",
        url: "https://i.vimeocdn.com/video/1511435190-d10b34fe0a47fc8ca947d26f1b81ff7fc037a9dcc2757087b348bc8e03bd5fc7-d_640x360.jpg",
    };
</script>

<Hst.Story title="BlockBannerCTAOne">
    <BlockBannerCtaOne {botao1} {titulo} {paragrafos} {backgroundimage} />

    <svelte:fragment slot="controls" />
</Hst.Story>
