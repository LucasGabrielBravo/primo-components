<script>import { onMount } from "svelte";
export let logo;
export let depoimentos;
export let id = "";
export let hiddenArrows = false;
export let autoPlay = false;
export let interval = 5e3;
let carousel;
function goTo(slideId) {
  try {
    const target = carousel.querySelector("#" + slideId);
    const left = target.offsetLeft;
    carousel.scrollTo({ left });
    currentSlide = slides.find((s) => s.id === slideId);
  } catch (error) {
  }
}
function getSlides(depoimentos2) {
  const slides2 = [];
  depoimentos2.forEach((dep, i) => {
    const nextId = i + 1 !== depoimentos2.length ? `slide-${i + 1}` : `slide-0`;
    const prevId = i - 1 !== -1 ? `slide-${i - 1}` : `slide-${depoimentos2.length - 1}`;
    slides2.push({
      id: `slide-${i}`,
      logo,
      depoimento: dep,
      nextId,
      prevId
    });
  });
  return slides2;
}
function next() {
  if (currentSlide) {
    goTo(currentSlide.nextId);
  }
}
function prev() {
  if (currentSlide) {
    goTo(currentSlide.prevId);
  }
}
onMount(() => {
  if (id === "") {
    id = "carousel-" + Math.floor(Math.random() * 1e3).toString(36);
  }
});
$:
  slides = getSlides(depoimentos);
$:
  currentSlide = slides[0] || void 0;
$:
  if (currentSlide && autoPlay) {
    setTimeout(next, interval);
  }
</script>

