<script lang="ts">
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import { setupAnimations } from "$lib/utils/setupAnimation";
  import { onMount } from "svelte";
  export let titulo: string;
  export let subtitulo: string;
  onMount(() => {
    setupAnimations();
  });
</script>

<ContainerPage>
  <div class="box-title">
    <span class="chamada-title" id="to-right">
      {titulo}
    </span>
    <span class="chamada-subtitle" id="to-right-delay">{subtitulo}</span>
  </div>
</ContainerPage>

<style lang="postcss">
  .box-title {
    @apply flex flex-col w-full gap-8 py-8 justify-start items-start;
  }
  .chamada-title {
    @apply pr-6 font-bold text-primary-500 text-2xl md:text-3xl  max-w-6xl;
  }
  .chamada-subtitle {
    @apply font-light text-base md:text-lg max-w-2xl text-left;
  }
</style>
