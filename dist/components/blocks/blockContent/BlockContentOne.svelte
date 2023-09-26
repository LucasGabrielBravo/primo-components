<script>import Button from "../../Button.svelte";
import ContainerPage from "../../ContainerPage.svelte";
import Check from "../../icons/Check.svelte";
export let listCuidados;
export let titulo;
export let paragrafo;
export let imageGrande;
export let imagePequena;
export let botao1;
</script>

<div class="ajust">
    <ContainerPage>
        <div class="table">
            <div class="conteudo-text">
                <div class="box-chamada-text">
                    <span class="chamada-title" data-key="titulo">
                        {@html titulo}
                    </span>
                    <span class="chamda-text" data-key="paragrafo">
                        {@html paragrafo}
                    </span>

                    <div class="cuidados">
                        {#each listCuidados as cuidado, i}
                            <span
                                class="cuidado-texto"
                                data-key="listcuidados[{i}].cuidado"
                            >
                                <span class="cuidado-icon">
                                    <Check />
                                </span>
                                {cuidado.cuidado}
                            </span>
                        {/each}
                    </div>

                    <div class="chamada-botoes" data-key="botao1">
                        <Button color="secondary" size="lg" href={botao1.url}>
                            {@html botao1.label}
                        </Button>
                    </div>
                </div>
            </div>
            <div class="box-images">
                <div class="image-grande">
                    <div class="circle" />
                    <div class="svg">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 138 250"
                            fill="none"
                        >
                            <path
                                d="M91.4285 1.11949C92.666 0.376852 94.2076 0.358479 95.4625 1.07141L135.3 23.7039C138.186 25.3435 137.935 29.5821 134.875 30.869L115.104 39.1844C113.816 39.7261 112.339 39.5564 111.207 38.7365L100.128 30.7104C98.8568 29.7899 97.1652 29.6974 95.8016 30.4738L35.4634 64.8323C34.0484 65.6381 33.263 67.2213 33.4776 68.8355L56.96 245.446C57.3426 248.323 54.6297 250.637 51.8489 249.805L28.2913 242.761C26.7907 242.312 25.6901 241.028 25.4752 239.477L0.415184 58.5718C0.195214 56.9839 0.944544 55.418 2.31914 54.5931L91.4285 1.11949Z"
                                fill="#D9D9D9"
                            />
                        </svg>
                    </div>
                    <div class="box-image-grande">
                        <div class="box-position-image-grande">
                            <div class="bg-solid" />
                            <img
                                class="imagem"
                                src={imageGrande.url}
                                alt={imageGrande.alt}
                            />
                        </div>
                    </div>
                </div>
                <div class="image-pequena">
                    <div class="circle" />
                    <div class="svg-pequeno">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 138 250"
                            fill="none"
                        >
                            <path
                                d="M91.4285 1.11949C92.666 0.376852 94.2076 0.358479 95.4625 1.07141L135.3 23.7039C138.186 25.3435 137.935 29.5821 134.875 30.869L115.104 39.1844C113.816 39.7261 112.339 39.5564 111.207 38.7365L100.128 30.7104C98.8568 29.7899 97.1652 29.6974 95.8016 30.4738L35.4634 64.8323C34.0484 65.6381 33.263 67.2213 33.4776 68.8355L56.96 245.446C57.3426 248.323 54.6297 250.637 51.8489 249.805L28.2913 242.761C26.7907 242.312 25.6901 241.028 25.4752 239.477L0.415184 58.5718C0.195214 56.9839 0.944544 55.418 2.31914 54.5931L91.4285 1.11949Z"
                                fill="#D9D9D9"
                            />
                        </svg>
                    </div>
                    <div class="box-image-grande">
                        <div class="box-position-image-pequena">
                            <div class="bg-solid-pequena" />
                            <img
                                class="imagem"
                                src={imagePequena.url}
                                alt={imagePequena.alt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ContainerPage>
</div>

<style>
    .ajust {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem
}
    .table {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr))
}
    @media (min-width: 768px) {
    .table {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
    .conteudo-text {
    display: flex;
    height: 100%;
    flex-direction: column
}
    .box-chamada-text {
    margin-top: 24rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2rem
}
    @media (min-width: 768px) {
    .box-chamada-text {
        margin-top: 0px
    }
}
    .chamada-title {
    max-width: 24rem;
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
    .chamda-text {
    max-width: 24rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
    @media (min-width: 768px) {
    .chamda-text {
        font-size: 1.125rem;
        line-height: 1.75rem
    }
}
    .cuidados {
    display: flex;
    flex-direction: column;
    gap: 0.5rem
}
    .cuidado-icon {
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
    .cuidado-texto {
    display: flex;
    align-items: center;
    gap: 0.25rem
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
    .box-images {
    display: grid;
    height: 600px;
    width: 100%;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    align-items: center
}
    @media (min-width: 640px) {
    .box-images {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
    @media (min-width: 768px) {
    .box-images {
        height: 100%
    }
}
    .image-grande {
    position: relative;
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem
}
    .circle {
    position: absolute;
    aspect-ratio: 1 / 1;
    width: 15%;
    border-radius: 9999px;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-bg-opacity))
}
    .svg {
    position: absolute;
    left: 20%;
    top: 10%;
    height: 40%;
    width: 30%
}
    .bg-solid {
    position: absolute;
    left: 25%;
    height: 120%;
    width: 50%;
    border-radius: 0.125rem;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-bg-opacity))
}
    @media (min-width: 768px) {
    .bg-solid {
        left: 25%;
        height: 110%
    }
}
    .box-image-grande {
    position: absolute;
    top: 10%;
    display: flex;
    height: 90%;
    width: 90%;
    justify-content: center
}
    @media (min-width: 768px) {
    .box-image-grande {
        height: 80%
    }
}
    .box-position-image-grande {
    position: relative;
    top: 10%;
    display: flex;
    height: 90%;
    width: 100%;
    align-items: center
}
    .imagem {
    position: absolute;
    right: -15%;
    height: 100%;
    border-radius: 0.125rem;
    -o-object-fit: cover;
       object-fit: cover;
    -o-object-position: center;
       object-position: center
}
    @media (min-width: 768px) {
    .imagem {
        right: -30%
    }
}
    .image-pequena {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    height: 60%;
    width: 60%;
    flex-direction: column;
    overflow: hidden;
    padding: 1rem
}
    .box-position-image-pequena {
    position: relative;
    top: 15%;
    display: flex;
    height: 90%;
    width: 100%;
    align-items: center
}
    @media (min-width: 768px) {
    .box-position-image-pequena {
        top: 10%
    }
}
    .bg-solid-pequena {
    position: absolute;
    left: 20%;
    height: 110%;
    width: 50%;
    border-radius: 0.125rem;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-bg-opacity))
}
    .svg-pequeno {
    position: absolute;
    left: 20%;
    top: 15%;
    height: 40%;
    width: 30%
}
    @media (min-width: 768px) {
    .svg-pequeno {
        top: 11%
    }
}
</style>
