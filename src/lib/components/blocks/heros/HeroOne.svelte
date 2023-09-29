<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import clsx from "clsx";
    import type { IBotao, IImage } from "../../../../types/fields";

    interface IDiferencial {
        titulo: string;
        descricao: string;
        icon: IImage;
    }

    export let titulo: string;
    export let paragrafo: string;
    export let botao1: IBotao;
    export let botao2: IBotao;
    export let diferenciais: IDiferencial[];
    export let backgroundimage: IImage;
</script>

<div class="box">
    <img
        class="img-fundo"
        data-key="backgroundimage"
        src={backgroundimage.url}
        alt=""
    />

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
                            <Button
                                color="secondary"
                                size="md"
                                href={botao1.url}
                            >
                                {@html botao1.label}
                            </Button>
                            <a
                                class="botao-chamada"
                                data-key="botao2"
                                href={botao2.url}
                            >
                                {@html botao2.label}
                            </a>
                        </div>
                    </div>
                    <span class="aria-vazia" />
                </div>
                <div class="box-botoes">
                    {#each diferenciais as diferencial, i}
                        <div
                            class={clsx(
                                "",
                                i % 2 === 0 ? "botao-1" : "botao-2"
                            )}
                        >
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
</div>

<style lang="postcss">
    .box {
        @apply relative  min-h-max  md:aspect-video items-center;
    }
    .img-fundo {
        @apply absolute inset-0 h-full w-full object-cover object-center;
    }
    .conteudo {
        @apply relative h-full flex;
    }
    .conteudo-text {
        @apply flex flex-col h-full pt-8;
    }
    .chamada {
        @apply flex my-auto;
    }
    .box-chamada-text {
        @apply flex flex-col w-full gap-8 mt-96 md:mt-0 lg:pt-14;
    }
    .chamada-title {
        @apply border-l-4 border-secondary-500 pl-6 font-bold text-primary-500 text-2xl md:text-3xl  max-w-sm;
    }
    .chamda-text {
        @apply text-primary-500 text-base md:text-lg font-medium max-w-sm;
    }
    .chamada-botoes {
        @apply flex flex-col md:flex-row gap-2;
    }
    .botao-chamada {
        @apply text-base underline !text-primary-500 px-4 py-2 flex flex-row items-center justify-center;
    }
    .aria-vazia {
        @apply md:flex w-full hidden;
    }
    .box-botoes {
        @apply hidden mt-auto mx-auto lg:grid lg:grid-cols-3 p-2 gap-2 backdrop-blur-lg w-full rounded-t-md min-h-max;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
    }
    .botao-1 {
        @apply flex py-2 px-5 gap-2 items-center justify-center;
    }
    .botao-2 {
        @apply flex py-2 px-5 gap-2 items-center justify-center border-y-2 md:border-x-2 md:border-y-0 border-surface-50;
    }
    .icon-botao {
        @apply h-9 w-9 md:h-[51px] md:w-[51px];
    }
    .box-icon-descripition {
        @apply flex flex-col;
    }
    .text-descripition-first {
        @apply font-bold text-lg text-primary-500;
    }
    .text-descripition-second {
        @apply font-medium text-base text-surface-50;
    }
</style>
