<script>import BannerImage from "../components/blocks/banners/BannerImage.svelte";
export let Hst;
let image = {
  alt: "teste",
  url: "https://cdn.pixabay.com/photo/2015/03/16/10/59/sunset-675847_1280.jpg"
};
</script>

<Hst.Story title="BannerImage">
  <BannerImage {image} />

  <svelte:fragment slot="controls" />
</Hst.Story>
