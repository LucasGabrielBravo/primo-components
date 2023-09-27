<script>import Button from "../../Button.svelte";
import ContainerPage from "../../ContainerPage.svelte";
export let titulo;
export let paragrafos;
export let botao1;
export let backgroundimage;
</script>

<div class="box">
    <img
        class="img-fundo"
        data-key="backgroundimage"
        src={backgroundimage.url}
        alt={backgroundimage.alt}
    />

    <div class="conteudo">
        <ContainerPage>
            <div class="conteudo-text">
                <div class="chamada">
                    <div class="box-chamada-text">
                        <span class="chamada-title" data-key="titulo">
                            {@html titulo}
                        </span>
                        <div class="chamada-text">
                            {#each paragrafos as paragrafo, i}
                                <span data-key="paragrafos[{i}].paragrafo">
                                    {@html paragrafo.text}
                                </span>
                            {/each}
                        </div>
                        <div class="chamada-botoes" data-key="botao1">
                            <Button
                                color="secondary"
                                size="lg"
                                variant="ringed"
                                href={botao1.url}
                            >
                                {@html botao1.label}
                            </Button>
                        </div>
                    </div>
                    <span class="aria-vazia" />
                </div>
            </div>
        </ContainerPage>
    </div>
</div>

<style>
    .box {
    position: relative;
    min-height: -moz-max-content;
    min-height: max-content;
    width: 100%;
    align-items: center
}
    .img-fundo {
    position: absolute;
    inset: 0px;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover;
    -o-object-position: left;
       object-position: left
}
    .conteudo {
    position: relative;
    display: flex;
    height: 100%
}
    .conteudo-text {
    display: flex;
    height: 100%;
    flex-direction: column
}
    .chamada {
    margin-top: auto;
    margin-bottom: auto;
    display: flex
}
    .box-chamada-text {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 3rem
}
    @media (min-width: 768px) {
    .box-chamada-text {
        margin-top: 0px;
        margin-bottom: 0px
    }
}
    .chamada-title {
    max-width: 24rem;
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
    .chamada-text {
    display: flex;
    max-width: 24rem;
    flex-direction: column;
    gap: 1rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
    @media (min-width: 768px) {
    .chamada-text {
        font-size: 1.125rem;
        line-height: 1.75rem
    }
}
    .chamada-botoes {
    display: flex;
    flex-direction: column;
    gap: 0.5rem
}
    @media (min-width: 768px) {
    .chamada-botoes {
        flex-direction: row
    }
}
    .aria-vazia {
    display: none;
    width: 100%
}
    @media (min-width: 768px) {
    .aria-vazia {
        display: flex
    }
}
</style>
