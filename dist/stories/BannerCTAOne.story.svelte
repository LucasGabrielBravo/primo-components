<script>import BannerCtaOne from "../components/blocks/banners/BannerCTAOne.svelte";
export let Hst;
let titulo = "Titulo";
let paragrafos = [
  {
    text: "Somos uma rede de cuidadores de excel\xEAncia especializados em atenca\xE7\xE3o domiciliar e hospitalar do Rio de Janeiro."
  },
  {
    text: "Seja para cuidados de longo prazo ou assist\xEAncia p\xF3s-operat\xF3ria, a Ag\xEAncia PrimeCare est\xE1 pronta para fornecer cuidados de qualidade, confian\xE7a e compaix\xE3o, garantindo a tranquilidade que voc\xEA e seus entes queridos merecem."
  }
];
let botao1 = {
  label: "Pedir or\xE7amento",
  url: "/"
};
let backgroundimage = {
  alt: "bgImage",
  url: "https://i.vimeocdn.com/video/1511435190-d10b34fe0a47fc8ca947d26f1b81ff7fc037a9dcc2757087b348bc8e03bd5fc7-d_640x360.jpg"
};
</script>

<Hst.Story title="BannerCTAOne">
    <BannerCtaOne {botao1} {titulo} {paragrafos} {backgroundimage} />

    <svelte:fragment slot="controls" />
</Hst.Story>
