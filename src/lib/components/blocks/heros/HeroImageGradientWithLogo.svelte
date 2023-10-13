<script lang="ts">
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import { onMount } from "svelte";
  import type { IImage } from "../../../../types/fields";
  import { setupAnimations } from "$lib/utils/setupAnimation";

  export let backgroundimage: IImage;
  export let logo: IImage;

  onMount(() => {
    setupAnimations();
  });
</script>

<div class="box">
  <div class="pelicula-white" />
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
        <img class="logo" src={logo.url} alt={logo.alt} id="from-bot" />
      </div>
    </ContainerPage>
  </div>
</div>

<style lang="postcss">
  .box {
    @apply relative  h-[50vh]  md:h-[65vh] items-center;
  }
  .img-fundo {
    @apply absolute inset-0 h-full w-full object-cover object-center lg:object-top;
    -webkit-mask-image: linear-gradient(to top, transparent 20%, #000 100%);
  }
  .conteudo {
    @apply relative h-full flex;
  }
  .logo-box {
    @apply flex w-full h-full items-center justify-center;
  }
  .logo {
    @apply w-[70%] sm:w-[50%] md:w-[20%] h-auto drop-shadow-lg;
  }
  .pelicula {
    @apply flex w-full h-full  absolute;
    background-image: linear-gradient(rgba(50, 167, 252, 0.2), transparent);
  }
  .pelicula-white {
    @apply flex w-full h-full  absolute;
    background-image: linear-gradient(rgba(255, 255, 255, 1), transparent);
  }
</style>
