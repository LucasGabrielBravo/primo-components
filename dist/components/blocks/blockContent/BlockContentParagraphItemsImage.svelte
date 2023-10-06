<script>import ContainerPage from "../../ContainerPage.svelte";
export let titulo;
export let image;
export let paragrafo;
export let titulolista;
export let items;
</script>

<div class="box">
    <ContainerPage>
        <div class="table">
            <div class="box-image">
                <span class="chamada-title">
                    {titulo}
                </span>
                <div class="image-div">
                    <img src={image.url} alt={image.alt} class="image" />
                </div>
            </div>
            <div class="text">
                <span class="paragrafo"> {paragrafo} </span>
                <div class="lista">
                    <ul class="lista-items">
                        <span class="titulo-lista">{titulolista}</span>
                        {#each items as item, i}
                            <li class="">
                                <span class="item-dot">•</span>
                                <span class="item-text">{item.text}</span>
                            </li>
                        {/each}
                    </ul>
                </div>
            </div>
        </div>
    </ContainerPage>
</div>

<style>
    .box {
    padding-top: 2rem;
    padding-bottom: 2rem
}
    .table {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 3rem
}
    @media (min-width: 768px) {
    .table {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 1rem
    }
}
    .box-image {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 1rem
}
    .chamada-title {
    max-width: 56rem;
    border-left-width: 4px;
    --tw-border-opacity: 1;
    border-color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-border-opacity));
    padding-left: 1.5rem;
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
    .image-div {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 3rem;
    display: flex
}
    @media (min-width: 768px) {
    .image-div {
        width: 50%
    }
}
    .image {
    width: 50%
}
    .text {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 0.5rem
}
    .lista {
    display: flex;
    flex-direction: column;
    gap: 0.5rem
}
    .titulo-lista {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600
}
    .lista-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem
}
    .item-dot {
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-text-opacity))
}
    .item-text {
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-900, 77 82 86) / var(--tw-text-opacity))
}
    .paragrafo {
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.75rem
}
</style>
