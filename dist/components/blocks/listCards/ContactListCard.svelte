<script>import ContainerPage from "../../ContainerPage.svelte";
import { cva } from "class-variance-authority";
import { onMount } from "svelte";
import { setupAnimations } from "../../../utils/setupAnimation";
const fundo = cva([], {
  variants: {
    color: {
      default: "",
      primary: "primary",
      secondary: "secondary",
      tertiary: "tertiary"
    }
  },
  compoundVariants: [],
  defaultVariants: {
    color: "default"
  }
});
export let titulo;
export let color = void 0;
export let botao;
export let passos;
export let image;
onMount(() => {
  setupAnimations();
});
</script>

<div
  class={`fundo ${fundo({
    color,
  })}`}
>
  <ContainerPage>
    <div class="table">
      <div class="info">
        <span class="titulo" id="to-right">{titulo}</span>

        <div class="passo-passo">
          {#each passos as passo}
            <div class="pipe" id="to-left" />
            <div class="item" id="to-right">
              <div class="item-image-box">
                <img
                  src={passo.img.url}
                  alt={passo.img.alt}
                  class="item-image"
                />
              </div>
              <span class="item-descricao">
                {passo.descricao}
              </span>
            </div>
          {/each}
        </div>
        <div>
          <a
            class="btn-solicite"
            href={botao.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="text-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <g clip-path="url(#clip0_372_144)">
                  <path
                    d="M29.3576 22.4374C29.2816 22.401 26.4384 21.0009 25.9332 20.8191C25.7269 20.745 25.506 20.6727 25.271 20.6727C24.887 20.6727 24.5645 20.864 24.3133 21.2398C24.0293 21.662 23.1695 22.667 22.9039 22.9672C22.8692 23.0068 22.8218 23.0542 22.7934 23.0542C22.768 23.0542 22.328 22.873 22.1948 22.8151C19.1448 21.4903 16.8297 18.3043 16.5123 17.767C16.467 17.6898 16.4651 17.6547 16.4647 17.6547C16.4758 17.6138 16.5784 17.511 16.6313 17.458C16.7862 17.3047 16.954 17.1028 17.1163 16.9074C17.1931 16.8148 17.2701 16.7222 17.3457 16.6348C17.5812 16.3608 17.6861 16.148 17.8076 15.9016L17.8713 15.7736C18.1681 15.1839 17.9146 14.6863 17.8327 14.5256C17.7655 14.3911 16.565 11.4937 16.4373 11.1893C16.1304 10.4548 15.7248 10.1128 15.1612 10.1128C15.1089 10.1128 15.1612 10.1128 14.9419 10.122C14.6749 10.1333 13.2206 10.3248 12.5776 10.7301C11.8957 11.16 10.7422 12.5303 10.7422 14.9402C10.7422 17.1091 12.1186 19.157 12.7095 19.9359C12.7242 19.9555 12.7512 19.9954 12.7903 20.0526C15.0535 23.3577 17.8748 25.8071 20.7348 26.9496C23.4882 28.0495 24.7921 28.1766 25.5333 28.1766H25.5334C25.8449 28.1766 26.0943 28.1522 26.3142 28.1305L26.4537 28.1172C27.4049 28.0329 29.4952 26.9498 29.9707 25.6285C30.3453 24.5877 30.444 23.4507 30.1948 23.038C30.0241 22.7574 29.73 22.6162 29.3576 22.4374Z"
                    fill="white"
                  />
                  <path
                    d="M20.3462 0.0273438C9.78374 0.0273438 1.19057 8.55593 1.19057 19.039C1.19057 22.4296 2.09796 25.7485 3.81687 28.6532L0.526815 38.3583C0.465529 38.5392 0.511113 38.7393 0.644954 38.8755C0.741568 38.9742 0.872623 39.0273 1.00646 39.0273C1.05775 39.0273 1.10941 39.0196 1.1598 39.0035L11.2795 35.7878C14.0488 37.2674 17.1787 38.0484 20.3463 38.0484C30.9077 38.0485 39.5 29.5208 39.5 19.039C39.5 8.55593 30.9077 0.0273438 20.3462 0.0273438ZM20.3462 34.0883C17.3656 34.0883 14.4787 33.2276 11.9971 31.5992C11.9137 31.5444 11.8168 31.5163 11.7193 31.5163C11.6678 31.5163 11.6161 31.5241 11.5658 31.5401L6.49647 33.1515L8.13295 28.3235C8.18588 28.1672 8.15942 27.9949 8.06192 27.8617C6.17219 25.2796 5.17326 22.2289 5.17326 19.039C5.17326 10.7397 11.9798 3.98762 20.346 3.98762C28.7113 3.98762 35.517 10.7397 35.517 19.039C35.5172 27.3372 28.7115 34.0883 20.3462 34.0883Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_372_144">
                    <rect
                      width="39px"
                      height="39px"
                      fill="white"
                      transform="translate(0.5 0.0273438)"
                    />
                  </clipPath>
                </defs>
              </svg>
              {botao.label}
            </span>
          </a>
        </div>
      </div>
      <div class="image-rigth-box" id="to-left">
        <img class="img" src={image.url} alt={image.alt} />
      </div>
    </div>
  </ContainerPage>
</div>

<style>
  .fundo {
    background-color: transparent;
    padding-top: 1rem;
    padding-bottom: 1rem
}
  .table {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.5rem
}
  @media (min-width: 768px) {
    .table {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
  .info {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2.5rem
}
  .titulo {
    max-width: 36rem;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
    --tw-text-opacity: 1;
    color: rgb(var(--color-primary-500, 59 130 246) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {
    .titulo {
        font-size: 1.875rem;
        line-height: 2.25rem
    }
}
  .passo-passo {
    display: flex;
    max-width: 28rem;
    flex-direction: column;
    gap: 1rem
}
  .item {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem
}
  .pipe {
    margin-top: -0.5rem;
    margin-bottom: -0.5rem;
    margin-left: 1rem;
    height: 18px;
    width: 2px;
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-surface-300, 214 218 220) / var(--tw-bg-opacity))
}
  .pipe:first-child {
    display: none
}
  .item-image-box {
    display: flex;
    aspect-ratio: 1 / 1;
    width: 8.333333%;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-radius: 9999px
}
  .item-image {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
       object-fit: cover
}
  .item-descricao {
    display: flex;
    width: 91.666667%;
    font-size: 1.125rem;
    line-height: 1.75rem;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-700, 113 122 127) / var(--tw-text-opacity))
}
  .image-rigth-box {
    width: 100%;
    overflow: hidden;
    padding: 2rem
}
  .img {
    height: 100%;
    width: 100%;
    border-radius: 0.375rem;
    -o-object-fit: cover;
       object-fit: cover;
    --tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));
    filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)
}
  .btn-solicite {
    display: flex;
    width: 100%;
    max-width: 24rem;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    --tw-bg-opacity: 1;
    background-color: rgb(7 194 26 / var(--tw-bg-opacity));
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
  .text-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem
}
  .fundo.primary {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-primary-50, 239 246 255) / var(--tw-bg-opacity))
}
  .fundo.secondary {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--color-secondary-50, 254 235 243) / var(--tw-bg-opacity))
}
  .fundo.default {
    overflow: hidden;
    background-color: transparent
}
</style>
