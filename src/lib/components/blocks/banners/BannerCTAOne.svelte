<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import type { IBotao, IImage, IParagrafo } from "../../../../types/fields";

    export let titulo: string;
    export let paragrafos: IParagrafo[];
    export let botao1: IBotao;

    export let backgroundimage: IImage;
</script>

<div class="box">
    <img
        class="img-fundo"
        data-key="backgroundimage"
        src={backgroundimage.url}
        alt={backgroundimage.alt}
    />

    <div class="conteudo">
        <ContainerPage>
            <div class="conteudo-text">
                <div class="chamada">
                    <div class="box-chamada-text">
                        <span class="chamada-title" data-key="titulo">
                            {@html titulo}
                        </span>
                        <div class="chamada-text">
                            {#each paragrafos as paragrafo, i}
                                <span data-key="paragrafos[{i}].paragrafo">
                                    {@html paragrafo.text}
                                </span>
                            {/each}
                        </div>
                        <div class="chamada-botoes" data-key="botao1">
                            <Button
                                color="secondary"
                                size="md"
                                variant="ringed"
                                href={botao1.url}
                            >
                                {@html botao1.label}
                            </Button>
                        </div>
                    </div>
                    <span class="aria-vazia" />
                </div>
            </div>
        </ContainerPage>
    </div>
</div>

<style lang="postcss">
    .box {
        @apply relative  min-h-max  w-full items-center;
    }
    .img-fundo {
        @apply absolute inset-0 h-full w-full object-cover object-left;
    }
    .conteudo {
        @apply relative h-full flex py-12;
    }
    .conteudo-text {
        @apply flex flex-col h-full;
    }
    .chamada {
        @apply flex my-auto;
    }
    .box-chamada-text {
        @apply flex flex-col w-full gap-12 my-8 md:my-0;
    }
    .chamada-title {
        @apply font-bold text-primary-500 text-2xl md:text-3xl max-w-sm;
    }
    .chamada-text {
        @apply text-surface-50 text-base md:text-lg font-normal max-w-sm flex flex-col gap-4;
    }
    .chamada-botoes {
        @apply flex flex-col md:flex-row gap-2;
    }
    .aria-vazia {
        @apply md:flex w-full hidden;
    }
</style>
