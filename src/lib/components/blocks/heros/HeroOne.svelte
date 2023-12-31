<script lang="ts">
  import Button from "$lib/components/Button.svelte";
  import ContainerPage from "$lib/components/ContainerPage.svelte";
  import clsx from "clsx";

  import { setupAnimations } from "$lib/utils/setupAnimation";
  import { onMount } from "svelte";
  import type { IBotao, IImage } from "../../../../types/fields";

  interface IDiferencial {
    titulo: string;
    descricao: string;
    icon: IImage;
  }

  export let titulo: string;
  export let paragrafo: string;
  export let botao1: IBotao;
  export let botao2: IBotao;
  export let diferenciais: IDiferencial[];
  export let backgroundimage: IImage;

  onMount(() => {
    setupAnimations();
  });
</script>

<div class="box">
  <img
    class="img-fundo"
    data-key="backgroundimage"
    src={backgroundimage.url}
    alt=""
  />
  <div class="pelicula" />

  <div class="conteudo">
    <ContainerPage>
      <div class="conteudo-text">
        <div class="chamada">
          <div class="box-chamada-text">
            <span class="chamada-title" data-key="titulo" id="to-right">
              {@html titulo}
            </span>
            <span class="chamda-text" id="to-right-delay">
              {@html paragrafo}
            </span>
            <div class="chamada-botoes" data-key="botao1" id="to-up">
              <Button color="secondary" size="md" href={botao1.url}>
                {@html botao1.label}
              </Button>
              <a class="botao-chamada" data-key="botao2" href={botao2.url}>
                {@html botao2.label}
              </a>
            </div>
          </div>
          <span class="aria-vazia" />
        </div>
        <div class="box-botoes to-up-delay">
          {#each diferenciais as diferencial, i}
            <div class={clsx("", i % 2 === 0 ? "botao-1" : "botao-2")}>
              <img
                data-key="diferencial[{i}].icon"
                class="icon-botao"
                src={diferencial.icon.url}
                alt={diferencial.icon.alt}
              />
              <div class="box-icon-descripition">
                <span
                  class="text-descripition-first"
                  data-key="diferencial[{i}].titulo"
                >
                  {@html diferencial.titulo}
                </span>
                <span
                  class="text-descripition-second"
                  data-key="diferencial[{i}].descricao"
                >
                  {@html diferencial.descricao}
                </span>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </ContainerPage>
  </div>
  <div class="box-botoes-two" id="to-up">
    {#each diferenciais as diferencial, i}
      <div class={clsx("", i % 2 === 0 ? "botao-1" : "botao-2")}>
        <img
          data-key="diferencial[{i}].icon"
          class="icon-botao"
          src={diferencial.icon.url}
          alt={diferencial.icon.alt}
        />
        <div class="box-icon-descripition">
          <span
            class="text-descripition-first"
            data-key="diferencial[{i}].titulo"
          >
            {@html diferencial.titulo}
          </span>
          <span
            class="text-descripition-second"
            data-key="diferencial[{i}].descricao"
          >
            {@html diferencial.descricao}
          </span>
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .box {
    @apply relative  min-h-max md:h-[80vh] items-center overflow-hidden;
  }
  .img-fundo {
    @apply absolute h-full w-full object-cover object-[65%] sm:object-center lg:object-top;
  }
  .conteudo {
    @apply relative h-full flex;
  }
  .conteudo-text {
    @apply flex flex-col h-full pt-8;
  }
  .chamada {
    @apply flex my-auto;
  }
  .box-chamada-text {
    @apply flex flex-col w-full gap-8 mt-96 md:mt-0 lg:pt-14 drop-shadow-xl;
  }
  .chamada-title {
    @apply border-l-4 border-secondary-500 pl-6 font-bold text-primary-500 text-2xl md:text-3xl  max-w-sm;
  }
  .chamda-text {
    @apply text-primary-500 text-base md:text-lg font-medium max-w-md;
  }
  .chamada-botoes {
    @apply flex flex-col md:flex-row gap-2;
  }
  .botao-chamada {
    @apply text-base underline !text-primary-500 px-4 py-2 flex flex-row items-center justify-center font-medium transition-all hover:scale-105;
  }
  .aria-vazia {
    @apply md:flex w-full hidden;
  }
  .box-botoes {
    @apply hidden mt-auto mx-auto lg:grid lg:grid-cols-3 p-2 gap-2 bg-[rgba(185,188,195,0.5)] backdrop-blur-[8px] w-full rounded-t-md min-h-max translate-y-6;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .box-botoes-two {
    @apply lg:hidden mt-auto mx-auto grid grid-cols-1 p-2 gap-2 bg-surface-200 w-full  min-h-max relative;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .botao-1 {
    @apply flex py-2 px-5 gap-2 items-center justify-center;
  }
  .botao-2 {
    @apply flex py-2 px-5 gap-2 items-center justify-center border-y-2 lg:border-x-2 lg:border-y-0 border-surface-50;
  }
  .icon-botao {
    @apply h-9 w-9 md:h-[51px] md:w-[51px];
  }
  .box-icon-descripition {
    @apply flex flex-col w-2/3 lg:w-full;
  }
  .text-descripition-first {
    @apply font-bold text-lg text-primary-500;
  }
  .text-descripition-second {
    @apply font-medium text-base text-surface-50;
  }
  .pelicula {
    @apply flex w-full h-full  absolute;
    background-image: linear-gradient(180deg, transparent, #ffffff73);
  }
  @media (min-width: 768px) {
    .pelicula {
      background-image: linear-gradient(-90deg, transparent, #ffffff73);
    }
  }
</style>
