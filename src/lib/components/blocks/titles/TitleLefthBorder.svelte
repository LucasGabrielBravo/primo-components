<script lang="ts">
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import { onMount } from "svelte";
  import type { IParagrafo } from "../../../../types/fields";
  import { setupAnimations } from "$lib/utils/setupAnimation";
  export let titulos: IParagrafo[];

  onMount(() => {
    setupAnimations();
  });
</script>

<ContainerPage>
  <div class="box-title">
    <div class="chamada-title" id="to-right">
      {#each titulos as titulo, i}
        <span>{titulo.text}</span>
      {/each}
    </div>
  </div>
</ContainerPage>

<style lang="postcss">
  .box-title {
    @apply flex flex-col w-full gap-8 py-8;
  }
  .chamada-title {
    @apply border-l-4 border-secondary-500 pl-6 font-bold text-primary-500 text-2xl md:text-3xl max-w-6xl flex flex-col;
  }
</style>
