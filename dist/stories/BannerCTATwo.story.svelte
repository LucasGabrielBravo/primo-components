<script>import BannerCtaTwo from "../components/blocks/banners/BannerCTATwo.svelte";
export let Hst;
let botao = {
  label: "Pedir or\xE7amento",
  url: "/"
};
let image = {
  alt: "bgImage",
  url: "https://www.seatecnologia.com.br/documents/20181/1600996/computer.png/d7d4e635-8a28-17c1-92f1-24a53b051ed3?t=1644324687317"
};
let subtitulo = "Buscando uma oportunidade como Cuidador?";
let titulo = "Trabalhando juntos para uma vida melhor ";
let chamada = "Venha se especializar e conquistar o mercado que voc\xEA merece.";
</script>

<Hst.Story title="BannerCTATwo">
    <BannerCtaTwo {subtitulo} {titulo} {chamada} {botao} {image} />

    <svelte:fragment slot="controls" />
</Hst.Story>
