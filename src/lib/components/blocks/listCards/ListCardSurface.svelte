<script lang="ts">
  import { browser } from "$app/environment";
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import { onMount } from "svelte";
  import Countup from "svelte-countup";

  interface IImage {
    alt: string;
    url: string;
  }

  interface ICard {
    icon: IImage;
    number: string;
    descricao: string;
  }

  export let list: ICard[];
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

<style lang="postcss">
  .fundo-cards {
    @apply bg-surface-300 p-2 rounded-md flex flex-col md:flex-row gap-2;
  }
  .card {
    @apply bg-surface-200 rounded-md flex-1 items-center justify-center flex flex-col py-2;
  }
  .img-card {
    @apply w-6 md:w-8 h-6 md:h-8 text-primary-500;
  }
  .number {
    @apply text-primary-500 font-bold text-4xl;
  }
  .descricao {
    @apply text-[12px] font-bold text-primary-500;
  }
  .ajust {
    @apply py-8;
  }
</style>
