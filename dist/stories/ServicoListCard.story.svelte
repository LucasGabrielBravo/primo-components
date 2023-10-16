<script>import ServicoListCard from "../components/blocks/listCards/ServicoListCard.svelte";
export let Hst;
let titulo = "Nossos servi\xE7os";
let botao1 = {
  label: "Conheca os servi\xE7os",
  url: "/"
};
let paragrafos = [
  {
    text: "Conhe\xE7a os diversos objetivos para os quais voc\xEA pode contratar os profissionais da ampla rede da Ag\xEAncia PrimeCare. Estamos aqui para fornecer todo o suporte necess\xE1rio para cuidados especiais de idosos, crian\xE7as, p\xF3s-cir\xFArgicos e outros que precisam do acompanhamento de um profissional."
  },
  {
    text: "Conhe\xE7a os diversos objetivos para os quais voc\xEA pode contratar os profissionais da ampla rede da Ag\xEAncia PrimeCare. Estamos aqui para fornecer todo o suporte necess\xE1rio para cuidados especiais de idosos, crian\xE7as, p\xF3s-cir\xFArgicos e outros que precisam do acompanhamento de um profissional."
  }
];
let listservicos = [
  {
    image: {
      url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
      alt: "teste"
    },
    servico: "Teste"
  },
  {
    image: {
      url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
      alt: "teste"
    },
    servico: "Teste"
  },
  {
    image: {
      url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
      alt: "teste"
    },
    servico: "Teste"
  },
  {
    image: {
      url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
      alt: "teste"
    },
    servico: "Teste"
  },
  {
    image: {
      url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
      alt: "teste"
    },
    servico: "Teste"
  },
  {
    image: {
      url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
      alt: "teste"
    },
    servico: "Teste"
  },
  {
    image: {
      url: "https://www.photoshopbuzz.com/wp-content/uploads/change-color-part-of-image-psd4.jpg",
      alt: "teste"
    },
    servico: "Teste"
  }
];
</script>

<Hst.Story title="ServicoListCard">
    <ServicoListCard {titulo} {paragrafos} {listservicos} {botao1} />

    <svelte:fragment slot="controls" />
</Hst.Story>
