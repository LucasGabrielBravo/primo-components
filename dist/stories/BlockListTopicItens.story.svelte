<script>import BlockListTopicItens from "../components/blocks/blockContent/BlockListTopicItens.svelte";
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
</script>

<Hst.Story title="BlockListTopicItens">
    <BlockListTopicItens {items} />

    <svelte:fragment slot="controls" />
</Hst.Story>
