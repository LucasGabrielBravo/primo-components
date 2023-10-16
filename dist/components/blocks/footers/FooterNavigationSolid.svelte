<script>import ContainerPage from "../../ContainerPage.svelte";
export let logo;
export let links;
export let redessocias;
export let textodireitos;
export let politica;
const data = /* @__PURE__ */ new Date();
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

<style>
    .fundo {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-bg-opacity));
    padding-top: 1.5rem;
    padding-bottom: 1.5rem
}
    .conteudo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem
}
    .links {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
    padding: 1rem
}
    @media (min-width: 768px) {
    .links {
        flex-direction: row
    }
}
    .link {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity));
    text-decoration-line: none;
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
    .link:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
    .logo {
    max-width: 106px
}
    .redes-socias {
    display: flex;
    flex-direction: row;
    gap: 1rem
}
    .rede-social {
    height: 1.75rem;
    width: 1.75rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
    .rede-social:hover {
    --tw-scale-x: 1.05;
    --tw-scale-y: 1.05;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}
    .rede-social-logo {
    height: 100%;
    width: 100%;
    -o-object-fit: contain;
       object-fit: contain
}
    .copyright {
    text-align: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
    .politica {
    display: flex;
    width: 100%;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
    font-size: 0.75rem;
    line-height: 1rem;
    color: rgb(var(--color-surface-50, 250 250 250) / 0.8);
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms
}
    .politica:hover {
    color: rgb(var(--color-surface-50, 250 250 250) / 0.8)
}
</style>
