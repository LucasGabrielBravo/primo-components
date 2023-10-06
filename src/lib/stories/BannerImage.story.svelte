<script lang="ts">
  import BannerImage from "$lib/components/blocks/banners/BannerImage.svelte";
  import type { Hst } from "@histoire/plugin-svelte";
  import type { IImage } from "../../types/fields";
  export let Hst: Hst;

  let image: IImage = {
    alt: "teste",
    url: "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg",
  };
</script>

<Hst.Story title="BannerImage">
  <BannerImage {image} />

  <svelte:fragment slot="controls" />
</Hst.Story>
