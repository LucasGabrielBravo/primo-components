<script>import ContainerPage from "../../ContainerPage.svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
import clsx from "clsx";
import { onMount } from "svelte";
export let titulo;
export let paragrafo;
export let listparceiros;
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

<style>
  .ajust {
    display: flex;
    padding-top: 2.5rem;
    padding-bottom: 2.5rem
}
  .table {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
  @media (min-width: 768px) {
    .table {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
  .text {
    display: flex;
    width: 100%;
    max-width: 32rem;
    flex-direction: column;
    gap: 2rem
}
  .titulo {
    text-align: left;
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
    font-size: 1rem;
    line-height: 1.5rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-700, 113 122 127) / var(--tw-text-opacity))
}
  .parceiras {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.75rem
}
  @media (min-width: 768px) {
    .parceiras {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
  .card {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem
}
  .image-parceira {
    height: 2rem;
    width: 2rem;
    overflow: hidden;
    border-radius: 9999px;
    --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
    --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
    --tw-ring-color: rgb(var(--color-surface-700, 113 122 127) / 0.1);
    --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
  @media (min-width: 768px) {
    .image-parceira {
        height: 3rem;
        width: 3rem
    }
}
  .text-parceira {
    display: flex;
    flex-direction: column
}
  .categoria-parceira {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-700, 113 122 127) / var(--tw-text-opacity))
}
  .nome-parceira {
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-text-opacity))
}
  .bg-parceira {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-bg-opacity))
}
  .logo-parceiro {
    height: 100%;
    -o-object-fit: cover;
       object-fit: cover
}
</style>
