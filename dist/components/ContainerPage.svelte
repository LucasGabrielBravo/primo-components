<div class="container-page">
    <slot />
</div>

<style>
    .container-page {
    width: 100%
}
@media (min-width: 640px) {
    .container-page {
        max-width: 640px
    }
}
@media (min-width: 768px) {
    .container-page {
        max-width: 768px
    }
}
@media (min-width: 1024px) {
    .container-page {
        max-width: 1024px
    }
}
@media (min-width: 1280px) {
    .container-page {
        max-width: 1280px
    }
}
@media (min-width: 1536px) {
    .container-page {
        max-width: 1536px
    }
}
.container-page {
    margin-left: auto;
    margin-right: auto;
    max-width: 80rem;
    padding-left: 1rem;
    padding-right: 1rem
}
@media (min-width: 640px) {
    .container-page {
        padding-left: 2rem;
        padding-right: 2rem
    }
}
</style>
