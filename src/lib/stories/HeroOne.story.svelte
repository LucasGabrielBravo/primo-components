<script lang="ts">
    import HeroOne from "$lib/components/blocks/heros/HeroOne.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    export let Hst: Hst;

    let titulo = "Preserve as lembranças felizes com Amor e cuidado";
    let paragrafo =
        "Somos uma rede de cuidadores de excelência especializados em atencação domiciliar e hospitalar do Rio de Janeiro.";
    let botao1 = {
        label: "Pedir orçamento",
        url: "/",
    };
    let botao2 = {
        label: "Conhecer serviços",
        url: "/",
    };

    let diferenciais = [
        {
            titulo: "Assitencia",
            descricao: "teste",
            icon: {
                alt: "Teste",
                url: "https://www.climego.com.br/images/imagem-telefonista.png",
            },
        },
        {
            titulo: "Cuidadores Treinados",
            descricao: "teste",
            icon: {
                alt: "Teste",
                url: "https://www.climego.com.br/images/imagem-telefonista.png",
            },
        },
        {
            titulo: "Plano de cuidado individualizado",
            descricao: "teste",
            icon: {
                alt: "Teste",
                url: "https://www.climego.com.br/images/imagem-telefonista.png",
            },
        },
    ];
    let backgroundimage = {
        alt: "bgImage",
        url: "https://pbahuevfmdmrbsapdggm.supabase.co/storage/v1/object/public/images/c4c2b75b-4667-45e0-861f-a0225cd8986c/1696517319675Inicio%20(6).jpg",
    };
</script>

<Hst.Story title="HeroOne">
    <HeroOne
        {botao1}
        {botao2}
        {titulo}
        {paragrafo}
        {diferenciais}
        {backgroundimage}
    />

    <svelte:fragment slot="controls" />
</Hst.Story>
