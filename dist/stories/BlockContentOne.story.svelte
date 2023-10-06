<script>import BlockContentOne from "../components/blocks/blockContent/BlockContentOne.svelte";
export let Hst;
let titulo = "Texto";
let paragrafo = "A Ag\xEAncia PrimeCare acompanha os cuidados desde idosos acrian\xE7as e pessoas com necessidades especiais como p\xF3s e pr\xE9-operat\xF3rio crian\xE7as e pessoas com necessidades especiai como p\xF3s e pr\xE9-operat\xF3ri";
let listCuidados = [
  { text: "a" },
  { text: "a" },
  { text: "a" },
  { text: "a" }
];
let botao1 = { label: "Teste", url: "/" };
let imageGrande = {
  url: "https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg",
  alt: "test"
};
let imagePequena = {
  url: "https://miro.medium.com/v2/resize:fit:1400/1*YMJDp-kqus7i-ktWtksNjg.jpeg",
  alt: "test"
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
