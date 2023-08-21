<script lang="ts">
  import { onMount } from "svelte";

  interface ISlide {
    id: string;
    src: string;
    nextId: string;
    prevId: string;
  }

  export let id: string = "";
  export let images: string[] = [];
  export let hiddenArrows = false;
  export let autoPlay = false;
  export let interval = 5000;

  let carousel: HTMLDivElement

  function goTo(slideId: string) {        
    const target = carousel.querySelector<HTMLDivElement>("#"+slideId)!;
    const left = target.offsetLeft;
    carousel.scrollTo({ left: left });

    currentSlide = slides.find(s => s.id === slideId)!
  }

  function getSlides(images: string[]): ISlide[] {
    const slides: ISlide[] = [];

    images.forEach((img, i) => {
      const nextId =
        i + 1 !== images.length ? `slide-${i + 1}` : `slide-0`;

      const prevId =
        i - 1 !== -1
          ? `slide-${i - 1}`
          : `slide-${images.length - 1}`;

      slides.push({
        id: `slide-${i}`,
        src: img,
        nextId,
        prevId,
      });
    });

    return slides;
  }

  function next() {
    if(currentSlide){
      goTo(currentSlide.nextId)
    }
  }

  function prev() {
    if(currentSlide){
      goTo(currentSlide.prevId)
    }
  }

  onMount(() => {
    if (id === "") {
      id = "carousel-" + Math.floor(Math.random() * 1000).toString(36);      
    }    
  });

  $: slides = getSlides(images);
  $: currentSlide = slides[0] || undefined as ISlide | undefined

  $: if (currentSlide && autoPlay) {
    setTimeout(next, interval)
  }
</script>

<div bind:this={carousel} {id} class="div">
  {#each slides as slide}
    <div id={slide.id}>
      <img alt={slide.id} src={slide.src} />

      {#if !hiddenArrows}
        <div>
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
    @apply btn btn-circle opacity-30 hover:opacity-90;
  }
</style>
