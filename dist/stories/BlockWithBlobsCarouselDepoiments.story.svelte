<script>import BlockWithBlobsCarouselDepoiments from "../components/blocks/blockContent/BlockWithBlobsCarouselDepoiments.svelte";
export let Hst;
let depoimentos = [
  {
    titulobranco: "Experi\xEAncias ",
    titulosecunday: "verdadeiras",
    paragrafo: "\u201CQui dolor enim consectetur do et non ex amet culpa sintin ea non dolore. Enim minim magna anim id minim eucillum sunt dolore aliquip. Amet elit laborum culpairure incididunt adipisicing culpa amet officiaexercitation. Eu non aute velit id velit Lorem elit animpariatur.\u201D",
    autor: "Mariana da Gl\xF3ria ",
    servicocontratado: "Solicitou servi\xE7o de Cuidador de Idosos"
  },
  {
    titulobranco: "Experi\xEAncias 2 ",
    titulosecunday: "verdadeiras",
    paragrafo: "\u201CQui dolor enim consectetur do et non ex amet culpa sintin ea non dolore. Enim minim magna anim id minim eucillum sunt dolore aliquip. Amet elit laborum culpairure incididunt adipisicing culpa amet officiaexercitation. Eu non aute velit id velit Lorem elit animpariatur.\u201D",
    autor: "Mariana da Gl\xF3ria ",
    servicocontratado: "Solicitou servi\xE7o de Cuidador de Idosos"
  },
  {
    titulobranco: "Experi\xEAncias 3 ",
    titulosecunday: "verdadeiras",
    paragrafo: "\u201CQui dolor enim consectetur do et non ex amet culpa sintin ea non dolore. Enim minim magna anim id minim eucillum sunt dolore aliquip. Amet elit laborum culpairure incididunt adipisicing culpa amet officiaexercitation. Eu non aute velit id velit Lorem elit animpariatur.\u201D",
    autor: "Mariana da Gl\xF3ria ",
    servicocontratado: "Solicitou servi\xE7o de Cuidador de Idosos"
  }
];
let logo = {
  alt: "logo test",
  url: "https://trypyramid.com/img/pyramid-logo-black-horizontal.png"
};
</script>

<Hst.Story title="BlockWithBlobsCarouselDepoiments">
    <BlockWithBlobsCarouselDepoiments {depoimentos} {logo} />

    <svelte:fragment slot="controls" />
</Hst.Story>
