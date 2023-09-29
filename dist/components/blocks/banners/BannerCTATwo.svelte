<script>import Button from "../../Button.svelte";
import ContainerPage from "../../ContainerPage.svelte";
export let subtitulo;
export let titulo;
export let chamada;
export let botao;
export let image;
</script>

<div class="fundo">
    <ContainerPage>
        <div class="conteudo">
            <div class="box-image">
                <img src={image.url} alt={image.alt} />
            </div>

            <div class="texto">
                <div class="box-texto">
                    <div class="subtitulo">
                        <span> {subtitulo} </span>
                        <span class="titulo">
                            {titulo}
                        </span>
                        <span class="chamada">
                            {chamada}
                        </span>
                    </div>
                    <div class="btn-and-svg">
                        <Button
                            href={botao.url}
                            color="primary"
                            size="md"
                            shaddow="shaddow-lg"
                            >{botao.label}
                        </Button>
                        <svg
                            class="arrow-svg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="131"
                            height="36"
                            viewBox="0 0 131 36"
                            fill="none"
                        >
                            <path
                                d="M0.858721 6.42164C5.85805 16.7972 24.2207 28.3422 42.7287 32.724C49.6001 34.3617 57.6998 35.2976 64.4201 35.2474C88.9053 35.0834 111.083 25.0679 125.419 7.69909C126.212 6.7346 126.943 5.84522 127.051 5.72049C127.303 5.39311 126.264 7.67803 125.117 9.95179C124.602 10.9859 123.563 13.135 122.825 14.7442C121.09 18.4932 119.578 21.4088 118.404 23.2855C117.622 24.5366 117.479 24.8617 117.506 25.2588C117.574 26.0408 118.29 26.4821 119.09 26.2389C119.889 26.0091 121.804 22.6187 124.858 16.1108C125.786 14.1134 127.033 11.5239 127.631 10.3487C129.498 6.64059 130.537 3.96141 130.691 2.48186C130.802 1.40583 129.883 0.698658 128.488 0.784934C126.628 0.891004 123.55 1.60475 119.408 2.87427C113.538 4.68497 110.515 5.39085 106.842 5.81172C105.975 5.91208 105.157 6.07184 105.009 6.17893C104.421 6.60731 104.427 7.60036 105.043 8.08572C105.33 8.33304 105.464 8.347 106.407 8.29536C109.609 8.09743 114.078 7.07941 120.341 5.14639C122.898 4.35131 125.4 3.68654 125.387 3.80759C125.375 3.92865 124.064 5.55995 122.672 7.18288C115.975 14.9984 107.126 21.5438 97.4079 25.851C94.6439 27.0732 89.6444 28.879 86.8161 29.6731C79.1285 31.839 71.5086 32.829 62.8377 32.8127C59.5214 32.8084 50.1746 31.8383 46.9684 31.1656C35.527 28.768 25.7421 24.8158 16.8428 19.0114C10.3271 14.7323 5.69436 10.2544 3.38035 5.96282C2.93683 5.12825 2.50904 4.40408 2.43393 4.3419C2.35742 4.29317 2.09265 4.22491 1.82506 4.18354C1.44991 4.131 1.25185 4.20561 0.921084 4.51117C0.680786 4.73094 0.472438 5.0356 0.454289 5.21046C0.437536 5.37186 0.625166 5.92156 0.858721 6.42164Z"
                                fill="black"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </ContainerPage>
</div>

<style>
    .fundo {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-secondary-50, 254 235 243) / var(--tw-bg-opacity))
}
    .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem
}
    @media (min-width: 768px) {
    .conteudo {
        flex-direction: row
    }
}
    .box-image {
    display: flex;
    width: 14rem;
    overflow: hidden
}
    .texto {
    position: relative;
    display: flex;
    flex: 1 1 0%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem
}
    .box-texto {
    position: relative;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 2rem
}
    @media (min-width: 768px) {
    .box-texto {
        gap: 0px
    }
}
    @media (min-width: 1024px) {
    .box-texto {
        flex-direction: row
    }
}
    .subtitulo {
    display: flex;
    max-width: 42rem;
    flex: 1 1 0%;
    flex-direction: column;
    gap: 1rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-text-opacity))
}
    .titulo {
    width: 100%;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.875rem;
    line-height: 2.25rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-700, 113 122 127) / var(--tw-text-opacity))
}
    .chamada {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-700, 113 122 127) / var(--tw-text-opacity))
}
    .btn-and-svg {
    position: relative;
    display: flex;
    width: 100%
}
    @media (min-width: 640px) {
    .btn-and-svg {
        width: auto
    }
}
    .arrow-svg {
    position: absolute;
    bottom: -2.5rem;
    right: 5rem;
    display: none
}
    @media (min-width: 1024px) {
    .arrow-svg {
        display: block
    }
}
</style>
