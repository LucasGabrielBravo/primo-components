<script lang="ts">
    import HeroImageGradientWithLogo from "$lib/components/blocks/heros/HeroImageGradientWithLogo.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IImage } from "../../types/fields";
    export let Hst: Hst;

    let logo: IImage = {
        alt: "",
        url: "https://trypyramid.com/img/pyramid-logo-black-horizontal.png",
    };

    let backgroundimage: IImage = {
        alt: "",
        url: "https://cdn.pixabay.com/photo/2023/08/25/20/59/town-8213713_1280.jpg",
    };
</script>

<Hst.Story title="HeroImageGradientWithLogo">
    <HeroImageGradientWithLogo {logo} {backgroundimage} />

    <svelte:fragment slot="controls" />
</Hst.Story>
