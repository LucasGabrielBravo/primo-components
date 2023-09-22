<script lang="ts">
  import { quintOut } from "svelte/easing";
  import { fade, slide } from "svelte/transition";
  import Button from "../../Button.svelte";
  import ContainerPage from "../../ContainerPage.svelte";

  interface IOrcamento {
    label: string;
    url: string;
  }
  interface Ilogo {
    alt: string;
    url: string;
  }

  export let logo: Ilogo;
  export let ligueChamada: string;
  export let telefone: string;
  export let botaoOrcamento: IOrcamento;

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
          <span>Menu</span>
        </button>
      </div>

      <a href="/" class="logo">
        <img class="logo-img" data-key="logo" src={logo.url} alt={logo.alt} />
      </a>

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
            <div class="ligue-text">
              <span class="ligue-chamada" data-key="liguechamada">
                {@html ligueChamada}
              </span>
              <span class="ligue-numero" data-key="telefone">
                {@html telefone}
              </span>
            </div>
          </div>
          <div data-key="botaoorcamento">
            <Button
              class="botao-orcamento"
              color="primary"
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
            {#each [1, 2, 2, 2, 2] as link}
              <!-- {#if link.label !== "Produtos"} -->
              <!-- <a on:click={(()=>{drawerclose()})} href="{link.path.url}" class="drawer__unique19"> -->
              <a
                href="/"
                on:click={() => {
                  drawerclose();
                }}
                class="drawer__unique19"
              >
                Teste
              </a>

              <!-- {:else}
              <div class='acordeon'>
                <label for="one">
                    <span>
                      Produtos
                      <svg class="svg-icon" style="width: 0.8em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M61.967842 289.470811 955.525977 289.470811 508.786307 736.181829 61.967842 289.470811zM61.967842 289.470811"  /></svg>
                    </span>
                    
                </label>
                <input type='checkbox' id='one'/>
                <div class='move'>
                  <div class='text-acordeon'>
                    {#each pagesproduto as item}
                                
                              <a on:click={(()=>{drawerclose()})} href={item.path.url}><span> {item.nome}</span>
                              </a>
                        {/each} 
                  </div>
               </div>
            </div>
            {/if} -->
            {/each}
            <a href="/fale-conosco" class="btn-ringed-gradient faleconosco"
              ><span class="w-full justify-center">Fale Conosco</span></a
            >
          </div>

          <div class="info-contato">
            <div class="contatos">
              <span>telefonecontato</span>
              <span>email</span>
            </div>
            <div>
              <!-- <a href={linkedin.url}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.96321 12.5156V40H0.00075V12.5156H9.96321ZM24.981 12.4648V14.0844C26.4353 13.1457 28.1124 12.6 30.6556 12.6C38.9384 12.6 39.9997 19.0305 39.9997 24.6325V39.9993H29.9872V25.3985C29.9872 22.9429 29.1086 22.4774 27.4841 22.4774C25.9397 22.4774 24.981 22.968 24.981 25.3985V39.9993H14.9685V12.4648H24.981ZM4.98123 0C7.72967 0 9.96246 2.23529 9.96246 4.98123C9.96246 7.72717 7.72967 9.96246 4.98121 9.96246C2.23531 9.96246 0 7.72717 0 4.98121C0 2.23531 2.23529 0 4.98123 0Z" fill="#06D6A0"/>
            </svg>
          </a>
          <a href={twitter.url}>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <g clip-path="url(#clip0_160_4155)">
              <path d="M39.0934 7.40497C38.4651 7.68364 37.819 7.91887 37.1588 8.10989C37.9404 7.22599 38.5362 6.18599 38.9 5.04795C38.9815 4.79287 38.897 4.51365 38.6873 4.34678C38.4779 4.17983 38.1869 4.15983 37.9564 4.29647C36.5544 5.12795 35.042 5.72552 33.456 6.0749C31.8584 4.51389 29.6887 3.62545 27.4456 3.62545C22.7107 3.62545 18.8587 7.47747 18.8587 12.2121C18.8587 12.585 18.8822 12.9559 18.929 13.3216C13.0535 12.8057 7.59119 9.91785 3.84027 5.3167C3.7066 5.15271 3.50066 5.06428 3.2898 5.08123C3.07887 5.09771 2.88926 5.2167 2.7827 5.39959C2.02192 6.70497 1.61973 8.19801 1.61973 9.71715C1.61973 11.7862 2.3584 13.7492 3.66332 15.2832C3.26652 15.1458 2.88152 14.9741 2.51403 14.7701C2.31676 14.6603 2.07598 14.662 1.87997 14.7743C1.68387 14.8867 1.5609 15.0934 1.55567 15.3193C1.55473 15.3574 1.55473 15.3954 1.55473 15.434C1.55473 18.5223 3.21691 21.3029 5.75823 22.8183C5.53987 22.7965 5.32175 22.7649 5.10495 22.7235C4.88144 22.6808 4.65167 22.7591 4.50097 22.9296C4.35003 23.0999 4.30003 23.3373 4.36964 23.5541C5.31026 26.4909 7.73205 28.651 10.6598 29.3096C8.2315 30.8305 5.45464 31.6271 2.53957 31.6271C1.93129 31.6271 1.31958 31.5914 0.720907 31.5206C0.423487 31.4852 0.139113 31.6608 0.037785 31.9437C-0.0635427 32.2267 0.0438787 32.5421 0.296847 32.7043C4.04175 35.1055 8.37189 36.3746 12.819 36.3746C21.5614 36.3746 27.0304 32.2521 30.0788 28.7936C33.8801 24.4812 36.0601 18.7733 36.0601 13.1335C36.0601 12.8978 36.0566 12.6599 36.0493 12.4228C37.549 11.2928 38.8402 9.92535 39.8909 8.35364C40.0505 8.11497 40.0333 7.79942 39.8483 7.57974C39.6639 7.35966 39.3561 7.28856 39.0934 7.40497Z" fill="#06D6A0"/>
              </g>
              <defs>
              <clipPath id="clip0_160_4155">
              <rect width="40" height="40" fill="white"/>
              </clipPath>
              </defs>
              </svg>
          </a>
          <a href={facebook.url}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" viewBox="0 0 22 40" fill="none">
              <path d="M1.54233 21.304H5.92694V39.3548C5.92694 39.7113 6.21569 40 6.5721 40H14.0064C14.3628 40 14.6515 39.7113 14.6515 39.3548V21.3891H19.6921C20.0198 21.3891 20.2956 21.1431 20.333 20.8176L21.0986 14.1722C21.1196 13.9894 21.0617 13.8063 20.9394 13.6691C20.8169 13.5318 20.6417 13.4532 20.4578 13.4532H14.6519V9.2875C14.6519 8.0318 15.328 7.395 16.6617 7.395C16.8518 7.395 20.4578 7.395 20.4578 7.395C20.8142 7.395 21.103 7.10609 21.103 6.74984V0.649922C21.103 0.293516 20.8142 0.00476563 20.4578 0.00476563H15.2262C15.1893 0.00296875 15.1073 0 14.9865 0C14.0788 0 10.9236 0.178203 8.43116 2.47109C5.66959 5.01203 6.0535 8.0543 6.14522 8.5818V13.453H1.54225C1.18584 13.453 0.897095 13.7418 0.897095 14.0982V20.6588C0.897173 21.0151 1.18592 21.304 1.54233 21.304Z" fill="#06D6A0"/>
            </svg>
          </a> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}

<style lang="postcss">
  .fundo {
    @apply flex  py-2 justify-center  backdrop-blur-lg border-b-[1px] border-surface-50 absolute top-0 w-full z-10;
  }
  .table {
    @apply flex w-full h-full;
  }
  .menu {
    @apply grow flex flex-row items-center w-full h-full font-normal gap-1 text-primary-600 text-base;
  }
  .button-menu {
    @apply flex gap-2 items-center h-full;
  }
  .logo {
    @apply grow-0 h-10 justify-center items-center;
  }
  .logo-img {
    @apply object-contain h-full w-40;
  }
  .contato {
    @apply grow w-full items-center px-2;
  }
  .botoes {
    @apply lg:flex gap-4 justify-end items-center hidden;
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
    @apply fixed inset-0 z-0  bg-primary-700/30 backdrop-blur-sm;
  }
  .drawer__unique14 {
    @apply fixed top-0 bottom-0 right-0 z-10 w-full overflow-y-auto p-6  bg-surface-100 sm:max-w-sm sm:shadow-lg;
  }
  .drawer__unique15 {
    @apply flex items-center justify-between;
  }
  .drawer-logo {
    @apply h-12 w-auto drop-shadow-sm;
  }
  .drawer-close {
    @apply flex rounded-full p-1 opacity-10 bg-gray-700/20 absolute right-4 top-10;
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
</style>
