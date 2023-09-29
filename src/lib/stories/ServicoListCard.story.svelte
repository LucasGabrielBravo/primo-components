<script lang="ts">
    import ServicoListCard from "$lib/components/blocks/listCards/ServicoListCard.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IParagrafo } from "../../types/fields";
    export let Hst: Hst;

    let titulo = "Nossos serviços";

    let paragrafos: IParagrafo[] = [
        {
            text: "Conheça os diversos objetivos para os quais você pode contratar os profissionais da ampla rede da Agência PrimeCare. Estamos aqui para fornecer todo o suporte necessário para cuidados especiais de idosos, crianças, pós-cirúrgicos e outros que precisam do acompanhamento de um profissional.",
        },
        {
            text: "Conheça os diversos objetivos para os quais você pode contratar os profissionais da ampla rede da Agência PrimeCare. Estamos aqui para fornecer todo o suporte necessário para cuidados especiais de idosos, crianças, pós-cirúrgicos e outros que precisam do acompanhamento de um profissional.",
        },
    ];

    let listservicos = [
        {
            image: {
                url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                alt: "teste",
            },
            servico: "Teste",
        },
        {
            image: {
                url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                alt: "teste",
            },
            servico: "Teste",
        },
        {
            image: {
                url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                alt: "teste",
            },
            servico: "Teste",
        },
        {
            image: {
                url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                alt: "teste",
            },
            servico: "Teste",
        },
        {
            image: {
                url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                alt: "teste",
            },
            servico: "Teste",
        },
        {
            image: {
                url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                alt: "teste",
            },
            servico: "Teste",
        },
        {
            image: {
                url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                alt: "teste",
            },
            servico: "Teste",
        },
        {
            image: {
                url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
                alt: "teste",
            },
            servico: "Teste",
        },
    ];
</script>

<Hst.Story title="ServicoListCard">
    <ServicoListCard {titulo} {paragrafos} {listservicos} />

    <svelte:fragment slot="controls" />
</Hst.Story>
