<script lang="ts">
  import { quintOut } from "svelte/easing";
  import { fade, slide } from "svelte/transition";
  import type { IBotao, IImage, ILink } from "../../../../types/fields";
  import Button from "../../Button.svelte";
  import ContainerPage from "../../ContainerPage.svelte";

  interface IRedessocias {
    logoredesocial: IImage;
    link: ILink;
  }

  export let redessocias: IRedessocias[];

  export let logo: IImage;
  export let ligueChamada: string;
  export let telefone: ILink;
  export let botaoOrcamento: IBotao;
  export let links: ILink[];
  export let politica: ILink;

  let drawerState: boolean = false;

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
      </div>
      <div>
        <a href="/" class="logo">
          <img class="logo-img" data-key="logo" src={logo.url} alt={logo.alt} />
        </a>
      </div>

      <div class="contato">
        <div class="botoes">
          <div class="telefone">
            <div class="ligue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <path
                  d="M29.925 31.5C26.8 31.5 23.7125 30.8188 20.6625 29.4563C17.6125 28.0938 14.8375 26.1625 12.3375 23.6625C9.8375 21.1625 7.90625 18.3875 6.54375 15.3375C5.18125 12.2875 4.5 9.2 4.5 6.075C4.5 5.625 4.65 5.25 4.95 4.95C5.25 4.65 5.625 4.5 6.075 4.5H12.15C12.5 4.5 12.8125 4.61875 13.0875 4.85625C13.3625 5.09375 13.525 5.375 13.575 5.7L14.55 10.95C14.6 11.35 14.5875 11.6875 14.5125 11.9625C14.4375 12.2375 14.3 12.475 14.1 12.675L10.4625 16.35C10.9625 17.275 11.5563 18.1688 12.2438 19.0313C12.9313 19.8938 13.6875 20.725 14.5125 21.525C15.2875 22.3 16.1 23.0188 16.95 23.6813C17.8 24.3438 18.7 24.95 19.65 25.5L23.175 21.975C23.4 21.75 23.6938 21.5813 24.0563 21.4688C24.4188 21.3563 24.775 21.325 25.125 21.375L30.3 22.425C30.65 22.525 30.9375 22.7063 31.1625 22.9688C31.3875 23.2313 31.5 23.525 31.5 23.85V29.925C31.5 30.375 31.35 30.75 31.05 31.05C30.75 31.35 30.375 31.5 29.925 31.5Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <a
              href="tel:{telefone.url}"
              class="ligue-text"
              data-key="telefone.url"
            >
              <span class="ligue-chamada" data-key="liguechamada">
                {ligueChamada}
              </span>
              <span class="ligue-numero" data-key="telefone.label">
                {telefone.label}
              </span>
            </a>
          </div>
          <div data-key="botaoorcamento">
            <Button
              class="botao-orcamento"
              color="primary"
              shaddow="shaddow-lg"
              href={botaoOrcamento.url}
            >
              {@html botaoOrcamento.label}
            </Button>
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

<style lang="postcss">
  .fundo {
    @apply fixed top-0 flex  py-2 justify-center  backdrop-blur-[8px] border-b-[1px] border-surface-50  w-full z-10 bg-[rgba(185,188,195,0.5)];
  }
  .table {
    @apply flex flex-row-reverse md:flex-row w-full h-full bg-transparent rounded-none justify-between;
  }
  .menu {
    @apply md:grow mr-0 flex flex-row items-center md:w-full h-full font-normal gap-1 text-primary-600 text-base;
  }
  .button-menu {
    @apply flex gap-2 items-center h-full;
  }
  .button-menu-text {
    @apply hidden md:block font-medium;
  }
  .logo {
    @apply grow-0 h-10 justify-center items-center;
  }
  .logo-img {
    @apply object-contain h-full w-20 md:w-48;
  }
  .contato {
    @apply md:flex grow w-full items-center px-2 hidden justify-end;
  }
  .botoes {
    @apply flex sm:gap-2 md:gap-3 lg:gap-6 justify-end items-center;
  }
  .telefone {
    @apply flex items-center gap-2;
  }
  .ligue {
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
  }
  .drawer__unique13 {
    @apply fixed inset-0 z-10 backdrop-blur-sm;
  }
  .drawer__unique14 {
    @apply fixed top-0 bottom-0 right-0 z-10 w-full overflow-y-auto p-6 pt-24 bg-secondary-500 sm:max-w-sm sm:shadow-lg min-w-max;
  }
  .drawer__unique15 {
    @apply flex items-center justify-between;
  }
  .drawer-logo {
    @apply h-12 w-auto drop-shadow-sm;
  }
  .drawer-close {
    @apply flex rounded-full p-1 bg-surface-50/70 absolute right-4 top-10 text-primary-500 hover:bg-surface-50/80 transition-all;
  }
  .drawer-close-svg {
    @apply h-6 w-6;
  }
  .drawer__unique16 {
    @apply mt-6 flow-root;
  }
  .drawer__unique17 {
    @apply py-6 flex flex-col;
  }
  .drawer-button {
    @apply py-6 px-4 flex items-center transition-all even:border-y-2 even:border-surface-100 text-surface-50;
    @apply hover:bg-secondary-600;
  }
  .redes-socias {
    @apply flex flex-row gap-4 w-full items-center justify-center;
  }
  .rede-social {
    @apply w-7 h-7 transition-all;
    @apply hover:scale-105;
  }
  .rede-social-logo {
    @apply object-contain h-full w-full;
  }
  .politica {
    @apply w-full justify-center flex py-8 text-xs text-surface-50;
  }
</style>
