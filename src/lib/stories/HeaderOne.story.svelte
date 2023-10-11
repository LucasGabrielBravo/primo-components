<script lang="ts">
  import HeaderOne from "$lib/components/blocks/headers/HeaderOne.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  import type { IBotao, IImage, ILink } from "../../types/fields";
  export let Hst: Hst;

  let logo: IImage = {
    alt: "teste",
    url: "https://trypyramid.com/img/pyramid-logo-black-horizontal.png",
  };

  let redessocias = [
    {
      logoredesocial: {
        alt: "",
        url: "https://www.nicepng.com/png/full/611-6115840_app-apps-instagram-instagramsticker-instagramstickers-icono-instagram-pequeo.png",
      },
      link: {
        label: "",
        url: "https://www.instagram.com/",
      },
    },
    {
      logoredesocial: {
        alt: "",
        url: "https://www.nicepng.com/png/full/611-6115840_app-apps-instagram-instagramsticker-instagramstickers-icono-instagram-pequeo.png",
      },
      link: {
        label: "",
        url: "https://www.instagram.com/",
      },
    },
    {
      logoredesocial: {
        alt: "",
        url: "https://www.nicepng.com/png/full/611-6115840_app-apps-instagram-instagramsticker-instagramstickers-icono-instagram-pequeo.png",
      },
      link: {
        label: "",
        url: "https://www.instagram.com/",
      },
    },
  ];

  let telefone: string = "+55 21 99369-6648";

  let botaoOrcamento: IBotao = {
    label: "Pedir orçamento",
    url: "/",
  };

  let links: ILink[] = [
    {
      label: "teste",
      url: "/",
    },
    {
      label: "teste2",
      url: "/",
    },
    {
      label: "teste3",
      url: "/",
    },
  ];

  let ligueChamada = "Ligue para:";
  let politica: ILink = {
    label: "Politica de privacidade",
    url: "/",
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
