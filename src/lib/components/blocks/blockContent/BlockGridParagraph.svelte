<script lang="ts">
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import type { IParagrafo } from "../../../../types/fields";
    export let paragrafos: IParagrafo[];
</script>

<ContainerPage>
    <div class="paragrafos">
        {#each paragrafos as item}
            <span class="paragrafo">{item.text}</span>
        {/each}
    </div>
</ContainerPage>

<style lang="postcss">
    .paragrafos {
        @apply grid grid-cols-1 md:grid-cols-2 w-full gap-4 py-8;
    }
    .paragrafo {
        @apply text-lg text-surface-900 font-normal leading-7;
    }
</style>
