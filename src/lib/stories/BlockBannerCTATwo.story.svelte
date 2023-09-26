<script lang="ts">
    import BlockBannerCtaTwo from "$lib/components/blocks/blockContent/BlockBannerCTATwo.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    export let Hst: Hst;

    let botao = {
        label: "Pedir orçamento",
        url: "/",
    };

    let image = {
        alt: "bgImage",
        url: "https://www.seatecnologia.com.br/documents/20181/1600996/computer.png/d7d4e635-8a28-17c1-92f1-24a53b051ed3?t=1644324687317",
    };

    let subtitulo = "Buscando uma oportunidade como Cuidador?";
    let titulo = "Trabalhando juntos para uma vida melhor";
    let chamada =
        "Venha se especializar e conquistar o mercado que você merece.";
</script>

<Hst.Story title="BlockBannerCTATwo">
    <BlockBannerCtaTwo {subtitulo} {titulo} {chamada} {botao} {image} />

    <svelte:fragment slot="controls" />
</Hst.Story>
