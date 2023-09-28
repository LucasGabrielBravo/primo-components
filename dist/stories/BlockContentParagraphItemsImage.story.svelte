<script>import BlockContentParagraphItemsImage from "../components/blocks/blockContent/BlockContentParagraphItemsImage.svelte";
export let Hst;
let items = [
  {
    text: "(injected humour and the like)."
  },
  {
    text: "(injected humour and the like)."
  },
  {
    text: "(injected humour and the like)."
  },
  {
    text: "(injected humour and the like)."
  },
  {
    text: "(injected humour and the like)."
  },
  {
    text: "(injected humour and the like)."
  }
];
let titulo = "Titulo";
let titulolista = "Titulo Lista de Itens";
let image = {
  alt: "",
  url: "https://pbahuevfmdmrbsapdggm.supabase.co/storage/v1/object/public/images/eb8bb6ac-4947-46d0-b310-0ec650378926/1687197653497logolarenjaAnimated.svg"
};
let paragrafo = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
</script>

<Hst.Story title="BlockContentParagraphItemsImage">
    <BlockContentParagraphItemsImage
        {items}
        {titulo}
        {image}
        {paragrafo}
        {titulolista}
    />

    <svelte:fragment slot="controls" />
</Hst.Story>
