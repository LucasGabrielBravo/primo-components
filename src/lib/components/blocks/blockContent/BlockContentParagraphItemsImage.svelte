<script lang="ts">
    import ContainerPage from "$lib/components/ContainerPage.svelte";

    import type { IImage, IParagrafo } from "../../../../types/fields";

    export let titulo: string;
    export let image: IImage;
    export let paragrafo: string;
    export let titulolista: string;
    export let items: IParagrafo[];
</script>

<div class="box">
    <ContainerPage>
        <div class="table">
            <div class="box-image">
                <span class="chamada-title">
                    {titulo}
                </span>
                <div class="image-div">
                    <img src={image.url} alt={image.alt} class="image" />
                </div>
            </div>
            <div class="text">
                <span class="paragrafo"> {paragrafo} </span>
                <div class="lista">
                    <ul class="lista-items">
                        <span class="titulo-lista">{titulolista}</span>
                        {#each items as item, i}
                            <li class="">
                                <span class="item-dot">•</span>
                                <span class="item-text">{item.text}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </ContainerPage>
</div>

<style lang="postcss">
    .box {
        @apply py-8;
    }
    .table {
        @apply w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4;
    }
    .box-image {
        @apply w-full flex flex-col gap-4;
    }
    .chamada-title {
        @apply border-l-4 border-secondary-500 pl-6 font-bold text-primary-500 text-2xl md:text-4xl max-w-4xl;
    }
    .image-div {
        @apply md:w-[50%] ml-12 my-auto flex;
    }
    .image {
        @apply w-[50%];
    }
    .text {
        @apply flex flex-col w-full gap-2;
    }
    .lista {
        @apply flex flex-col gap-2;
    }
    .titulo-lista {
        @apply text-lg font-semibold;
    }
    .lista-items {
        @apply flex flex-col gap-4 py-8;
    }
    .item-dot {
        @apply font-bold text-secondary-500;
    }
    .item-text {
        @apply text-surface-900 font-medium;
    }
    .paragrafo {
        @apply text-lg font-light leading-7;
    }
</style>
