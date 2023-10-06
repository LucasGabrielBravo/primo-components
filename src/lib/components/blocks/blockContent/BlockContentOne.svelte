<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import Check from "$lib/components/icons/Check.svelte";
    import type { IBotao, IImage, IParagrafo } from "../../../../types/fields";

    export let listCuidados: IParagrafo[];
    export let titulo: string;
    export let paragrafo: string;
    export let imageGrande: IImage;
    export let imagePequena: IImage;
    export let botao1: IBotao;
</script>

<div class="ajust">
    <ContainerPage>
        <div class="table">
            <div class="conteudo-text">
                <div class="box-chamada-text">
                    <span class="chamada-title" data-key="titulo">
                        {@html titulo}
                    </span>
                    <span class="chamda-text" data-key="paragrafo">
                        {@html paragrafo}
                    </span>

                    <div class="cuidados">
                        {#each listCuidados as cuidado, i}
                            <span
                                class="cuidado-texto"
                                data-key="listcuidados[{i}].cuidado"
                            >
                                <span class="cuidado-icon">
                                    <Check />
                                </span>
                                {cuidado.text}
                            </span>
                        {/each}
                    </div>

                    <div class="chamada-botoes" data-key="botao1">
                        <Button
                            color="secondary"
                            size="lg"
                            href={botao1.url}
                            shaddow="shaddow-lg"
                        >
                            {@html botao1.label}
                        </Button>
                    </div>
                </div>
            </div>
            <div class="box-images">
                <div class="image-grande">
                    <div class="circle" />
                    <div class="svg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 138 250"
                            fill="none"
                        >
                            <path
                                d="M91.4285 1.11949C92.666 0.376852 94.2076 0.358479 95.4625 1.07141L135.3 23.7039C138.186 25.3435 137.935 29.5821 134.875 30.869L115.104 39.1844C113.816 39.7261 112.339 39.5564 111.207 38.7365L100.128 30.7104C98.8568 29.7899 97.1652 29.6974 95.8016 30.4738L35.4634 64.8323C34.0484 65.6381 33.263 67.2213 33.4776 68.8355L56.96 245.446C57.3426 248.323 54.6297 250.637 51.8489 249.805L28.2913 242.761C26.7907 242.312 25.6901 241.028 25.4752 239.477L0.415184 58.5718C0.195214 56.9839 0.944544 55.418 2.31914 54.5931L91.4285 1.11949Z"
                                fill="#D9D9D9"
                            />
                        </svg>
                    </div>
                    <div class="box-image-grande">
                        <div class="box-position-image-grande">
                            <div class="bg-solid" />
                            <img
                                class="imagem"
                                src={imageGrande.url}
                                alt={imageGrande.alt}
                            />
                        </div>
                    </div>
                </div>
                <div class="image-pequena">
                    <div class="circle" />
                    <div class="svg-pequeno">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 138 250"
                            fill="none"
                        >
                            <path
                                d="M91.4285 1.11949C92.666 0.376852 94.2076 0.358479 95.4625 1.07141L135.3 23.7039C138.186 25.3435 137.935 29.5821 134.875 30.869L115.104 39.1844C113.816 39.7261 112.339 39.5564 111.207 38.7365L100.128 30.7104C98.8568 29.7899 97.1652 29.6974 95.8016 30.4738L35.4634 64.8323C34.0484 65.6381 33.263 67.2213 33.4776 68.8355L56.96 245.446C57.3426 248.323 54.6297 250.637 51.8489 249.805L28.2913 242.761C26.7907 242.312 25.6901 241.028 25.4752 239.477L0.415184 58.5718C0.195214 56.9839 0.944544 55.418 2.31914 54.5931L91.4285 1.11949Z"
                                fill="#D9D9D9"
                            />
                        </svg>
                    </div>
                    <div class="box-image-grande">
                        <div class="box-position-image-pequena">
                            <div class="bg-solid-pequena" />
                            <img
                                class="imagem"
                                src={imagePequena.url}
                                alt={imagePequena.alt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContainerPage>
</div>

<style lang="postcss">
    .ajust {
        @apply py-8;
    }
    .table {
        @apply grid grid-cols-1 md:grid-cols-2;
    }
    .conteudo-text {
        @apply flex flex-col h-full;
    }
    .box-chamada-text {
        @apply flex flex-col w-full gap-8;
    }
    .chamada-title {
        @apply border-l-4 border-secondary-500 pl-6 font-bold text-primary-500 text-2xl md:text-3xl  max-w-sm;
    }
    .chamda-text {
        @apply text-primary-500 text-base md:text-lg font-medium max-w-lg;
    }
    .cuidados {
        @apply flex flex-col gap-2;
    }
    .cuidado-icon {
        @apply text-secondary-500 font-normal;
    }
    .cuidado-texto {
        @apply flex items-center gap-1 font-medium text-base text-surface-700;
    }
    .chamada-botoes {
        @apply flex flex-col md:flex-row gap-2;
    }
    .box-images {
        @apply grid grid-cols-1 sm:grid-cols-2 w-full items-center h-[600px] md:h-full;
    }
    .image-grande {
        @apply overflow-hidden w-full relative h-full  flex flex-col p-4;
    }
    .circle {
        @apply aspect-square w-[15%]  bg-primary-500 rounded-full absolute;
    }
    .svg {
        @apply w-[30%] h-[40%] absolute left-[20%]  top-[10%];
    }
    .bg-solid {
        @apply bg-primary-500 rounded-sm w-[50%] h-[120%] md:h-[110%] absolute left-[25%] md:left-[25%];
    }
    .box-image-grande {
        @apply h-[90%] md:h-[80%] flex w-[90%] absolute justify-center top-[10%];
    }
    .box-position-image-grande {
        @apply relative flex w-full top-[10%] h-[90%] items-center;
    }
    .imagem {
        @apply h-full absolute -right-[11%] md:-right-[30%] rounded-sm object-cover object-center;
    }
    .image-pequena {
        @apply overflow-hidden w-[60%] relative h-[60%] flex flex-col p-4  mx-auto;
    }
    .box-position-image-pequena {
        @apply relative flex w-full top-[15%] md:top-[10%] h-[90%] items-center;
    }
    .bg-solid-pequena {
        @apply bg-primary-500 rounded-sm w-[50%] h-[110%] absolute left-[20%];
    }
    .svg-pequeno {
        @apply w-[30%] h-[40%] absolute left-[20%] top-[15%] md:top-[11%];
    }
</style>
