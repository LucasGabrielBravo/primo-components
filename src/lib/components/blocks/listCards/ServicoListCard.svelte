<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ContainerPage from "$lib/components/ContainerPage.svelte";

    interface IServico {
        image: {
            url: string;
            alt: string;
        };
        servico: string;
    }

    export let titulo: string;
    export let paragrafo: string;
    export let listservicos: IServico[];
</script>

<div class="ajust">
    <ContainerPage>
        <div class="conteudo">
            <span class="titulo">{titulo}</span>
            <span class="paragrafo">{paragrafo}</span>
            <div class="table">
                {#each listservicos as servico}
                    <div class="servico-card">
                        <div>
                            <img
                                src={servico.image.url}
                                alt={servico.image.alt}
                                class="image-servico"
                            />
                        </div>
                        <div class="servico-card-text-balao">
                            <span class="text-balao">{servico.servico}</span>
                        </div>
                    </div>
                {/each}
            </div>
            <Button color="secondary" size="lg" href="/">
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
        @apply grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 items-center justify-center gap-2;
    }
    .titulo {
        @apply text-primary-500 text-5xl font-bold;
    }
    .paragrafo {
        @apply text-surface-700 text-base font-medium text-center max-w-4xl;
    }
    .servico-card {
        @apply relative overflow-hidden rounded-sm drop-shadow-sm h-48;
    }
    .image-servico {
        @apply object-cover w-full h-auto;
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
