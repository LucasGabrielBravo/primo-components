<script lang="ts">
    import BlockContentImageEvenOdd from "$lib/components/blocks/blockContent/BlockContentImageEvenOdd.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IBotao, IImage } from "../../types/fields";
    export let Hst: Hst;

    interface IConteudo {
        image: IImage;
        titulo: string;
        texto: string;
        botao: IBotao;
    }

    let toptitulo = "toptitulo";
    let titulo = "Titulo";
    let subtitulo = "subtitulo";

    let conteudos: IConteudo[] = [
        {
            titulo: "Lorem Ipsum",
            texto: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: {
                url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                alt: "1",
            },

            botao: {
                label: "1",
                url: "/",
            },
        },
        {
            titulo: "Lorem Ipsum",
            texto: " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            image: {
                alt: "3",
                url: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80",
            },

            botao: {
                label: "3",
                url: "3",
            },
        },
    ];
</script>

<Hst.Story title="BlockContentImageEvenOdd">
    <BlockContentImageEvenOdd {conteudos} {subtitulo} {titulo} {toptitulo} />

    <svelte:fragment slot="controls" />
</Hst.Story>
