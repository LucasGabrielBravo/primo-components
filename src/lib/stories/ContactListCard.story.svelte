<script lang="ts">
    import ContactListCard from "$lib/components/blocks/listCards/ContactListCard.svelte";
    import type { Hst } from "@histoire/plugin-svelte";
    import type { IBotao, IImage } from "../../types/fields";
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
    let image: IImage = {
        alt: "image",
        url: "https://s3-alpha-sig.figma.com/img/93fd/af30/e5b51b76aa4720af3a2080f892f6303f?Expires=1696809600&Signature=p6DfbxY7cQ7pexkZ8LTxgQG1PMr0flhuoylIj1wVIr2YQv-MCDaAH2OcbknmIZA9SztdOf0HklNUUekRMo03LABZJaWi5xnsfsYorsg-Yfe6PJajfCionHXVHKOnSVcrM2m~es7VJwg6FmNiat4hh9SJsO~kqpNU9TA4t9SAdP~oIlmHLEsZwAtfm0TNltNx-Gbxyw4THoQKJI3a7xSWS3RIf5Jdeq8Wh~PR04ih0LO9hp2EUnMgQuoX7i4eR6nyO3fOTy0VjfljhQjsfIcWyHFGKqrO61IoIkxwhAoVbZLP4ZlDZXzhtjVTb3j-F7Tk24UKD0VD3eatry5BZ-jy8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    };
</script>

<Hst.Story title="ContactListCard">
    <ContactListCard {titulo} {botao} {passos} {image} />

    <svelte:fragment slot="controls" />
</Hst.Story>
