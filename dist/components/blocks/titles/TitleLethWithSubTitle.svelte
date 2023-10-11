<script>import ContainerPage from "../../ContainerPage.svelte";
export let titulo;
export let subtitulo;
</script>

<ContainerPage>
    <div class="box-title">
        <span class="chamada-title">
            {titulo}
        </span>
        <span class="chamada-subtitle">{subtitulo}</span>
    </div>
</ContainerPage>

<style>
    .box-title {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem
}
    .chamada-title {
    max-width: 72rem;
    padding-right: 1.5rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
    @media (min-width: 768px) {
    .chamada-title {
        font-size: 1.875rem;
        line-height: 2.25rem
    }
}
    .chamada-subtitle {
    max-width: 42rem;
    text-align: left;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 300
}
    @media (min-width: 768px) {
    .chamada-subtitle {
        font-size: 1.125rem;
        line-height: 1.75rem
    }
}
</style>
