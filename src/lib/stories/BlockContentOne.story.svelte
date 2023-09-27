<script lang="ts">
    import BlockContentOne from "$lib/components/blocks/blockContent/BlockContentOne.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IImage, IParagrafo } from "../../types/fields";
    export let Hst: Hst;

    let titulo = "Texto";
    let paragrafo =
        "A Agência PrimeCare acompanha os cuidados desde idosos acrianças e pessoas com necessidades especiais como pós e pré-operatório crianças e pessoas com necessidades especiai como pós e pré-operatóri";
    let listCuidados: IParagrafo[] = [
        { text: "a" },
        { text: "a" },
        { text: "a" },
        { text: "a" },
    ];
    let botao1 = { label: "Teste", url: "/" };
    let imageGrande: IImage = {
        url: "https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg",
        alt: "test",
    };
    let imagePequena: IImage = {
        url: "https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg",
        alt: "test",
    };
</script>

<Hst.Story title="BlockContentOne">
    <BlockContentOne
        {titulo}
        {paragrafo}
        {listCuidados}
        {imageGrande}
        {botao1}
        {imagePequena}
    />

    <svelte:fragment slot="controls" />
</Hst.Story>
