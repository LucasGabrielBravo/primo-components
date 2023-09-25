<script lang="ts">
    import ContainerPage from "$lib/components/ContainerPage.svelte";

    let passos = ["a", "a", "a", "a"];
</script>

<div class="ajust">
    <ContainerPage>
        <div class="table">
            <div class="info">
                <span class="titulo">titulo</span>

                <div class="passo-passo">
                    {#each passos as passo}
                        <div>{passo}</div>
                    {/each}
                </div>
                <div>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        Solicite atendimento
                    </a>
                </div>
            </div>
            <div class="vovo">
                <img
                    src="https://s3-alpha-sig.figma.com/img/93fd/af30/e5b51b76aa4720af3a2080f892f6303f?Expires=1696809600&Signature=p6DfbxY7cQ7pexkZ8LTxgQG1PMr0flhuoylIj1wVIr2YQv-MCDaAH2OcbknmIZA9SztdOf0HklNUUekRMo03LABZJaWi5xnsfsYorsg-Yfe6PJajfCionHXVHKOnSVcrM2m~es7VJwg6FmNiat4hh9SJsO~kqpNU9TA4t9SAdP~oIlmHLEsZwAtfm0TNltNx-Gbxyw4THoQKJI3a7xSWS3RIf5Jdeq8Wh~PR04ih0LO9hp2EUnMgQuoX7i4eR6nyO3fOTy0VjfljhQjsfIcWyHFGKqrO61IoIkxwhAoVbZLP4ZlDZXzhtjVTb3j-F7Tk24UKD0VD3eatry5BZ-jy8Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                />
            </div>
        </div>
    </ContainerPage>
</div>

<style lang="postcss">
    .table {
        @apply grid grid-cols-1 md:grid-cols-2;
    }
    .info {
        @apply w-full flex flex-col gap-10;
    }
    .titulo {
        @apply text-5xl text-primary-500 max-w-xl font-bold;
    }
    .passo-passo {
        @apply flex flex-col gap-4;
    }
    .vovo {
        @apply w-full;
    }
</style>
