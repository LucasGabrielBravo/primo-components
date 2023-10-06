<script lang="ts">
    import BlockListTopicItens from "$lib/components/blocks/blockContent/BlockListTopicItens.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IParagrafo } from "../../types/fields";
    export let Hst: Hst;

    let items: IParagrafo[] = [
        {
            text: "(injected humour and the like).",
        },
        {
            text: "(injected humour and the like).",
        },
        {
            text: "(injected humour and the like).",
        },
        {
            text: "(injected humour and the like).",
        },
        {
            text: "(injected humour and the like).",
        },
        {
            text: "(injected humour and the like).",
        },
    ];
</script>

<Hst.Story title="BlockListTopicItens">
    <BlockListTopicItens {items} />

    <svelte:fragment slot="controls" />
</Hst.Story>
