<script lang="ts">
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import type { IImage, ILink } from "../../../../types/fields";

    interface IRedessocias {
        logoredesocial: IImage;
        link: ILink;
    }

    export let logo: IImage;
    export let links: ILink[];
    export let redessocias: IRedessocias[];
    export let textodireitos: string;
    export let politica: ILink;

    const data = new Date();
    const ano = data.getFullYear();
</script>

<div class="fundo">
    <ContainerPage>
        <div class="conteudo">
            <div class="links">
                {#each links as link}
                    <a class="link" href={link.url}>
                        <span>{link.label}</span></a
                    >
                {/each}
            </div>
            <a href="/" class="logo">
                <img src={logo.url} alt={logo.alt} />
            </a>
            <div class="redes-socias">
                {#each redessocias as redesocial}
                    <a class="rede-social" href={redesocial.link.url}>
                        <img
                            src={redesocial.logoredesocial.url}
                            alt={redesocial.logoredesocial.alt}
                            class="rede-social-logo"
                        />
                    </a>
                {/each}
            </div>
            <div class="copyright">
                <span> © {ano} {textodireitos} </span>
            </div>
            {#if politica.url}
                <a class="politica" href={politica.url}>{politica.label}</a>
            {/if}
        </div>
    </ContainerPage>
</div>

<style lang="postcss">
    .fundo {
        @apply bg-secondary-500 py-6;
    }
    .conteudo {
        @apply flex flex-col justify-center items-center gap-8;
    }
    .links {
        @apply flex flex-col md:flex-row items-center gap-5 p-4;
    }
    .link {
        @apply no-underline text-surface-50 transition-all text-base font-normal;
        @apply hover:scale-105;
    }
    .logo {
        @apply max-w-[106px];
    }
    .redes-socias {
        @apply flex flex-row gap-4;
    }
    .rede-social {
        @apply w-7 h-7 text-surface-50;
        @apply hover:scale-105;
    }
    .rede-social-logo {
        @apply object-contain h-full w-full;
    }
    .copyright {
        @apply text-surface-50 text-sm text-center;
    }
    .politica {
        @apply w-full justify-center flex py-4 text-xs transition-all text-surface-50/80 hover:text-surface-50/80;
    }
</style>
