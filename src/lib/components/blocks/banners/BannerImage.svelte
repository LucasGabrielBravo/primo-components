<script lang="ts">
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import type { IImage } from "../../../../types/fields";

    export let image: IImage;
</script>

<div class="ajust">
    <ContainerPage>
        <div class="box-image">
            <img src={image.url} alt={image.alt} class="image" />
        </div>
    </ContainerPage>
</div>

<style lang="postcss">
    .ajust {
        @apply py-8;
    }
    .box-image {
        @apply flex w-full h-[60vh] md:h-[40vh] drop-shadow-md overflow-hidden rounded-lg;
    }
    .image {
        @apply w-full h-full  object-cover object-center;
    }
</style>
