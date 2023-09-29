<script lang="ts">
    import ContactListCard from "$lib/components/blocks/listCards/ContactListCard.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IBotao } from "../../types/fields";
    export let Hst: Hst;

    let titulo = "Titulo";

    let botao: IBotao = {
        label: "Texto Botao",
        url: "/",
    };

    let passos = [
        {
            descricao: "Entre em contato pelo site ou Whatsapp",
            img: {
                url: "https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
                alt: "",
            },
        },
        {
            descricao:
                " Entre em contato pelo site ou WhatsappEntre em contato pelo site ou Whatsapp",
            img: {
                url: "https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
                alt: "",
            },
        },
        {
            descricao: "Entre em contato pelo site ou Whatsapp",
            img: {
                url: "https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
                alt: "",
            },
        },
        {
            descricao: "Entre em contato pelo site ou Whatsapp",
            img: {
                url: "https://www.shutterstock.com/image-vector/dotted-spiral-vortex-royaltyfree-images-600w-2227567913.jpg",
                alt: "",
            },
        },
    ];
</script>

<Hst.Story title="ContactListCard">
    <ContactListCard {titulo} {botao} {passos} />

    <svelte:fragment slot="controls" />
</Hst.Story>
