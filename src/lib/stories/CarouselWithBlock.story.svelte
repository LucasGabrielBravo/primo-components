<script lang="ts">
  import CarouselWithDepoiments from "$lib/components/CarouselWithDepoiments.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  import type { IImage } from "../../types/fields";
  export let Hst: Hst;

  let hiddenArrows = false;
  let autoPlay = false;
  let interval = 5000;

  let logo: IImage = {
    url: "https://trypyramid.com/img/pyramid-logo-black-horizontal.png",
    alt: "logo",
  };

  let depoimentos = [
    {
      titulobranco: "Titulo",
      titulosecunday: "TituloSecondary",
      paragrafo:
        "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      autor: "Lorem Ipsum",
      servicocontratado: "Teste Lorem Ipsum",
    },
  ];

  $: source = `
    import { Carousel } from "/index.js"

    <div class="h-60 w-64">
      <Carousel
        hiddenArrows={${hiddenArrows}}
        autoPlay={${autoPlay}}
        interval={${interval}}
      />  
    </div>
  `;
</script>

<Hst.Story {source} title="CarouselWithDepoiments">
  <div class="frame">
    <CarouselWithDepoiments {depoimentos} {logo} />
  </div>

  <svelte:fragment slot="controls">
    <Hst.Checkbox bind:value={autoPlay} title="Auto play" />
    <Hst.Number bind:value={interval} title="Interval auto play" />
    <Hst.Checkbox bind:value={hiddenArrows} title="Hidden Arrows" />
  </svelte:fragment>
</Hst.Story>

<style lang="postcss">
  .frame {
    @apply h-60 w-64;
  }
</style>
