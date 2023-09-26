<script>import RoundedList from "../components/blocks/listCards/RoundedList.svelte";
export let Hst;
let titulo = "Nossos servi\xE7os";
let paragrafo = "Nossos clientes e familiares ganham descontos em nossos lugares preferidos.";
let listparceiros = [
  {
    image: {
      url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
      alt: "teste"
    },
    nome: "Teste",
    categoria: "teste"
  },
  {
    image: {
      url: "",
      alt: ""
    },
    nome: "Teste",
    categoria: "teste"
  },
  {
    image: {
      url: "https://s3-alpha-sig.figma.com/img/23bb/c107/e9ac2434e4d68f1c96f906668db3a9c3?Expires=1696809600&Signature=hH98aZDhpm~X4AZgdBNIcv6mjm~rrwVilajJd~J3qZC7RQCSBsRgZKs49x3ZIovdebvuh1k4NBtQI-q7qLa2S~48dn-dYVIvGGHFQxpcrXDr7DYV~TvTBpptV3t9H~H-HC~hq0E0rdarm-wn9r5rIG-RDUqa5cJ36fSBrf6RV44e4SMKsT8DtnaNtXd0V3lQKwvgIortTJJIgQpW-sHS4FNdKwHyThlPDAd1sVMZkjUte9CnHYNULrQhdLc~Vm4MC6KjSXUG2VBzq9t2A9HwTf9Cn4TKLFZwlnnEevL2iMOlXD8xjmUFH3PQvrNDi02Btd7P9emjIwR-3Rbl3atvHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      alt: "teste"
    },
    nome: "Teste",
    categoria: "teste"
  },
  {
    image: {
      url: "",
      alt: ""
    },
    nome: "Teste",
    categoria: "teste"
  }
];
</script>

<Hst.Story title="RoundedList">
    <RoundedList {titulo} {paragrafo} {listparceiros} />

    <svelte:fragment slot="controls" />
</Hst.Story>
