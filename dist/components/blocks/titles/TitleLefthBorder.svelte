<script>import ContainerPage from "../../ContainerPage.svelte";
import { onMount } from "svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
export let titulos;
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

<style>
  .box-title {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem
}
  .chamada-title {
    display: flex;
    max-width: 72rem;
    flex-direction: column;
    border-left-width: 4px;
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-border-opacity));
    padding-left: 1.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {
    .chamada-title {
        font-size: 1.875rem;
        line-height: 2.25rem
    }
}
</style>
