<script>import Button from "../../Button.svelte";
import ContainerPage from "../../ContainerPage.svelte";
import { onMount } from "svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
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
    gap: 6rem;
    overflow: hidden
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
