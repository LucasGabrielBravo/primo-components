<script lang="ts">
    import ContainerPage from "$lib/components/ContainerPage.svelte";

    export let titulobranco: string;
    export let titulosecunday: string;
    export let paragrafo: string;
    export let autor: string;
    export let servicocontratado: string;
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
            <div class="conteudo-text">
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

<style lang="postcss">
    .fundo {
        @apply bg-primary-700 min-h-[70vh] relative w-full overflow-hidden justify-center items-center;
    }
    .svg-top {
        @apply text-primary-800 absolute left-0 -top-[30%];
    }
    .svg-bottom {
        @apply text-primary-600 absolute right-0 -bottom-[30%];
    }
    .conteudo {
        @apply absolute flex w-full h-full;
    }
    .conteudo-text {
        @apply flex w-full h-full  justify-center items-center flex-col py-12;
    }
    .textos {
        @apply max-w-md flex w-full h-full flex-col items-center justify-center gap-8;
    }
    .titulo-surface {
        @apply text-surface-50 font-bold text-5xl text-center;
    }
    .titulo-secondary {
        @apply text-secondary-500;
    }
    .paragrafo {
        @apply text-surface-50 font-medium text-xl text-left;
    }
    .autor-box {
        @apply flex flex-col text-surface-50 w-full;
    }
    .autor {
        @apply font-light text-sm  text-left;
    }
    .servicoContratado {
        @apply font-normal text-sm  text-left;
    }
</style>
