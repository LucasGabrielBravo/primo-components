<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import { onMount } from "svelte";
  import type { IBotao, IImage } from "../../../../types/fields";
  import { setupAnimations } from "$lib/utils/setupAnimation";

  interface IConteudo {
    image: IImage;
    titulo: string;
    texto: string;
    botao: IBotao;
  }

  export let toptitulo: string;
  export let titulo: string;
  export let subtitulo: string;

  export let conteudos: IConteudo[];

  let sizeView = window.innerWidth;
  let isMobile = window.innerWidth < 768 ? true : false;

  $: if (sizeView < 768) {
    isMobile = true;
  } else {
    isMobile = false;
  }

  document.body.onresize = function () {
    sizeView = window.innerWidth;
  };

  onMount(() => {
    setupAnimations();
  });
</script>

<ContainerPage>
  {#if toptitulo || titulo || subtitulo}
    <header class="heading-group">
      {#if toptitulo}
        <span class="toptitulo" id="to-up">{toptitulo}</span>
      {/if}
      {#if titulo}
        <h2 class="titulo" id="to-up-delay">{titulo}</h2>
      {/if}
      {#if subtitulo}
        <span class="subtitulo" id="to-up-delay">{subtitulo}</span>
      {/if}
    </header>
  {/if}
  <div class="conteudos">
    {#if !isMobile}
      {#each conteudos as conteudo, i}
        {#if i % 2 !== 0}
          <div class="conteudo">
            {#if conteudo.image.url}
              <img
                id="to-left"
                class="image-conteudo"
                src={conteudo.image.url}
                alt={conteudo.image.alt}
              />
            {/if}
            <div class="body" id="to-left-delay">
              <h2 class="title">{conteudo.titulo}</h2>
              <span class="content">{@html conteudo.texto}</span>
              {#if conteudo.botao.url}
                <Button href="" color="primary" size="md" variant="ringed">
                  {conteudo.botao.label}
                </Button>
              {/if}
            </div>
          </div>
        {:else}
          <div class="conteudo">
            <div class="body" id="to-right">
              <h2 class="title">{conteudo.titulo}</h2>
              <span class="content">{@html conteudo.texto}</span>
              {#if conteudo.botao.url}
                <Button href="" color="primary" size="md" variant="ringed">
                  {conteudo.botao.label}
                </Button>
              {/if}
            </div>
            {#if conteudo.image.url}
              <img
                id="to-right-delay"
                class="image-conteudo"
                src={conteudo.image.url}
                alt={conteudo.image.alt}
              />
            {/if}
          </div>
        {/if}
      {/each}
    {:else}
      {#each conteudos as conteudo, i}
        <div class="conteudo">
          <div class="body" id="to-up">
            <h2 class="title">{conteudo.titulo}</h2>
            <span class="content">{@html conteudo.texto}</span>
            {#if conteudo.botao.url}
              <Button href="" color="primary" size="md" variant="ringed">
                {conteudo.botao.label}
              </Button>
            {/if}
          </div>
          {#if conteudo.image.url}
            <img
              id="to-up-delay"
              class="image-conteudo"
              src={conteudo.image.url}
              alt={conteudo.image.alt}
            />
          {/if}
        </div>
      {/each}
    {/if}
  </div>
</ContainerPage>

<style lang="postcss">
  .heading-group {
    @apply flex flex-col mb-24 text-center gap-4;
  }
  .toptitulo {
    @apply text-xl text-secondary-500;
  }
  .titulo {
    @apply text-4xl font-medium text-[#000];
  }
  .conteudos {
    @apply grid gap-24 overflow-hidden;
  }
  .conteudo {
    @apply grid  md:grid-cols-2 md:place-items-center gap-6 h-max;
  }
  .image-conteudo {
    @apply w-auto h-auto rounded-lg object-cover drop-shadow-md;
  }
  .body {
    @apply flex flex-col items-start gap-4 p-0 w-full h-full justify-center text-left;
  }
  .title {
    @apply text-base md:text-lg text-secondary-500 font-medium;
  }
  .content {
    @apply text-surface-700 text-base;
  }
</style>
