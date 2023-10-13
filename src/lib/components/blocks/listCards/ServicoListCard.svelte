<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import { onMount } from "svelte";
  import type { IBotao, IParagrafo } from "../../../../types/fields";
  import { setupAnimations } from "$lib/utils/setupAnimation";
  // import gsap from "gsap";
  // import ScrollTrigger from "gsap/ScrollTrigger";

  interface IServico {
    image: {
      url: string;
      alt: string;
    };
    servico: string;
  }

  export let titulo: string;
  export let paragrafos: IParagrafo[];
  export let listservicos: IServico[];
  export let botao1: IBotao;

  onMount(() => {
    setupAnimations();
    //     ScrollTrigger.batch(table, {
    //       interval: 0.1,
    //       batchMax: 3,
    //       onEnter: (batch) =>
    //         gsap.to(batch, {
    //           autoAlpha: 1,
    //           stagger: 0.15,
    //           overwrite: true,
    //         }),
    //       onLeave: (batch) =>
    //         gsap.set(batch, {
    //           autoAlpha: 0,
    //           overwrite: true,
    //         }),
    //       onEnterBack: (batch) =>
    //         gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
    //       onLeaveBack: (batch) =>
    //         gsap.set(batch, {
    //           autoAlpha: 0,
    //           overwrite: true,
    //         }),
    //     });
  });
</script>

<div class="ajust">
  <ContainerPage>
    <div class="conteudo">
      {#if titulo}
        <span class="titulo" id="to-up">{titulo}</span>
      {/if}
      {#if paragrafos}
        {#each paragrafos as paragrafo}
          <span id="to-up-delay" class="paragrafo">{paragrafo.text}</span>
        {/each}
      {/if}
      <div class="table">
        {#each listservicos as servico, i}
          <div id="to-up-delay" class="servico-card">
            <img
              src={servico.image.url}
              alt={servico.image.alt}
              class="image-servico"
            />

            <div class="servico-card-text-balao">
              <span class="text-balao">{servico.servico}</span>
            </div>
          </div>
        {/each}
      </div>

      <Button color="primary" size="md" href={botao1.url} shaddow="shaddow-lg">
        {@html botao1.label}
      </Button>
    </div>
  </ContainerPage>
</div>

<style lang="postcss">
  .conteudo {
    @apply flex flex-col items-center justify-center gap-12;
  }
  .table {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4;
  }
  .titulo {
    @apply text-primary-500 text-2xl md:text-3xl font-bold text-center;
  }
  .paragrafo {
    @apply text-base md:text-lg text-surface-700 text-center max-w-4xl;
  }
  .servico-card {
    @apply relative overflow-hidden rounded-sm drop-shadow-sm h-96 transition-all hover:scale-105;
  }
  .image-servico {
    @apply object-cover w-full h-full;
  }
  .servico-card-text-balao {
    @apply absolute bottom-2 w-full items-center justify-center flex;
  }
  .text-balao {
    @apply bg-surface-50/80 px-8 py-6 text-primary-500 font-medium text-lg w-full max-w-[90%] text-center;
  }
  .ajust {
    @apply py-10;
  }
</style>
