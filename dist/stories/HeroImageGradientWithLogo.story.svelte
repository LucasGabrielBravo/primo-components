<script>import HeroImageGradientWithLogo from "../components/blocks/heros/HeroImageGradientWithLogo.svelte";
export let Hst;
let logo = {
  alt: "",
  url: "https://trypyramid.com/img/pyramid-logo-black-horizontal.png"
};
let backgroundimage = {
  alt: "",
  url: "https://cdn.pixabay.com/photo/2023/08/25/20/59/town-8213713_1280.jpg"
};
</script>

<Hst.Story title="HeroImageGradientWithLogo">
    <HeroImageGradientWithLogo {logo} {backgroundimage} />

    <svelte:fragment slot="controls" />
</Hst.Story>
