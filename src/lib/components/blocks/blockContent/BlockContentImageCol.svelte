<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import type { IBotao, IImage } from "../../../../types/fields";

    interface IConteudo {
        image: IImage;
        titulo: string;
        texto: string;
        botao: IBotao;
    }

    export let toptitulo: string;
    export let titulo: string;
    export let subtitulo: string;

    export let conteudos: IConteudo[];
</script>

<ContainerPage>
    {#if toptitulo || titulo || subtitulo}
        <header class="heading-group">
            {#if toptitulo}
                <span class="toptitulo">{toptitulo}</span>
            {/if}
            {#if titulo}
                <h2 class="titulo">{titulo}</h2>
            {/if}
            {#if subtitulo}
                <span class="subtitulo">{subtitulo}</span>
            {/if}
        </header>
    {/if}
    <div class="conteudos">
        {#each conteudos as conteudo, i}
            <div class="conteudo">
                {#if conteudo.image.url}
                    <img
                        class="image-conteudo"
                        src={conteudo.image.url}
                        alt={conteudo.image.alt}
                    />
                {/if}
                <div class="body">
                    <h2 class="title">{conteudo.titulo}</h2>
                    <span class="content">{@html conteudo.texto}</span>
                    {#if conteudo.botao.url}
                        <Button
                            href={conteudo.botao.url}
                            color="primary"
                            size="md"
                            variant="ringed"
                        >
                            {conteudo.botao.label}
                        </Button>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</ContainerPage>

<style lang="postcss">
    .heading-group {
        @apply flex flex-col mb-12 text-center gap-4;
    }
    .toptitulo {
        @apply text-xl text-secondary-500;
    }
    .titulo {
        @apply text-4xl font-medium text-[#000];
    }
    .conteudos {
        @apply grid grid-cols-1 md:grid-cols-2 gap-24;
    }
    .conteudo {
        @apply grid  grid-cols-1 md:place-items-center gap-6 h-max;
    }
    .image-conteudo {
        @apply w-auto h-auto rounded-lg object-cover drop-shadow-md;
    }
    .body {
        @apply flex flex-col items-start gap-4 p-0 w-full h-full justify-center text-left;
    }
    .title {
        @apply text-xl text-secondary-500 font-medium;
    }
    .content {
        @apply text-surface-700 text-base md:text-lg;
    }
</style>
