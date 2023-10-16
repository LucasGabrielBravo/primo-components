<script>import Button from "../../Button.svelte";
import ContainerPage from "../../ContainerPage.svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
import { onMount } from "svelte";
export let titulo;
export let paragrafos;
export let listservicos;
export let botao1;
onMount(() => {
  setupAnimations();
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
          <span class="paragrafo to-up-delay">{paragrafo.text}</span>
        {/each}
      {/if}
      <div class="table">
        {#each listservicos as servico, i}
          <div class="servico-card">
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

<style>
  .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem
}
  .table {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    gap: 1rem
}
  @media (min-width: 768px) {
    .table {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
  @media (min-width: 1024px) {
    .table {
        grid-template-columns: repeat(4, minmax(0, 1fr))
    }
}
  .titulo {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {
    .titulo {
        font-size: 1.875rem;
        line-height: 2.25rem
    }
}
  .paragrafo {
    max-width: 56rem;
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-700, 113 122 127) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {
    .paragrafo {
        font-size: 1.125rem;
        line-height: 1.75rem
    }
}
  .servico-card {
    position: relative;
    height: 24rem;
    overflow: hidden;
    border-radius: 0.125rem;
    --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
  .servico-card:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
  .image-servico {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover
}
  .servico-card-text-balao {
    position: absolute;
    bottom: 0.5rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center
}
  .text-balao {
    width: 100%;
    max-width: 90%;
    background-color: rgb(var(--color-surface-50, 250 250 250) / 0.8);
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
  .ajust {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem
}
</style>
