<script lang="ts">
    interface IImage {
        alt: string;
        url: string;
    }

    interface ICard {
        icon: IImage;
        number: string;
        descricao: string;
    }

    export let list: ICard[];
</script>

<div class="ajust">
    <div class="fundo-cards">
        {#each list as item, i}
            <div class="card">
                <img
                    src={item.icon.url}
                    alt={item.icon.alt}
                    data-key="list[{i}].item.icon"
                    class="img-card"
                />
                <span class="number" data-key="list[{i}].item.number"
                    >{@html item.number}</span
                >
                <span class="descricao" data-key="list[{i}].item.descricao"
                    >{@html item.descricao}</span
                >
            </div>
        {/each}
    </div>
</div>

<style lang="postcss">
    .fundo-cards {
        @apply bg-primary-700 p-2 rounded-md flex flex-col md:flex-row gap-2 w-full;
    }
    .card {
        @apply bg-primary-500 rounded-md flex-1 items-center justify-center flex flex-col py-2;
    }
    .img-card {
        @apply w-14 h-14 text-primary-500;
    }
    .number {
        @apply text-secondary-500 font-bold md:text-4xl;
    }
    .descricao {
        @apply text-lg text-surface-50;
    }
    .ajust {
        @apply py-8;
    }
</style>
