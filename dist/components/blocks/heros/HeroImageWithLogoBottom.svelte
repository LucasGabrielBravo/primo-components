<script>import ContainerPage from "../../ContainerPage.svelte";
export let backgroundimage;
export let logo;
</script>

<div class="box">
    <img
        class="img-fundo"
        data-key="backgroundimage"
        src={backgroundimage.url}
        alt={backgroundimage.alt}
    />
    <div class="pelicula" />

    <div class="conteudo">
        <ContainerPage>
            <div class="logo-box">
                <img class="logo" src={logo.url} alt={logo.alt} />
            </div>
        </ContainerPage>
    </div>
</div>

<style>
    .box {
        position: relative;
        height: 50vh;
        align-items: center
}
    .img-fundo {
        position: absolute;
        inset: 0px;
        height: 100%;
        width: 100%;
        -o-object-fit: cover;
           object-fit: cover;
        -o-object-position: center;
           object-position: center
}
    .conteudo {
        position: relative;
        display: flex;
        height: 100%
}
    .logo-box {
        display: flex;
        height: 100%;
        width: 100%;
        align-items: flex-end;
        justify-content: flex-start
}
    .logo {
        margin-bottom: 3.5rem;
        height: auto;
        width: 70%
}
    @media (min-width: 640px) {
        .logo {
                width: 50%
        }
}
    @media (min-width: 768px) {
        .logo {
                width: 20%
        }
}
    .pelicula {
        position: absolute;
        display: flex;
        height: 100%;
        width: 100%;
        background-image: linear-gradient(#fff, transparent)
}
</style>
