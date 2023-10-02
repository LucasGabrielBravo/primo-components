<script lang="ts">
    import ListCardPrimaryFull from "$lib/components/blocks/listCards/ListCardPrimaryFull.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    export let Hst: Hst;

    let list = [
        {
            icon: {
                alt: "icon",
                url: "https://www.essenzahotel.com.br/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg",
            },
            number: "100",
            descricao: "Teste",
        },
        {
            icon: {
                alt: "icon",
                url: "https://www.essenzahotel.com.br/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg",
            },
            number: "100",
            descricao: "Teste",
        },
        {
            icon: {
                alt: "icon",
                url: "https://www.essenzahotel.com.br/wp-content/plugins/nd-booking/assets/img/icons/icon-user-grey.svg",
            },
            number: "100",
            descricao: "Teste",
        },
    ];
</script>

<Hst.Story title="ListCardPrimaryFull">
    <ListCardPrimaryFull {list} />

    <svelte:fragment slot="controls" />
</Hst.Story>
