<script lang="ts">
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import { setupAnimations } from "$lib/utils/setupAnimation";
  import { onMount } from "svelte";
  import type { IParagrafo } from "../../../../types/fields";

  export let items: IParagrafo[];

  onMount(() => {
    setupAnimations();
  });
</script>

<div>
  <ContainerPage>
    <ul class="lista-items">
      {#each items as item, i}
        <li class="to-up-delay">
          <span class="item-dot">•</span>
          <span class="item-text">{item.text}</span>
        </li>
      {/each}
    </ul>
  </ContainerPage>
</div>

<style lang="postcss">
  .lista-items {
    @apply grid grid-cols-1 md:grid-cols-3 gap-8 py-8;
  }
  .item-dot {
    @apply font-bold text-surface-900;
  }
  .item-text {
    @apply text-surface-900;
  }
</style>
