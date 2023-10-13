<script>import ContainerPage from "../../ContainerPage.svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
import { onMount } from "svelte";
export let titulobranco;
export let titulosecunday;
export let paragrafo;
export let autor;
export let servicocontratado;
onMount(() => {
  setupAnimations();
});
</script>

<div class="fundo">
  <svg
    class="svg-top 0E1A4D"
    xmlns="http://www.w3.org/2000/svg"
    width="401"
    height="469"
    viewBox="0 0 401 469"
    fill="none"
  >
    <path
      d="M6.10352e-05 454.854C70.808 470.707 150.502 483.383 210.347 431.151C270.064 379.031 276.55 270.393 308.219 185.842C341.054 98.1803 408.357 22.2206 399.88 -74.8605C391.391 -172.077 324.19 -241.551 265.626 -301.924C214.504 -354.625 151.59 -375.218 88.5461 -395.809C28.05 -415.566 -31.5469 -423.633 -93.7939 -419.312C-172.803 -413.827 -262.674 -434.638 -322.948 -367.24C-384.013 -298.959 -403.635 -180.548 -401.557 -75.1775C-399.622 22.9202 -355.84 108.703 -311.995 188.109C-274.624 255.792 -222.185 300.667 -168.859 346.259C-115.243 392.099 -63.0449 440.74 6.10352e-05 454.854Z"
      fill="currentColor"
    />
  </svg>
  <svg
    class="svg-bottom 162873"
    xmlns="http://www.w3.org/2000/svg"
    width="472"
    height="602"
    viewBox="0 0 472 602"
    fill="none"
  >
    <path
      d="M472 1256.54C562.587 1277.68 633.866 1156.65 712.212 1093.23C792.293 1028.4 903.085 996.239 936.383 880.589C969.735 764.75 887.304 648.301 875.706 525.381C863.774 398.927 927.721 250.879 867.542 151.007C807.726 51.7391 688.065 81.8052 593.587 57.1845C508.474 35.0044 422.09 -25.8551 340.706 13.7106C260.299 52.8016 228.706 175.336 173.397 261.464C118.949 346.25 41.626 409.297 18.205 515.91C-6.60299 628.837 -10.553 764.824 41.91 859.995C93.719 953.978 208.697 925.942 280.974 992.582C358.166 1063.75 379.176 1234.88 472 1256.54Z"
      fill="currentColor"
    />
  </svg>
  <div class="conteudo">
    <ContainerPage>
      <div class="conteudo-text" id="from-bot">
        <div class="textos">
          <span class="titulo-surface">
            {titulobranco}
            <span class="titulo-secondary">
              {titulosecunday}
            </span>
          </span>
          <span class="paragrafo">
            {paragrafo}
          </span>
          <div class="autor-box">
            <span class="autor">{autor}</span>
            <span class="servicoContratado">
              {servicocontratado}
            </span>
          </div>
        </div>
      </div>
    </ContainerPage>
  </div>
</div>

<style>
  .fundo {
    position: relative;
    min-height: 70vh;
    width: 100%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-700, 29 78 216) / var(--tw-bg-opacity))
}
  .svg-top {
    position: absolute;
    left: 0px;
    top: -30%;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-800, 30 64 175) / var(--tw-text-opacity))
}
  .svg-bottom {
    position: absolute;
    right: 0px;
    bottom: -30%;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-600, 37 99 235) / var(--tw-text-opacity))
}
  .conteudo {
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%
}
  .conteudo-text {
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 3rem;
    padding-bottom: 3rem
}
  .textos {
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 28rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem
}
  .titulo-surface {
    text-align: center;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {
    .titulo-surface {
        font-size: 1.875rem;
        line-height: 2.25rem
    }
}
  .titulo-secondary {
    --tw-text-opacity: 1;
    color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-text-opacity))
}
  .paragrafo {
    text-align: left;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
  .autor-box {
    display: flex;
    width: 100%;
    flex-direction: column;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
  .autor {
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 300
}
  .servicoContratado {
    text-align: left;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 400
}
</style>
