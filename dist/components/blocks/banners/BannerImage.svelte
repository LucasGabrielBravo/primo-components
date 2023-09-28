<script>import ContainerPage from "../../ContainerPage.svelte";
export let image;
</script>

<div class="ajust">
    <ContainerPage>
        <div class="box-image">
            <img src={image.url} alt={image.alt} class="image" />
        </div>
    </ContainerPage>
</div>

<style>
    .ajust {
    padding-top: 2rem;
    padding-bottom: 2rem
}
    .box-image {
    display: flex;
    height: 60vh;
    width: 100%;
    overflow: hidden;
    border-radius: 0.5rem;
    --tw-bg-opacity: 1;
    background-color: rgb(239 68 68 / var(--tw-bg-opacity));
    --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
    @media (min-width: 768px) {
    .box-image {
        height: 40vh
    }
}
    .image {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover;
    -o-object-position: center;
       object-position: center
}
</style>
