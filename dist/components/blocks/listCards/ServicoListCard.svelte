<script>import Button from "../../Button.svelte";
import ContainerPage from "../../ContainerPage.svelte";
export let titulo;
export let paragrafo;
export let listservicos;
</script>

<div class="ajust">
    <ContainerPage>
        <div class="conteudo">
            <span class="titulo">{titulo}</span>
            <span class="paragrafo">{paragrafo}</span>
            <div class="table">
                {#each listservicos as servico}
                    <div class="servico-card">
                        <img
                            src={servico.image.url}
                            alt={servico.image.alt}
                            class="image-servico"
                        />

                        <div class="servico-card-text-balao">
                            <span class="text-balao">{servico.servico}</span>
                        </div>
                    </div>
                {/each}
            </div>
            <Button color="secondary" size="lg" href="/">
                <!-- {@html botao1.label} -->
                Conheça os serviços
            </Button>
        </div>
    </ContainerPage>
</div>

<style>
    .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem
}
    .table {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    align-items: center;
    justify-content: center;
    gap: 0.5rem
}
    @media (min-width: 768px) {
    .table {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
    @media (min-width: 1024px) {
    .table {
        grid-template-columns: repeat(4, minmax(0, 1fr))
    }
}
    .titulo {
    font-size: 3rem;
    line-height: 1;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
    .paragrafo {
    max-width: 56rem;
    text-align: center;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-700, 113 122 127) / var(--tw-text-opacity))
}
    .servico-card {
    position: relative;
    height: 24rem;
    overflow: hidden;
    border-radius: 0.125rem;
    --tw-drop-shadow: drop-shadow(0 1px 1px rgb(0 0 0 / 0.05));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
    .image-servico {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover
}
    .servico-card-text-balao {
    position: absolute;
    bottom: 0.5rem;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center
}
    .text-balao {
    width: 100%;
    max-width: 90%;
    background-color: rgb(var(--color-surface-50, 250 250 250) / 0.8);
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    text-align: center;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
    .ajust {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem
}
</style>
