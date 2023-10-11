<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import ContainerPage from "$lib/components/ContainerPage.svelte";
    import type { IOptions } from "$lib/utils/inview";
    import type { IBotao, IImage } from "../../../../types/fields";

    interface IConteudo {
        image: IImage;
        titulo: string;
        texto: string;
        botao: IBotao;
    }

    export let toptitulo: string;
    export let titulo: string;
    export let subtitulo: string;

    export let conteudos: IConteudo[];

    let sizeView = window.innerWidth;
    let isMobile = window.innerWidth < 768 ? true : false;

    $: if (sizeView < 768) {
        isMobile = true;
    } else {
        isMobile = false;
    }

    document.body.onresize = function () {
        sizeView = window.innerWidth;
    };

    let intersectionObserver: IntersectionObserver | undefined;

    function ensureIntersectionObserver(threshold: number) {
        if (intersectionObserver) return;

        intersectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    //const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport'
                    //entry.target.dispatchEvent(new CustomEvent(eventName))

                    if (entry.isIntersecting) {
                        const element = entry.target as HTMLElement;
                        element.style.opacity = "1";
                        element.style.transform = "";
                    }
                });
            },
            { threshold: threshold }
        );
    }

    function inview(element: HTMLElement, options?: Partial<IOptions>) {
        let { direction, distance, opacity, threshold, transition }: IOptions =
            {
                direction: "up",
                opacity: "0",
                threshold: 0,
                transition: 0.5,
                distance: 20,
            };

        if (options) {
            if (options.direction) {
                direction = options.direction;
            }

            if (options.distance) {
                distance = options.distance;
            }

            if (options.opacity) {
                opacity = options.opacity;
            }

            if (options.threshold) {
                threshold = options.threshold;
            }

            if (options.transition) {
                transition = options.transition;
            }
        }

        const directions = ((distance: number) => {
            return {
                up: `translateY(${distance}px)`,
                down: `translateY(-${distance}px)`,
                left: `translateX(${distance}px)`,
                right: `translateX(-${distance}px)`,
            };
        })(distance);

        ensureIntersectionObserver(threshold);

        if (intersectionObserver) {
            intersectionObserver.observe(element);

            element.style.opacity = opacity;
            element.style.transform = directions[direction];
            element.style.transition = `${transition}s`;
        }

        return {
            destroy() {
                if (intersectionObserver) {
                    intersectionObserver.unobserve(element);
                }
            },
        };
    }
</script>

<ContainerPage>
    {#if toptitulo || titulo || subtitulo}
        <header class="heading-group">
            {#if toptitulo}
                <span class="toptitulo">{toptitulo}</span>
            {/if}
            {#if titulo}
                <h2 class="titulo">{titulo}</h2>
            {/if}
            {#if subtitulo}
                <span class="subtitulo">{subtitulo}</span>
            {/if}
        </header>
    {/if}
    <div class="conteudos">
        {#if !isMobile}
            {#each conteudos as conteudo, i}
                {#if i % 2 !== 0}
                    <div
                        use:inview={{
                            distance: 10,
                            direction: "left",
                            transition: 2,
                            threshold: 1,
                        }}
                        class="conteudo"
                    >
                        {#if conteudo.image.url}
                            <img
                                class="image-conteudo"
                                src={conteudo.image.url}
                                alt={conteudo.image.alt}
                            />
                        {/if}
                        <div class="body">
                            <h2 class="title">{conteudo.titulo}</h2>
                            <span class="content">{@html conteudo.texto}</span>
                            {#if conteudo.botao.url}
                                <Button
                                    href=""
                                    color="primary"
                                    size="md"
                                    variant="ringed"
                                >
                                    {conteudo.botao.label}
                                </Button>
                            {/if}
                        </div>
                    </div>
                {:else}
                    <div
                        use:inview={{
                            distance: -10,
                            direction: "left",
                            transition: 2,
                            threshold: 1,
                        }}
                        class="conteudo"
                    >
                        <div class="body">
                            <h2 class="title">{conteudo.titulo}</h2>
                            <span class="content">{@html conteudo.texto}</span>
                            {#if conteudo.botao.url}
                                <Button
                                    href=""
                                    color="primary"
                                    size="md"
                                    variant="ringed"
                                >
                                    {conteudo.botao.label}
                                </Button>
                            {/if}
                        </div>
                        {#if conteudo.image.url}
                            <img
                                class="image-conteudo"
                                src={conteudo.image.url}
                                alt={conteudo.image.alt}
                            />
                        {/if}
                    </div>
                {/if}
            {/each}
        {:else}
            {#each conteudos as conteudo, i}
                <div class="conteudo">
                    <div class="body">
                        <h2 class="title">{conteudo.titulo}</h2>
                        <span class="content">{@html conteudo.texto}</span>
                        {#if conteudo.botao.url}
                            <Button
                                href=""
                                color="primary"
                                size="md"
                                variant="ringed"
                            >
                                {conteudo.botao.label}
                            </Button>
                        {/if}
                    </div>
                    {#if conteudo.image.url}
                        <img
                            class="image-conteudo"
                            src={conteudo.image.url}
                            alt={conteudo.image.alt}
                        />
                    {/if}
                </div>
            {/each}
        {/if}
    </div>
</ContainerPage>

<style lang="postcss">
    .heading-group {
        @apply flex flex-col mb-24 text-center gap-4;
    }
    .toptitulo {
        @apply text-xl text-secondary-500;
    }
    .titulo {
        @apply text-4xl font-medium text-[#000];
    }
    .conteudos {
        @apply grid gap-24;
    }
    .conteudo {
        @apply grid  md:grid-cols-2 md:place-items-center gap-6 h-max;
    }
    .image-conteudo {
        @apply w-auto h-auto rounded-lg object-cover drop-shadow-md;
    }
    .body {
        @apply flex flex-col items-start gap-4 p-0 w-full h-full justify-center text-left;
    }
    .title {
        @apply text-base md:text-lg text-secondary-500 font-medium;
    }
    .content {
        @apply text-surface-700 text-base;
    }
</style>
