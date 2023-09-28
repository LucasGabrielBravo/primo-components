<script>import BlockContentImageCol from "../components/blocks/blockContent/BlockContentImageCol.svelte";
export let Hst;
let toptitulo = "toptitulo";
let titulo = "Titulo";
let subtitulo = "subtitulo";
let conteudos = [
  {
    titulo: "Lorem Ipsum",
    texto: " is simply dummy text of the printing and typesetting industry. ",
    image: {
      url: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "1"
    },
    botao: {
      label: "1",
      url: "/"
    }
  },
  {
    titulo: "Lorem Ipsum",
    texto: " is simply dummy text of the printing and typesetting industry. ",
    image: {
      alt: "3",
      url: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2047&q=80"
    },
    botao: {
      label: "3",
      url: "3"
    }
  }
];
</script>

<Hst.Story title="BlockContentImageCol">
    <BlockContentImageCol {conteudos} {subtitulo} {titulo} {toptitulo} />

    <svelte:fragment slot="controls" />
</Hst.Story>
