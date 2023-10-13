<script lang="ts">
  import { animate, inView } from "motion";
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

  let isIos = false;
  //   onMount(() => {
  //     isIos = window.navigator.platform.includes("Mac" || "iPhone");
  //   });
</script>

<div class="ajust">
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
          <!-- {#if isIos}
            {@html item.number}
          {:else} -->
          <Countup initial={0} value={parseInt(item.number)} duration={1000} />
          <!-- {/if} -->
        </span>
        <span class="descricao" data-key="list[{i}].item.descricao"
          >{@html item.descricao}</span
        >
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .fundo-cards {
    @apply bg-primary-700 p-2 rounded-md flex flex-col md:flex-row gap-2 w-full;
  }
  .card {
    @apply bg-primary-500 rounded-md flex-1 items-center justify-center flex flex-col py-2;
  }
  .img-card {
    @apply w-6 md:w-8 h-6 md:h-8 text-surface-100;
  }
  .number {
    @apply text-surface-50 font-bold text-4xl;
  }
  .descricao {
    @apply text-[12px] font-bold text-surface-100;
  }
  .ajust {
    @apply py-8;
  }
</style>
