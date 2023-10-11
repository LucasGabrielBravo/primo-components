<script>import Button from "../../Button.svelte";
import ContainerPage from "../../ContainerPage.svelte";
import clsx from "clsx";
export let titulo;
export let paragrafo;
export let botao1;
export let botao2;
export let diferenciais;
export let backgroundimage;
</script>

<div class="box">
  <img
    class="img-fundo"
    data-key="backgroundimage"
    src={backgroundimage.url}
    alt=""
  />
  <!-- <div class="pelicula" /> -->

  <div class="conteudo">
    <ContainerPage>
      <div class="conteudo-text">
        <div class="chamada">
          <div class="box-chamada-text">
            <span class="chamada-title" data-key="titulo">
              {@html titulo}
            </span>
            <span class="chamda-text">
              {@html paragrafo}
            </span>
            <div class="chamada-botoes" data-key="botao1">
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
        <div class="box-botoes">
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
  <div class="box-botoes-two">
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

<style>
  .box {
    position: relative;
    min-height: -moz-max-content;
    min-height: max-content;
    align-items: center;
}
@media (min-width: 768px) {
    .box {
        height: 80vh;
    }
}
  .img-fundo {
    position: absolute;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover;
    -o-object-position: 65%;
       object-position: 65%;
}
  @media (min-width: 640px) {
    .img-fundo {
        -o-object-position: center;
           object-position: center;
    }
}
  @media (min-width: 1024px) {
    .img-fundo {
        -o-object-position: top;
           object-position: top;
    }
}
  .conteudo {
    position: relative;
    display: flex;
    height: 100%;
}
  .conteudo-text {
    display: flex;
    height: 100%;
    flex-direction: column;
    padding-top: 2rem;
}
  .chamada {
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
}
  .box-chamada-text {
    margin-top: 24rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2rem;
    --tw-drop-shadow: drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
  @media (min-width: 768px) {
    .box-chamada-text {
        margin-top: 0px;
    }
}
  @media (min-width: 1024px) {
    .box-chamada-text {
        padding-top: 3.5rem;
    }
}
  .chamada-title {
    max-width: 24rem;
    border-left-width: 4px;
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-border-opacity));
    padding-left: 1.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity));
}
  @media (min-width: 768px) {
    .chamada-title {
        font-size: 1.875rem;
        line-height: 2.25rem;
    }
}
  .chamda-text {
    max-width: 28rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity));
}
  @media (min-width: 768px) {
    .chamda-text {
        font-size: 1.125rem;
        line-height: 1.75rem;
    }
}
  .chamada-botoes {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
  @media (min-width: 768px) {
    .chamada-botoes {
        flex-direction: row;
    }
}
  .botao-chamada {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    --tw-text-opacity: 1 !important;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity)) !important;
    text-decoration-line: underline;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
}
  .botao-chamada:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
  .aria-vazia {
    display: none;
    width: 100%;
}
  @media (min-width: 768px) {
    .aria-vazia {
        display: flex;
    }
}
  .box-botoes {
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    display: none;
    min-height: -moz-max-content;
    min-height: max-content;
    width: 100%;
    --tw-translate-y: 1.5rem;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    gap: 0.5rem;
    border-top-left-radius: 0.375rem;
    border-top-right-radius: 0.375rem;
    background-color: rgba(185,188,195,0.5);
    padding: 0.5rem;
    --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
  @media (min-width: 1024px) {
    .box-botoes {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}
  .box-botoes {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .box-botoes-two {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    display: grid;
    min-height: -moz-max-content;
    min-height: max-content;
    width: 100%;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-surface-200, 232 235 236) / var(--tw-bg-opacity));
    padding: 0.5rem;
}
  @media (min-width: 1024px) {
    .box-botoes-two {
        display: none;
    }
}
  .box-botoes-two {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }
  .botao-1 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}
  .botao-2 {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border-top-width: 2px;
    border-bottom-width: 2px;
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-border-opacity));
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}
  @media (min-width: 1024px) {
    .botao-2 {
        border-left-width: 2px;
        border-right-width: 2px;
        border-top-width: 0px;
        border-bottom-width: 0px;
    }
}
  .icon-botao {
    height: 2.25rem;
    width: 2.25rem;
}
  @media (min-width: 768px) {
    .icon-botao {
        height: 51px;
        width: 51px;
    }
}
  .box-icon-descripition {
    display: flex;
    width: 66.666667%;
    flex-direction: column;
}
  @media (min-width: 1024px) {
    .box-icon-descripition {
        width: 100%;
    }
}
  .text-descripition-first {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity));
}
  .text-descripition-second {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity));
}
  .pelicula {
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(180deg, transparent, #ffffff73);
}
</style>
