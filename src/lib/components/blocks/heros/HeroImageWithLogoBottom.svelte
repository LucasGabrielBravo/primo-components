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
  <img
    class="img-fundo"
    data-key="backgroundimage"
    src={backgroundimage.url}
    alt={backgroundimage.alt}
  />
  <!-- <div class="pelicula" /> -->

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
  }
  .conteudo {
    @apply relative h-full flex;
  }
  .logo-box {
    @apply flex w-full h-full items-end justify-start;
  }
  .logo {
    @apply w-[70%] sm:w-[50%] md:w-[20%] h-auto mb-14;
  }
  /* .pelicula {
        @apply flex w-full h-full  absolute;
        background-image: linear-gradient(#fff, transparent);
    } */
</style>
