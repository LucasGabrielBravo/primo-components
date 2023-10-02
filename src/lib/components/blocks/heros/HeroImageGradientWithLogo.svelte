<script lang="ts">
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import type { IImage } from "../../../../types/fields";

    export let backgroundimage: IImage;
    export let logo: IImage;
</script>

<div class="box">
    <img
        class="img-fundo"
        data-key="backgroundimage"
        src={backgroundimage.url}
        alt={backgroundimage.alt}
    />
    <div class="pelicula" />

    <div class="conteudo">
        <ContainerPage>
            <div class="logo-box">
                <img class="logo" src={logo.url} alt={logo.alt} />
            </div>
        </ContainerPage>
    </div>
</div>

<style lang="postcss">
    .box {
        @apply relative  h-[50vh]  md:h-[65vh] items-center;
    }
    .img-fundo {
        @apply absolute inset-0 h-full w-full object-cover object-center;
        -webkit-mask-image: linear-gradient(to top, transparent 20%, #000 100%);
    }
    .conteudo {
        @apply relative h-full flex;
    }
    .logo-box {
        @apply flex w-full h-full items-center justify-center;
    }
    .logo {
        @apply sm:w-[20%] h-auto;
    }
    .pelicula {
        @apply flex w-full h-full  absolute;
        background-image: linear-gradient(#32a7fc, transparent);
    }
</style>
