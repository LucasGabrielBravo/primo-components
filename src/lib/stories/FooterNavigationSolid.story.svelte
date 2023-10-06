<script lang="ts">
  import FooterNavigationSolid from "$lib/components/blocks/footers/FooterNavigationSolid.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  export let Hst: Hst;

  let logo = {
    alt: "",
    url: "https://seeklogo.com/images/B/black-company-logo-C40022C4D5-seeklogo.com.png",
  };

  let links = [
    {
      label: "Teste0",
      url: "/",
    },
    {
      label: "Teste1",
      url: "/",
    },
    {
      label: "Teste2",
      url: "/",
    },
    {
      label: "Teste3",
      url: "/",
    },
    {
      label: "Teste4",
      url: "/",
    },
  ];

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

  let textodireitos = "todos os direitos são reservados";
</script>

<Hst.Story title="FooterNavigationSolid">
  <FooterNavigationSolid {links} {logo} {redessocias} {textodireitos} />

  <svelte:fragment slot="controls" />
</Hst.Story>
