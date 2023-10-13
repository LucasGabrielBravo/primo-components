<script>import HeaderOne from "../components/blocks/headers/HeaderOne.svelte";
export let Hst;
let logo = {
  alt: "teste",
  url: "https://pbahuevfmdmrbsapdggm.supabase.co/storage/v1/object/public/images/c4c2b75b-4667-45e0-861f-a0225cd8986c/1696516473503Primecare.png"
  // url: "https://trypyramid.com/img/pyramid-logo-black-horizontal.png",
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
let telefone = {
  label: "+55 21 993696648",
  url: "+5521993696648"
};
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
let politica = {
  label: "Politica de privacidade",
  url: "/"
};
</script>

<Hst.Story title="HeaderOne">
  <HeaderOne
    {logo}
    {telefone}
    {botaoOrcamento}
    {ligueChamada}
    {links}
    {redessocias}
    {politica}
  />

  <svelte:fragment slot="controls" />
</Hst.Story>
