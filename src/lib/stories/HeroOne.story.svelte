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
            titulo: "Assitencia",
            descricao: "teste",
            icon: {
                alt: "Teste",
                url: "https://www.climego.com.br/images/imagem-telefonista.png",
            },
        },
        {
            titulo: "Assitencia",
            descricao: "teste",
            icon: {
                alt: "Teste",
                url: "https://www.climego.com.br/images/imagem-telefonista.png",
            },
        },
    ];
    let backgroundimage = {
        alt: "bgImage",
        url: "https://s3-alpha-sig.figma.com/img/170e/405d/dbc52a03b7d1bac197738a4bbb48ac03?Expires=1696204800&Signature=F2Z2vzLdav1KotAvhTYVS73V~ROH9goZO1DW2XMW3GJ0mhj8ceIBM6RKdnBfIy04Gje0Vd~ZCLVAsR5kmpoQxEXz9Cbs7BD9GUA7kcChrqwhzAYR10VJ9sZOMpmSkdcOo4m1rDp1KBGlfb3osnwX80f4XhdRB2q6Of4W-Yi-~MUI2XyU1pIQ9KlclJgzMnU8QdKnfJrQ9ksdVhXt3BeLRToujs6~TMz3LCkcwDEPTlz0ZLyil4C5yeOisNWa1YckrQpATdNkLpmuR~otzp9mI-aFZI3-ArebwCP-5VB8gXmOH2aXf2TMG~N-QolQvWArY6Ip3CjOj875IE9rcpSiWQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
