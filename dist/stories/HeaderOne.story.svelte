<script>import HeaderOne from "../components/blocks/headers/HeaderOne.svelte";
export let Hst;
let logo = {
  alt: "teste",
  url: "https://trypyramid.com/img/pyramid-logo-black-horizontal.png"
};
let redessocias = [
  {
    logoredesocial: {
      alt: "",
      url: "https://www.nicepng.com/png/full/611-6115840_app-apps-instagram-instagramsticker-instagramstickers-icono-instagram-pequeo.png"
    },
    link: {
      label: "",
      url: "https://www.instagram.com/"
    }
  },
  {
    logoredesocial: {
      alt: "",
      url: "https://www.nicepng.com/png/full/611-6115840_app-apps-instagram-instagramsticker-instagramstickers-icono-instagram-pequeo.png"
    },
    link: {
      label: "",
      url: "https://www.instagram.com/"
    }
  },
  {
    logoredesocial: {
      alt: "",
      url: "https://www.nicepng.com/png/full/611-6115840_app-apps-instagram-instagramsticker-instagramstickers-icono-instagram-pequeo.png"
    },
    link: {
      label: "",
      url: "https://www.instagram.com/"
    }
  }
];
let telefone = "+55 21 99369-6648";
let botaoOrcamento = {
  label: "Pedir or\xE7amento",
  url: "/"
};
let links = [
  {
    label: "teste",
    url: "/"
  },
  {
    label: "teste2",
    url: "/"
  },
  {
    label: "teste3",
    url: "/"
  }
];
let ligueChamada = "Ligue para:";
</script>

<Hst.Story title="HeaderOne">
  <HeaderOne
    {logo}
    {telefone}
    {botaoOrcamento}
    {ligueChamada}
    {links}
    {redessocias}
  />

  <svelte:fragment slot="controls" />
</Hst.Story>
