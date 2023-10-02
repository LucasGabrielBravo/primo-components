<script>import ListCardPrimaryFull from "../components/blocks/listCards/ListCardPrimaryFull.svelte";
export let Hst;
let list = [
  {
    icon: {
      alt: "icon",
      url: "https://www.essenzahotel.com.br/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg"
    },
    number: "100",
    descricao: "Teste"
  },
  {
    icon: {
      alt: "icon",
      url: "https://www.essenzahotel.com.br/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg"
    },
    number: "100",
    descricao: "Teste"
  },
  {
    icon: {
      alt: "icon",
      url: "https://www.essenzahotel.com.br/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg"
    },
    number: "100",
    descricao: "Teste"
  }
];
</script>

<Hst.Story title="ListCardPrimaryFull">
    <ListCardPrimaryFull {list} />

    <svelte:fragment slot="controls" />
</Hst.Story>
