<script lang="ts">
    import BannerCtaTwo from "$lib/components/blocks/banners/BannerCTATwo.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IBotao, IImage } from "../../types/fields";
    export let Hst: Hst;

    let botao: IBotao = {
        label: "Pedir orçamento",
        url: "/",
    };

    let image: IImage = {
        alt: "bgImage",
        url: "https://www.seatecnologia.com.br/documents/20181/1600996/computer.png/d7d4e635-8a28-17c1-92f1-24a53b051ed3?t=1644324687317",
    };

    let subtitulo = "Buscando uma oportunidade como Cuidador?";
    let titulo = "Trabalhando juntos para uma vida melhor ";
    let chamada =
        "Venha se especializar e conquistar o mercado que você merece.";
</script>

<Hst.Story title="BannerCTATwo">
    <BannerCtaTwo {subtitulo} {titulo} {chamada} {botao} {image} />

    <svelte:fragment slot="controls" />
</Hst.Story>
