<script>import ListCardSurface from "../components/blocks/listCards/ListCardSurface.svelte";
export let Hst;
let list = [
  {
    icon: {
      alt: "icon",
      url: "https://cdn-icons-png.flaticon.com/512/5987/5987462.png"
    },
    number: "100",
    descricao: "Teste"
  },
  {
    icon: {
      alt: "icon",
      url: "https://cdn-icons-png.flaticon.com/512/5987/5987462.png"
    },
    number: "100",
    descricao: "Teste"
  },
  {
    icon: {
      alt: "icon",
      url: "https://cdn-icons-png.flaticon.com/512/5987/5987462.png"
    },
    number: "100",
    descricao: "Teste"
  }
];
</script>

<Hst.Story title="ListCardSurface">
    <ListCardSurface {list} />

    <svelte:fragment slot="controls" />
</Hst.Story>