<div bind:this={carousel} {id} class="div">
  {#each slides as slide}
    <div id={slide.id}>
      <div class="conteudo-text">
        <div class="textos">
          <img src={logo.url} alt={logo.alt} class="logo" />

          <span class="titulo-surface">
            {slide.depoimento.titulobranco}
            <span class="titulo-secondary">
              {slide.depoimento.titulosecunday}
            </span>
          </span>
          <div class="estrelinhas">
            {#each [1, 2, 3, 4, 5] as item}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
              >
                <path
                  d="M7.49972 12.2295L3.62472 14.5628C3.51361 14.6323 3.39555 14.6635 3.27055 14.6566C3.14555 14.6496 3.03444 14.6114 2.93722 14.542C2.84 14.4725 2.76708 14.3823 2.71847 14.2712C2.66986 14.16 2.65944 14.035 2.68722 13.8962L3.70805 9.47949L0.291388 6.50033C0.180277 6.4031 0.114304 6.29546 0.093471 6.17741C0.0726376 6.05935 0.0761099 5.94477 0.103888 5.83366C0.131665 5.72255 0.194165 5.6288 0.291388 5.55241C0.38861 5.47602 0.506665 5.43088 0.645554 5.41699L5.16639 5.02116L6.91639 0.854492C6.97194 0.729492 7.05528 0.635742 7.16639 0.573242C7.2775 0.510742 7.38861 0.479492 7.49972 0.479492C7.61083 0.479492 7.72194 0.510742 7.83305 0.573242C7.94416 0.635742 8.0275 0.729492 8.08305 0.854492L9.83305 5.02116L14.3539 5.41699C14.4928 5.43088 14.6108 5.47602 14.7081 5.55241C14.8053 5.6288 14.8678 5.72255 14.8956 5.83366C14.9233 5.94477 14.9268 6.05935 14.906 6.17741C14.8851 6.29546 14.8192 6.4031 14.7081 6.50033L11.2914 9.47949L12.3122 13.8962C12.34 14.035 12.3296 14.16 12.281 14.2712C12.2324 14.3823 12.1594 14.4725 12.0622 14.542C11.965 14.6114 11.8539 14.6496 11.7289 14.6566C11.6039 14.6635 11.4858 14.6323 11.3747 14.5628L7.49972 12.2295Z"
                  fill="#EA9F0E"
                />
              </svg>
            {/each}
          </div>
          <span class="paragrafo"> {slide.depoimento.paragrafo} </span>
          <a href={slide.depoimento.link} class="autor-box">
            <span class="autor">{slide.depoimento.autor}</span>
            <span class="servicoContratado">
              {slide.depoimento.servicocontratado}
            </span>
            <div class="links-para-depoimentos">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                ><path
                  d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 0 0-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z"
                />
              </svg>
              <span>{slide.depoimento.botaotext}</span>
            </div>
          </a>
        </div>
      </div>
      {#if !hiddenArrows}
        <div class="arrows">
          <button on:click={prev}>❮</button>
          <button on:click={next}>❯</button>
        </div>
      {/if}
    </div>
  {/each}
</div>

<style>
  .div {

    display: inline-flex;

    overflow-x: scroll;

    scroll-snap-type: x mandatory;

    scroll-behavior: smooth;

    -ms-overflow-style: none;

    scrollbar-width: none
}

.div::-webkit-scrollbar {

    display: none
}

.div {

    height: 100%;

    width: 100%
}

  .div > div {

    box-sizing: content-box;

    display: flex;

    flex: none;

    scroll-snap-align: start
}

  .carousel-center .div > div {

    scroll-snap-align: center
}

  .carousel-end .div > div {

    scroll-snap-align: end
}

  .div > div {

    position: relative;

    width: 100%
}

  .div > div > img {

    height: 100%;

    width: 100%;

    -o-object-fit: cover;

       object-fit: cover
}

  .div > div > div {

    position: absolute;

    left: 1.25rem;

    right: 1.25rem;

    top: 50%;

    display: flex;

    --tw-translate-y: -50%;

    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

    justify-content: space-between
}

  .div > div > div > button {

    display: inline-flex;

    flex-shrink: 0;

    cursor: pointer;

    -webkit-user-select: none;

       -moz-user-select: none;

            user-select: none;

    flex-wrap: wrap;

    align-items: center;

    justify-content: center;

    border-color: transparent;

    border-color: hsl(var(--b2) / var(--tw-border-opacity));

    text-align: center;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;

    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;

    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);

    transition-duration: 200ms;

    border-radius: var(--rounded-btn, 0.5rem);

    height: 3rem;

    padding-left: 1rem;

    padding-right: 1rem;

    font-size: 0.875rem;

    line-height: 1.25rem;

    line-height: 1em;

    min-height: 3rem;

    gap: 0.5rem;

    font-weight: 600;

    text-decoration-line: none;

    border-width: var(--border-btn, 1px);

    animation: button-pop var(--animation-btn, 0.25s) ease-out;

    text-transform: var(--btn-text-case, uppercase);

    --tw-border-opacity: 1;

    --tw-bg-opacity: 1;

    background-color: hsl(var(--b2) / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: hsl(var(--bc) / var(--tw-text-opacity));

    outline-color: hsl(var(--bc) / 1)
}

  .div > div > div > button[disabled],.div > div > div > button:disabled {

    pointer-events: none
}

  .div > div > div > button {

    height: 3rem;

    width: 3rem;

    border-radius: 9999px;

    padding: 0px
}

  .btn-group > input[type="radio"].div > div > div > button {

    -webkit-appearance: none;

       -moz-appearance: none;

            appearance: none
}

  .btn-group > input[type="radio"].div > div > div > button:before {

    content: attr(data-title)
}

  .div > div > div > button:is(input[type="checkbox"]),.div > div > div > button:is(input[type="radio"]) {

    width: auto;

    -webkit-appearance: none;

       -moz-appearance: none;

            appearance: none
}

  .div > div > div > button:is(input[type="checkbox"]):after,.div > div > div > button:is(input[type="radio"]):after {

    --tw-content: attr(aria-label);

    content: var(--tw-content)
}

  @media (hover: hover) {

    .div > div > div > button:hover {

        --tw-border-opacity: 1;

        border-color: hsl(var(--b3) / var(--tw-border-opacity));

        --tw-bg-opacity: 1;

        background-color: hsl(var(--b3) / var(--tw-bg-opacity))
    }

    .div > div > div > button.glass:hover {

        --glass-opacity: 25%;

        --glass-border-opacity: 15%
    }

    .div > div > div > button[disabled]:hover,.div > div > div > button:disabled:hover {

        --tw-border-opacity: 0;

        background-color: hsl(var(--n) / var(--tw-bg-opacity));

        --tw-bg-opacity: 0.2;

        color: hsl(var(--bc) / var(--tw-text-opacity));

        --tw-text-opacity: 0.2
    }

    .div > div > div > button:is(input[type="checkbox"]:checked):hover,.div > div > div > button:is(input[type="radio"]:checked):hover {

        --tw-border-opacity: 1;

        border-color: hsl(var(--pf) / var(--tw-border-opacity));

        --tw-bg-opacity: 1;

        background-color: hsl(var(--pf) / var(--tw-bg-opacity))
    }
}

  .div > div > div > button:active:hover,.div > div > div > button:active:focus {

    animation: button-pop 0s ease-out;

    transform: scale(var(--btn-focus-scale, 0.97))
}

  .div > div > div > button:focus-visible {

    outline-style: solid;

    outline-width: 2px;

    outline-offset: 2px
}

  .div > div > div > button.glass {

    --tw-shadow: 0 0 #0000;

    --tw-shadow-colored: 0 0 #0000;

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

    outline-color: currentColor
}

  .div > div > div > button.glass.btn-active {

    --glass-opacity: 25%;

    --glass-border-opacity: 15%
}

  .div > div > div > button.btn-disabled,.div > div > div > button[disabled],.div > div > div > button:disabled {

    --tw-border-opacity: 0;

    background-color: hsl(var(--n) / var(--tw-bg-opacity));

    --tw-bg-opacity: 0.2;

    color: hsl(var(--bc) / var(--tw-text-opacity));

    --tw-text-opacity: 0.2
}

  .btn-group > input[type="radio"]:checked.div > div > div > button {

    --tw-border-opacity: 1;

    border-color: hsl(var(--p) / var(--tw-border-opacity));

    --tw-bg-opacity: 1;

    background-color: hsl(var(--p) / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: hsl(var(--pc) / var(--tw-text-opacity))
}

  .btn-group > input[type="radio"]:checked.div > div > div > button:focus-visible {

    outline-style: solid;

    outline-width: 2px;

    outline-color: hsl(var(--p) / 1)
}

  .div > div > div > button:is(input[type="checkbox"]:checked),.div > div > div > button:is(input[type="radio"]:checked) {

    --tw-border-opacity: 1;

    border-color: hsl(var(--p) / var(--tw-border-opacity));

    --tw-bg-opacity: 1;

    background-color: hsl(var(--p) / var(--tw-bg-opacity));

    --tw-text-opacity: 1;

    color: hsl(var(--pc) / var(--tw-text-opacity))
}

  .div > div > div > button:is(input[type="checkbox"]:checked):focus-visible,.div > div > div > button:is(input[type="radio"]:checked):focus-visible {

    outline-color: hsl(var(--p) / 1)
}

  .div > div > div > button:where(.btn-xs) {

    height: 1.5rem;

    width: 1.5rem;

    border-radius: 9999px;

    padding: 0px
}

  .div > div > div > button:where(.btn-sm) {

    height: 2rem;

    width: 2rem;

    border-radius: 9999px;

    padding: 0px
}

  .div > div > div > button:where(.btn-md) {

    height: 3rem;

    width: 3rem;

    border-radius: 9999px;

    padding: 0px
}

  .div > div > div > button:where(.btn-lg) {

    height: 4rem;

    width: 4rem;

    border-radius: 9999px;

    padding: 0px
}

  .btn-group .div > div > div > button:not(:first-child):not(:last-child) {

    border-top-left-radius: 0;

    border-top-right-radius: 0;

    border-bottom-left-radius: 0;

    border-bottom-right-radius: 0
}

  .btn-group .div > div > div > button:first-child:not(:last-child) {

    margin-top: -0px;

    margin-left: -1px;

    border-top-left-radius: var(--rounded-btn, 0.5rem);

    border-top-right-radius: 0;

    border-bottom-left-radius: var(--rounded-btn, 0.5rem);

    border-bottom-right-radius: 0
}

  .btn-group .div > div > div > button:last-child:not(:first-child) {

    border-top-left-radius: 0;

    border-top-right-radius: var(--rounded-btn, 0.5rem);

    border-bottom-left-radius: 0;

    border-bottom-right-radius: var(--rounded-btn, 0.5rem)
}

  .btn-group-horizontal .div > div > div > button:not(:first-child):not(:last-child) {

    border-top-left-radius: 0;

    border-top-right-radius: 0;

    border-bottom-left-radius: 0;

    border-bottom-right-radius: 0
}

  .btn-group-horizontal .div > div > div > button:first-child:not(:last-child) {

    margin-top: -0px;

    margin-left: -1px;

    border-top-left-radius: var(--rounded-btn, 0.5rem);

    border-top-right-radius: 0;

    border-bottom-left-radius: var(--rounded-btn, 0.5rem);

    border-bottom-right-radius: 0
}

  .btn-group-horizontal .div > div > div > button:last-child:not(:first-child) {

    border-top-left-radius: 0;

    border-top-right-radius: var(--rounded-btn, 0.5rem);

    border-bottom-left-radius: 0;

    border-bottom-right-radius: var(--rounded-btn, 0.5rem)
}

  .btn-group-vertical .div > div > div > button:first-child:not(:last-child) {

    margin-top: -1px;

    margin-left: -0px;

    border-top-left-radius: var(--rounded-btn, 0.5rem);

    border-top-right-radius: var(--rounded-btn, 0.5rem);

    border-bottom-left-radius: 0;

    border-bottom-right-radius: 0
}

  .btn-group-vertical .div > div > div > button:last-child:not(:first-child) {

    border-top-left-radius: 0;

    border-top-right-radius: 0;

    border-bottom-left-radius: var(--rounded-btn, 0.5rem);

    border-bottom-right-radius: var(--rounded-btn, 0.5rem)
}

  .div > div > div > button {

    --tw-text-opacity: 1;

    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity));

    opacity: 0.3
}

  .div > div > div > button:hover {

    opacity: 0.9
}

  .conteudo-text {

    display: flex;

    height: 100%;

    width: 100%;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    padding-top: 3rem;

    padding-bottom: 3rem
}
  .textos {

    display: flex;

    height: 100%;

    width: 100%;

    max-width: 28rem;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 2rem
}
  .titulo-surface {

    text-align: center;

    font-size: 1.5rem;

    line-height: 2rem;

    font-weight: 700;

    --tw-text-opacity: 1;

    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {

    .titulo-surface {

        font-size: 1.875rem;

        line-height: 2.25rem
    }
}
  .titulo-secondary {

    --tw-text-opacity: 1;

    color: rgb(var(--color-secondary-500, 246 49 128) / var(--tw-text-opacity))
}
  .paragrafo {

    padding-left: 0.25rem;

    padding-right: 0.25rem;

    text-align: left;

    font-size: 1rem;

    line-height: 1.5rem;

    font-weight: 500;

    --tw-text-opacity: 1;

    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity))
}
  @media (min-width: 768px) {

    .paragrafo {

        font-size: 1.25rem;

        line-height: 1.75rem
    }
}
  .autor-box {

    display: flex;

    width: 100%;

    flex-direction: column;

    gap: 0.5rem;

    border-radius: 0.5rem;

    padding: 0.5rem;

    --tw-text-opacity: 1;

    color: rgb(var(--color-surface-50, 250 250 250) / var(--tw-text-opacity));

    transition-property: all;

    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

    transition-duration: 150ms
}
  .autor-box:hover {

    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);

    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);

    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}
  .autor {

    text-align: left;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 300
}
  .servicoContratado {

    text-align: left;

    font-size: 0.875rem;

    line-height: 1.25rem;

    font-weight: 400
}
  .logo {

    width: 25%
}
  .links-para-depoimentos {

    display: flex;

    align-items: center;

    gap: 0.5rem;

    font-size: 0.75rem;

    line-height: 1rem
}
  .estrelinhas {

    display: flex;

    width: 100%;

    align-items: flex-start;

    justify-content: flex-start;

    gap: 0.5rem;

    text-align: center
}
  .arrows {

    padding-top: 32rem
}
  @media (min-width: 768px) {

    .arrows {

        padding-top: 0px
    }
}
</style>
