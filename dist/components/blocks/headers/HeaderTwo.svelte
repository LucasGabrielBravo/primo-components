<script>import { quintOut } from "svelte/easing";
import { fade, slide } from "svelte/transition";
import ContainerPage from "../../ContainerPage.svelte";
export let redessocias;
export let logo;
export let botao;
export let links;
export let politica;
let drawerState = false;
function drawerOpen() {
  drawerState = true;
}
function drawerclose() {
  drawerState = false;
}
</script>

<div class="fundo">
  <ContainerPage>
    <div class="table">
      <a href="/" class="logo">
        <img class="logo-img" data-key="logo" src={logo.url} alt={logo.alt} />
      </a>

      <div class="menu">
        <button
          class="button-menu"
          on:click={() => {
            drawerOpen();
          }}
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 36 24"
              fill="currentColor"
            >
              <path
                d="M1.5 24C1.075 24 0.71875 23.8554 0.43125 23.5663C0.14375 23.2771 0 22.9187 0 22.4913C0 22.0638 0.14375 21.7083 0.43125 21.425C0.71875 21.1417 1.075 21 1.5 21H34.5C34.925 21 35.2812 21.1446 35.5688 21.4338C35.8563 21.7229 36 22.0813 36 22.5087C36 22.9363 35.8563 23.2917 35.5688 23.575C35.2812 23.8583 34.925 24 34.5 24H1.5ZM1.5 13.5C1.075 13.5 0.71875 13.3554 0.43125 13.0663C0.14375 12.7771 0 12.4187 0 11.9913C0 11.5638 0.14375 11.2083 0.43125 10.925C0.71875 10.6417 1.075 10.5 1.5 10.5H34.5C34.925 10.5 35.2812 10.6446 35.5688 10.9337C35.8563 11.2229 36 11.5813 36 12.0087C36 12.4362 35.8563 12.7917 35.5688 13.075C35.2812 13.3583 34.925 13.5 34.5 13.5H1.5ZM1.5 3C1.075 3 0.71875 2.85542 0.43125 2.56625C0.14375 2.27705 0 1.91872 0 1.49125C0 1.06375 0.14375 0.708333 0.43125 0.425C0.71875 0.141667 1.075 0 1.5 0H34.5C34.925 0 35.2812 0.144583 35.5688 0.433749C35.8563 0.722949 36 1.08128 36 1.50875C36 1.93625 35.8563 2.29167 35.5688 2.575C35.2812 2.85833 34.925 3 34.5 3H1.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span class="button-menu-text">Menu</span>
        </button>

        <div class="nav-buttons">
          {#each links as link}
            <a href={link.url} class="nav-button">
              {link.label}
            </a>
          {/each}
        </div>
      </div>

      <div class="contato">
        <div class="botoes">
          <div data-key="botao">
            <a class="botao-orcamento" href={botao.url}>
              {@html botao.label}
            </a>
          </div>
        </div>
      </div>
    </div>
  </ContainerPage>
</div>

{#if drawerState}
  <div>
    <!-- TODO: validar -->
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div
      role="dialog"
      aria-modal="true"
      class="drawer__unique13"
      transition:fade={{ delay: 250, duration: 300 }}
      on:click={() => {
        drawerclose();
      }}
    />
    <div
      class="drawer__unique14"
      transition:slide={{
        delay: 250,
        duration: 300,
        easing: quintOut,
        axis: "x",
      }}
    >
      <div class="drawer__unique15">
        <a href="/">
          <img class="drawer-logo" src={logo.url} alt={logo.alt} />
        </a>

        <button
          class="drawer-close"
          type="button"
          on:click={() => {
            drawerclose();
          }}
        >
          <svg
            class="drawer-close-svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div class="drawer__unique16">
        <div>
          <div class="drawer__unique17">
            {#each links as link}
              <a
                href={link.url}
                on:click={() => {
                  drawerclose();
                }}
                class="drawer-button"
              >
                {link.label}
              </a>
            {/each}
          </div>

          <div class="info-contato">
            <div class="redes-socias">
              {#each redessocias as redesocial}
                <a class="rede-social" href={redesocial.link.url}>
                  <img
                    src={redesocial.logoredesocial.url}
                    alt={redesocial.logoredesocial.alt}
                    class="rede-social-logo"
                  />
                </a>
              {/each}
            </div>
            {#if politica.url}
              <a class="politica" href={politica.url}>{politica.label}</a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .fundo {
    position: fixed;
    top: 0px;
    z-index: 10;
    display: flex;
    width: 100%;
    justify-content: center;
    border-bottom-width: 1px;
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-border-opacity));
    background-color: rgba(185,188,195,0.5);
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    --tw-backdrop-blur: blur(8px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
}
  .table {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 0px;
    background-color: transparent
}
  .menu {
    margin-right: 0px;
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-600, 37 99 235) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {
    .menu {
        width: 100%
    }
}
  .button-menu {
    display: flex;
    height: 100%;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem
}
  @media (min-width: 768px) {
    .button-menu {
        display: none
    }
}
  .nav-buttons {
    display: none;
    flex: 1 1 0%;
    flex-direction: row;
    justify-content: flex-end
}
  @media (min-width: 768px) {
    .nav-buttons {
        display: flex
    }
}
  .nav-button {
    display: flex;
    align-items: center;
    border-radius: 0.375rem;
    padding: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity));
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
  .nav-button:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    font-weight: 600;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-600, 37 99 235) / var(--tw-text-opacity))
}
  .button-menu-text {
    display: none;
    font-weight: 500
}
  @media (min-width: 768px) {
    .button-menu-text {
        display: block
    }
}
  .logo {
    display: flex;
    height: auto;
    align-items: center;
    justify-content: flex-start
}
  .logo-img {
    height: 100%;
    width: auto
}
  @media (min-width: 768px) {
    .logo-img {
        width: 8rem
    }
}
  .contato {
    display: none;
    min-width: -moz-max-content;
    min-width: max-content;
    align-items: center;
    justify-content: flex-end;
    padding-left: 0.5rem;
    padding-right: 0.5rem
}
  @media (min-width: 768px) {
    .contato {
        display: flex
    }
}
  .botoes {
    display: flex;
    align-items: center;
    justify-content: flex-end
}
  @media (min-width: 640px) {
    .botoes {
        gap: 0.5rem
    }
}
  @media (min-width: 768px) {
    .botoes {
        gap: 0.75rem
    }
}
  @media (min-width: 1024px) {
    .botoes {
        gap: 1.5rem
    }
}
  .botao-orcamento {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-bg-opacity));
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
  @media (min-width: 640px) {
    .botao-orcamento {
        max-width: -moz-max-content;
        max-width: max-content
    }
}
  .botao-orcamento:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-600, 37 99 235) / var(--tw-bg-opacity))
}
  .botao-orcamento {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
  .botao-orcamento:active {
    --tw-scale-x: .95;
    --tw-scale-y: .95;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
  .botao-orcamento {
    font-size: 0.875rem !important;
    line-height: 1.25rem !important;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1)
}
  .telefone {
    display: flex;
    align-items: center;
    gap: 0.5rem
}
  /* .ligue {
    @apply flex items-center gap-2 text-primary-600 ring-2 ring-primary-600 rounded-sm;
  }
  .ligue-chamada {
    @apply font-normal text-primary-500;
  }
  .ligue-numero {
    @apply font-bold text-primary-500;
  }
  .ligue-text {
    @apply flex flex-col;
  } */
  .drawer__unique13 {
    position: fixed;
    inset: 0px;
    z-index: 10;
    --tw-backdrop-blur: blur(4px);
    -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
            backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)
}
  .drawer__unique14 {
    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    z-index: 10;
    height: 100vh;
    width: 100%;
    min-width: -moz-max-content;
    min-width: max-content;
    overflow-y: auto;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-bg-opacity));
    padding: 1.5rem;
    padding-top: 6rem
}
  @media (min-width: 640px) {
    .drawer__unique14 {
        max-width: 24rem;
        --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
    }
}
  .drawer__unique15 {
    display: flex;
    align-items: center;
    justify-content: space-between
}
  .drawer-logo {
    height: 3rem;
    width: auto;
    --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
  .drawer-close {
    position: absolute;
    right: 1rem;
    top: 2.5rem;
    display: flex;
    border-radius: 9999px;
    background-color: rgb(var(--color-surface-50, 250 250 250) / 0.7);
    padding: 0.25rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity));
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
  .drawer-close:hover {
    background-color: rgb(var(--color-surface-50, 250 250 250) / 0.8)
}
  .drawer-close-svg {
    height: 1.5rem;
    width: 1.5rem
}
  .drawer__unique16 {
    margin-top: 1.5rem;
    display: flow-root
}
  .drawer__unique17 {
    display: flex;
    flex-direction: column;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
}
  .drawer-button {
    display: flex;
    align-items: center;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity));
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
  .drawer-button:nth-child(even) {
    border-top-width: 2px;
    border-bottom-width: 2px;
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-surface-100, 243 244 244) / var(--tw-border-opacity))
}
  .drawer-button:hover {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-secondary-600, 225 10 96) / var(--tw-bg-opacity))
}
  .redes-socias {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem
}
  .rede-social {
    height: 1.75rem;
    width: 1.75rem;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
  .rede-social:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
  .rede-social-logo {
    height: 100%;
    width: 100%;
    -o-object-fit: contain;
       object-fit: contain
}
  .politica {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 2rem;
    padding-bottom: 2rem;
    font-size: 0.75rem;
    line-height: 1rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
</style>
