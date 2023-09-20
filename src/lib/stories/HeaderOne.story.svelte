<script lang="ts">
    import HeaderOne from "$lib/components/blocks/HeaderOne.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    export let Hst: Hst;
</script>

<Hst.Story title="HeaderOne">
    <HeaderOne />

    <svelte:fragment slot="controls" />
</Hst.Story>
