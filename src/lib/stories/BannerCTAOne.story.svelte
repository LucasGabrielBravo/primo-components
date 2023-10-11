<script lang="ts">
    import BannerCtaOne from "$lib/components/blocks/banners/BannerCTAOne.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IBotao, IImage, IParagrafo } from "../../types/fields";
    export let Hst: Hst;

    let titulo = "Titulo";
    let paragrafos: IParagrafo[] = [
        {
            text: "Somos uma rede de cuidadores de excelência especializados em atencação domiciliar e hospitalar do Rio de Janeiro.",
        },
        {
            text: "Seja para cuidados de longo prazo ou assistência pós-operatória, a Agência PrimeCare está pronta para fornecer cuidados de qualidade, confiança e compaixão, garantindo a tranquilidade que você e seus entes queridos merecem.",
        },
    ];

    let botao1: IBotao = {
        label: "Pedir orçamento",
        url: "/",
    };
    let backgroundimage: IImage = {
        alt: "bgImage",
        url: "https://i.vimeocdn.com/video/1511435190-d10b34fe0a47fc8ca947d26f1b81ff7fc037a9dcc2757087b348bc8e03bd5fc7-d_640x360.jpg",
    };
</script>

<Hst.Story title="BannerCTAOne">
    <BannerCtaOne {botao1} {titulo} {paragrafos} {backgroundimage} />

    <svelte:fragment slot="controls" />
</Hst.Story>
