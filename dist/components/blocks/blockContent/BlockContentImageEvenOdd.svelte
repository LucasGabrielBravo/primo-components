<script>import Button from "../../Button.svelte";
import ContainerPage from "../../ContainerPage.svelte";
export let toptitulo;
export let titulo;
export let subtitulo;
export let conteudos;
let sizeView = window.innerWidth;
let isMobile = window.innerWidth < 768 ? true : false;
$:
  if (sizeView < 768) {
    isMobile = true;
  } else {
    isMobile = false;
  }
document.body.onresize = function() {
  sizeView = window.innerWidth;
};
let intersectionObserver;
function ensureIntersectionObserver(threshold) {
  if (intersectionObserver)
    return;
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target;
          element.style.opacity = "1";
          element.style.transform = "";
        }
      });
    },
    { threshold }
  );
}
function inview(element, options) {
  let { direction, distance, opacity, threshold, transition } = {
    direction: "up",
    opacity: "0",
    threshold: 0,
    transition: 0.5,
    distance: 20
  };
  if (options) {
    if (options.direction) {
      direction = options.direction;
    }
    if (options.distance) {
      distance = options.distance;
    }
    if (options.opacity) {
      opacity = options.opacity;
    }
    if (options.threshold) {
      threshold = options.threshold;
    }
    if (options.transition) {
      transition = options.transition;
    }
  }
  const directions = ((distance2) => {
    return {
      up: `translateY(${distance2}px)`,
      down: `translateY(-${distance2}px)`,
      left: `translateX(${distance2}px)`,
      right: `translateX(-${distance2}px)`
    };
  })(distance);
  ensureIntersectionObserver(threshold);
  if (intersectionObserver) {
    intersectionObserver.observe(element);
    element.style.opacity = opacity;
    element.style.transform = directions[direction];
    element.style.transition = `${transition}s`;
  }
  return {
    destroy() {
      if (intersectionObserver) {
        intersectionObserver.unobserve(element);
      }
    }
  };
}
</script>

<ContainerPage>
    {#if toptitulo || titulo || subtitulo}
        <header class="heading-group">
            {#if toptitulo}
                <span class="toptitulo">{toptitulo}</span>
            {/if}
            {#if titulo}
                <h2 class="titulo">{titulo}</h2>
            {/if}
            {#if subtitulo}
                <span class="subtitulo">{subtitulo}</span>
            {/if}
        </header>
    {/if}
    <div class="conteudos">
        {#if !isMobile}
            {#each conteudos as conteudo, i}
                {#if i % 2 !== 0}
                    <div
                        use:inview={{
                            distance: 10,
                            direction: "left",
                            transition: 2,
                            threshold: 1,
                        }}
                        class="conteudo"
                    >
                        {#if conteudo.image.url}
                            <img
                                class="image-conteudo"
                                src={conteudo.image.url}
                                alt={conteudo.image.alt}
                            />
                        {/if}
                        <div class="body">
                            <h2 class="title">{conteudo.titulo}</h2>
                            <span class="content">{@html conteudo.texto}</span>
                            {#if conteudo.botao.url}
                                <Button
                                    href=""
                                    color="primary"
                                    size="md"
                                    variant="ringed"
                                >
                                    {conteudo.botao.label}
                                </Button>
                            {/if}
                        </div>
                    </div>
                {:else}
                    <div
                        use:inview={{
                            distance: -10,
                            direction: "left",
                            transition: 2,
                            threshold: 1,
                        }}
                        class="conteudo"
                    >
                        <div class="body">
                            <h2 class="title">{conteudo.titulo}</h2>
                            <span class="content">{@html conteudo.texto}</span>
                            {#if conteudo.botao.url}
                                <Button
                                    href=""
                                    color="primary"
                                    size="md"
                                    variant="ringed"
                                >
                                    {conteudo.botao.label}
                                </Button>
                            {/if}
                        </div>
                        {#if conteudo.image.url}
                            <img
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
                    <div class="body">
                        <h2 class="title">{conteudo.titulo}</h2>
                        <span class="content">{@html conteudo.texto}</span>
                        {#if conteudo.botao.url}
                            <Button
                                href=""
                                color="primary"
                                size="md"
                                variant="ringed"
                            >
                                {conteudo.botao.label}
                            </Button>
                        {/if}
                    </div>
                    {#if conteudo.image.url}
                        <img
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

<style>
    .heading-group {
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center
}
    .toptitulo {
    font-size: 1.25rem;
    line-height: 1.75rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-text-opacity))
}
    .titulo {
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity))
}
    .conteudos {
    display: grid;
    gap: 6rem
}
    .conteudo {
    display: grid;
    height: -moz-max-content;
    height: max-content;
    gap: 1.5rem
}
    @media (min-width: 768px) {
    .conteudo {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        place-items: center
    }
}
    .image-conteudo {
    height: auto;
    width: auto;
    border-radius: 0.5rem;
    -o-object-fit: cover;
       object-fit: cover;
    --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
    .body {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1rem;
    padding: 0px;
    text-align: left
}
    .title {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-text-opacity))
}
    @media (min-width: 768px) {
    .title {
        font-size: 1.125rem;
        line-height: 1.75rem
    }
}
    .content {
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-700, 113 122 127) / var(--tw-text-opacity))
}
</style>
