<script>import { onMount } from "svelte";
export let id = "";
export let images = [];
export let hiddenArrows = false;
export let autoPlay = false;
export let interval = 5e3;
let carousel;
function goTo(slideId) {
  const target = carousel.querySelector("#" + slideId);
  const left = target.offsetLeft;
  carousel.scrollTo({ left });
  currentSlide = slides.find((s) => s.id === slideId);
}
function getSlides(images2) {
  const slides2 = [];
  images2.forEach((img, i) => {
    const nextId = i + 1 !== images2.length ? `slide-${i + 1}` : `slide-0`;
    const prevId = i - 1 !== -1 ? `slide-${i - 1}` : `slide-${images2.length - 1}`;
    slides2.push({
      id: `slide-${i}`,
      src: img,
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
  slides = getSlides(images);
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
      <img alt={slide.id} src={slide.src} />

      {#if !hiddenArrows}
        <div>
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

    opacity: 0.3
}

  .div > div > div > button:hover {

    opacity: 0.9
}
</style>
