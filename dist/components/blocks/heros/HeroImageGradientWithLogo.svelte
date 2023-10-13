<script>import ContainerPage from "../../ContainerPage.svelte";
import { onMount } from "svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
export let backgroundimage;
export let logo;
onMount(() => {
  setupAnimations();
});
</script>

<div class="box">
  <div class="pelicula-white" />
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
        <img class="logo" src={logo.url} alt={logo.alt} id="from-bot" />
      </div>
    </ContainerPage>
  </div>
</div>

<style>
  .box {
    position: relative;
    height: 50vh;
    align-items: center;
}
@media (min-width: 768px) {
    .box {
        height: 65vh;
    }
}
  .img-fundo {
    position: absolute;
    inset: 0px;
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover;
    -o-object-position: center;
       object-position: center;
}
  @media (min-width: 1024px) {
    .img-fundo {
        -o-object-position: top;
           object-position: top;
    }
}
  .img-fundo {
    -webkit-mask-image: linear-gradient(to top, transparent 20%, #000 100%);
  }
  .conteudo {
    position: relative;
    display: flex;
    height: 100%;
}
  .logo-box {
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
}
  .logo {
    height: auto;
    width: 70%;
    --tw-drop-shadow: drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
  @media (min-width: 640px) {
    .logo {
        width: 50%;
    }
}
  @media (min-width: 768px) {
    .logo {
        width: 20%;
    }
}
  .pelicula {
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(rgba(50, 167, 252, 0.2), transparent);
}
  .pelicula-white {
    position: absolute;
    display: flex;
    height: 100%;
    width: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 1), transparent);
}
</style>
