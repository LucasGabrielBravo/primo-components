<script>import ContainerPage from "../../ContainerPage.svelte";
import { onMount } from "svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
export let items;
onMount(() => {
  setupAnimations();
});
</script>

<div>
  <ContainerPage>
    <ul class="lista-items">
      {#each items as item, i}
        <li class="" id="to-up-delay">
          <span class="item-dot">•</span>
          <span class="item-text">{item.text}</span>
        </li>
      {/each}
    </ul>
  </ContainerPage>
</div>

<style>
  .lista-items {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem
}
@media (min-width: 768px) {
    .lista-items {
        grid-template-columns: repeat(3, minmax(0, 1fr))
    }
}
  .item-dot {
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-900, 77 82 86) / var(--tw-text-opacity))
}
  .item-text {
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-900, 77 82 86) / var(--tw-text-opacity))
}
</style>
