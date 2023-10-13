<script>import ContainerPage from "../../ContainerPage.svelte";
import { onMount } from "svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
export let paragrafos;
onMount(() => {
  setupAnimations();
});
</script>

<ContainerPage>
  <div class="paragrafos">
    {#each paragrafos as item}
      <span class="paragrafo" id="to-up">{item.text}</span>
    {/each}
  </div>
</ContainerPage>

<style>
  .paragrafos {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 1rem;
    overflow: hidden;
    padding-top: 2rem;
    padding-bottom: 2rem
}
@media (min-width: 768px) {
    .paragrafos {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
  .paragrafo {
    font-size: 1.125rem;
    font-weight: 400;
    line-height: 1.75rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-900, 77 82 86) / var(--tw-text-opacity))
}
</style>
