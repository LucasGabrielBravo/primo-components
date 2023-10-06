<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import type { IParagrafo } from "../../../../types/fields";

    interface IServico {
        image: {
            url: string;
            alt: string;
        };
        servico: string;
    }

    export let titulo: string;
    export let paragrafos: IParagrafo[];
    export let listservicos: IServico[];
</script>

<div class="ajust">
    <ContainerPage>
        <div class="conteudo">
            {#if titulo}
                <span class="titulo">{titulo}</span>
            {/if}
            {#if paragrafos}
                {#each paragrafos as paragrafo}
                    <span class="paragrafo">{paragrafo.text}</span>
                {/each}
            {/if}
            <div class="table">
                {#each listservicos as servico}
                    <div class="servico-card">
                        <img
                            src={servico.image.url}
                            alt={servico.image.alt}
                            class="image-servico"
                        />

                        <div class="servico-card-text-balao">
                            <span class="text-balao">{servico.servico}</span>
                        </div>
                    </div>
                {/each}
            </div>

            <Button color="secondary" size="md" href="/" shaddow="shaddow-lg">
                <!-- {@html botao1.label} -->
                Conheça os serviços
            </Button>
        </div>
    </ContainerPage>
</div>

<style lang="postcss">
    .conteudo {
        @apply flex flex-col items-center justify-center gap-12;
    }
    .table {
        @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-2;
    }
    .titulo {
        @apply text-primary-500 text-2xl md:text-3xl font-bold text-center;
    }
    .paragrafo {
        @apply text-surface-700 text-base font-normal text-center max-w-4xl;
    }
    .servico-card {
        @apply relative overflow-hidden rounded-sm drop-shadow-sm h-96;
    }
    .image-servico {
        @apply object-cover w-full h-full;
    }
    .servico-card-text-balao {
        @apply absolute bottom-2 w-full items-center justify-center flex;
    }
    .text-balao {
        @apply bg-surface-50/80 px-8 py-6 text-primary-500 font-medium text-lg w-full max-w-[90%] text-center;
    }
    .ajust {
        @apply py-10;
    }
</style>
