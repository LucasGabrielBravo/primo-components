<script>import { browser } from "$app/environment";
import ContainerPage from "../../ContainerPage.svelte";
import { onMount } from "svelte";
import Countup from "svelte-countup";
export let list;
</script>

<div class="ajust">
  <ContainerPage>
    <div class="fundo-cards">
      {#each list as item, i}
        <div class="card">
          <img
            src={item.icon.url}
            alt={item.icon.alt}
            data-key="list[{i}].item.icon"
            class="img-card"
          />
          <span class="number" data-key="list[{i}].item.number">
            {#if browser}
              <Countup
                initial={0}
                value={parseInt(item.number)}
                duration={1000}
              />
            {/if}
          </span>
          <span class="descricao" data-key="list[{i}].item.descricao"
            >{@html item.descricao}</span
          >
        </div>
      {/each}
    </div>
  </ContainerPage>
</div>

<style>
  .fundo-cards {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-radius: 0.375rem;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-surface-300, 214 218 220) / var(--tw-bg-opacity));
    padding: 0.5rem
}
@media (min-width: 768px) {
    .fundo-cards {
        flex-direction: row
    }
}
  .card {
    display: flex;
    flex: 1 1 0%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 0.375rem;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-surface-200, 232 235 236) / var(--tw-bg-opacity));
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
  .img-card {
    height: 1.5rem;
    width: 1.5rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {
    .img-card {
        height: 2rem;
        width: 2rem
    }
}
  .number {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
  .descricao {
    font-size: 12px;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
  .ajust {
    padding-top: 2rem;
    padding-bottom: 2rem
}
</style>
