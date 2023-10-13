<script lang="ts">
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import { setupAnimations } from "$lib/utils/setupAnimation";
  import clsx from "clsx";
  import { onMount } from "svelte";

  interface IParceiro {
    image: {
      url: string;
      alt: string;
    };
    nome: string;
    categoria: string;
  }

  export let titulo: string;
  export let paragrafo: string;
  export let listparceiros: IParceiro[];

  onMount(() => {
    setupAnimations();
  });
</script>

<class class="ajust">
  <ContainerPage>
    <div class="table">
      <div class="text">
        <h1 class="titulo" id="to-right">{titulo}</h1>
        <span class="paragrafo" id="to-right-delay"> {paragrafo} </span>
      </div>
      <div class="parceiras">
        {#each listparceiros as parceiro}
          <div class="card" id="to-left">
            <div
              class={clsx(
                "image-parceira",
                parceiro.image.url !== "" ? "" : "bg-parceira"
              )}
            >
              <img
                src={parceiro.image.url}
                alt={parceiro.image.alt}
                class="logo-parceiro"
              />
            </div>
            <div class="text-parceira">
              <span class="categoria-parceira">
                {parceiro.categoria}
              </span>
              <span class="nome-parceira">
                {parceiro.nome}
              </span>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </ContainerPage>
</class>

<style lang="postcss">
  .ajust {
    @apply flex py-10;
  }
  .table {
    @apply grid grid-cols-1 md:grid-cols-2 w-full gap-8 py-2;
  }
  .text {
    @apply w-full flex flex-col gap-8 max-w-lg;
  }
  .titulo {
    @apply text-2xl md:text-3xl font-bold text-primary-500 text-left;
  }
  .paragrafo {
    @apply text-base text-surface-700;
  }
  .parceiras {
    @apply grid grid-cols-1 md:grid-cols-2 gap-3;
  }
  .card {
    @apply w-full flex flex-row gap-2 p-2  items-center;
  }
  .image-parceira {
    @apply rounded-full w-8 h-8 md:w-12 md:h-12 overflow-hidden drop-shadow-md ring-1 ring-surface-700/10;
  }
  .text-parceira {
    @apply flex flex-col;
  }
  .categoria-parceira {
    @apply text-base font-normal text-surface-700;
  }
  .nome-parceira {
    @apply text-xs text-secondary-500 font-medium;
  }
  .bg-parceira {
    @apply bg-secondary-500;
  }
  .logo-parceiro {
    @apply object-cover h-full;
  }
</style>
