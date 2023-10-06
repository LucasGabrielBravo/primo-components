<script lang="ts">
  import { onMount } from "svelte";
  import type { IImage } from "../../types/fields";

  interface IDepoimento {
    titulobranco: string;
    titulosecunday: string;
    paragrafo: string;
    autor: string;
    servicocontratado: string;
    link: string;
    botaotext: string;
  }

  interface ISlide {
    id: string;
    logo: IImage;
    depoimento: IDepoimento;
    nextId: string;
    prevId: string;
  }

  export let logo: IImage;
  export let depoimentos: IDepoimento[];
  export let id: string = "";
  export let hiddenArrows = false;
  export let autoPlay = false;
  export let interval = 5000;

  let carousel: HTMLDivElement;

  function goTo(slideId: string) {
    try {
      const target = carousel.querySelector<HTMLDivElement>("#" + slideId)!;
      const left = target.offsetLeft;
      carousel.scrollTo({ left: left });
      currentSlide = slides.find((s) => s.id === slideId)!;
    } catch (error) {}
  }

  function getSlides(depoimentos: IDepoimento[]): ISlide[] {
    const slides: ISlide[] = [];

    depoimentos.forEach((dep, i) => {
      const nextId =
        i + 1 !== depoimentos.length ? `slide-${i + 1}` : `slide-0`;

      const prevId =
        i - 1 !== -1 ? `slide-${i - 1}` : `slide-${depoimentos.length - 1}`;

      slides.push({
        id: `slide-${i}`,
        logo,
        depoimento: dep,
        nextId,
        prevId,
      });
    });

    return slides;
  }

  function next() {
    if (currentSlide) {
      goTo(currentSlide.nextId);
    }
  }

  function prev() {
    if (currentSlide) {
      goTo(currentSlide.prevId);
    }
  }

  onMount(() => {
    if (id === "") {
      id = "carousel-" + Math.floor(Math.random() * 1000).toString(36);
    }
  });

  $: slides = getSlides(depoimentos);
  $: currentSlide = slides[0] || (undefined as ISlide | undefined);

  $: if (currentSlide && autoPlay) {
    setTimeout(next, interval);
  }
</script>

<div bind:this={carousel} {id} class="div">
  {#each slides as slide}
    <div id={slide.id}>
      <div class="conteudo-text">
        <div class="textos">
          <img src={logo.url} alt={logo.alt} class="logo" />

          <span class="titulo-surface">
            {slide.depoimento.titulobranco}
            <span class="titulo-secondary">
              {slide.depoimento.titulosecunday}
            </span>
          </span>
          <div class="estrelinhas">
            {#each [1, 2, 3, 4, 5] as item}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M7.49972 12.2295L3.62472 14.5628C3.51361 14.6323 3.39555 14.6635 3.27055 14.6566C3.14555 14.6496 3.03444 14.6114 2.93722 14.542C2.84 14.4725 2.76708 14.3823 2.71847 14.2712C2.66986 14.16 2.65944 14.035 2.68722 13.8962L3.70805 9.47949L0.291388 6.50033C0.180277 6.4031 0.114304 6.29546 0.093471 6.17741C0.0726376 6.05935 0.0761099 5.94477 0.103888 5.83366C0.131665 5.72255 0.194165 5.6288 0.291388 5.55241C0.38861 5.47602 0.506665 5.43088 0.645554 5.41699L5.16639 5.02116L6.91639 0.854492C6.97194 0.729492 7.05528 0.635742 7.16639 0.573242C7.2775 0.510742 7.38861 0.479492 7.49972 0.479492C7.61083 0.479492 7.72194 0.510742 7.83305 0.573242C7.94416 0.635742 8.0275 0.729492 8.08305 0.854492L9.83305 5.02116L14.3539 5.41699C14.4928 5.43088 14.6108 5.47602 14.7081 5.55241C14.8053 5.6288 14.8678 5.72255 14.8956 5.83366C14.9233 5.94477 14.9268 6.05935 14.906 6.17741C14.8851 6.29546 14.8192 6.4031 14.7081 6.50033L11.2914 9.47949L12.3122 13.8962C12.34 14.035 12.3296 14.16 12.281 14.2712C12.2324 14.3823 12.1594 14.4725 12.0622 14.542C11.965 14.6114 11.8539 14.6496 11.7289 14.6566C11.6039 14.6635 11.4858 14.6323 11.3747 14.5628L7.49972 12.2295Z"
                  fill="#EA9F0E"
                />
              </svg>
            {/each}
          </div>
          <span class="paragrafo"> {slide.depoimento.paragrafo} </span>
          <a href={slide.depoimento.link} class="autor-box">
            <span class="autor">{slide.depoimento.autor}</span>
            <span class="servicoContratado">
              {slide.depoimento.servicocontratado}
            </span>
            <div class="links-para-depoimentos">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                />
              </svg>
              <span>{slide.depoimento.botaotext}</span>
            </div>
          </a>
        </div>
      </div>
      {#if !hiddenArrows}
        <div class="arrows">
          <button on:click={prev}>❮</button>
          <button on:click={next}>❯</button>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style lang="postcss">
  .div {
    @apply carousel w-full h-full;
  }

  .div > div {
    @apply carousel-item relative w-full;
  }

  .div > div > img {
    @apply w-full object-cover h-full;
  }

  .div > div > div {
    @apply absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2;
  }

  .div > div > div > button {
    @apply btn btn-circle opacity-30 hover:opacity-90 text-surface-50;
  }

  .conteudo-text {
    @apply flex w-full h-full  justify-center items-center flex-col py-12;
  }
  .textos {
    @apply max-w-md flex w-full h-full flex-col items-center justify-center gap-8;
  }
  .titulo-surface {
    @apply text-surface-50 font-bold text-2xl md:text-3xl text-center;
  }
  .titulo-secondary {
    @apply text-secondary-500;
  }
  .paragrafo {
    @apply text-surface-50 font-medium text-base md:text-xl text-left px-1;
  }
  .autor-box {
    @apply flex flex-col text-surface-50 w-full transition-all rounded-lg p-2 gap-2;
    @apply hover:shadow-lg;
  }
  .autor {
    @apply font-light text-sm  text-left;
  }
  .servicoContratado {
    @apply font-normal text-sm  text-left;
  }
  .logo {
    @apply w-[25%];
  }
  .links-para-depoimentos {
    @apply flex items-center text-xs gap-2;
  }
  .estrelinhas {
    @apply flex w-full items-start justify-start text-center gap-2;
  }
  .arrows {
    @apply pt-[32rem] md:pt-0;
  }
</style>
