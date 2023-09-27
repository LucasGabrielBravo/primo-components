<script lang="ts">
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    export let titulo: string;
</script>

<ContainerPage>
    <div class="box-title">
        <span class="chamada-title">
            {titulo}
        </span>
    </div>
</ContainerPage>

<style lang="postcss">
    .box-title {
        @apply flex flex-col w-full gap-8 mt-96 md:mt-0 py-8;
    }
    .chamada-title {
        @apply border-l-4 border-secondary-500 pl-6 font-bold text-primary-500 text-2xl md:text-4xl  max-w-sm;
    }
</style>
