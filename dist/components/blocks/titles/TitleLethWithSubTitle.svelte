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
    margin-top: 24rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem
}
@media (min-width: 768px) {
    .box-title {
        margin-top: 0px
    }
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
        font-size: 2.25rem;
        line-height: 2.5rem
    }
}
    .chamada-subtitle {
    max-width: 42rem;
    text-align: left;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 300
}
</style>
