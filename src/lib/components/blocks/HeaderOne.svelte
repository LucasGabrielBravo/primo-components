<script lang="ts">
    import ContainerPage from "../ContainerPage.svelte";
</script>

<div class="fundo">
    <ContainerPage>
        <div class="table">
            <div class="menu">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 36 24"
                    fill="none"
                >
                    <path
                        d="M1.5 24C1.075 24 0.71875 23.8554 0.43125 23.5663C0.14375 23.2771 0 22.9187 0 22.4913C0 22.0638 0.14375 21.7083 0.43125 21.425C0.71875 21.1417 1.075 21 1.5 21H34.5C34.925 21 35.2812 21.1446 35.5688 21.4338C35.8563 21.7229 36 22.0813 36 22.5087C36 22.9363 35.8563 23.2917 35.5688 23.575C35.2812 23.8583 34.925 24 34.5 24H1.5ZM1.5 13.5C1.075 13.5 0.71875 13.3554 0.43125 13.0663C0.14375 12.7771 0 12.4187 0 11.9913C0 11.5638 0.14375 11.2083 0.43125 10.925C0.71875 10.6417 1.075 10.5 1.5 10.5H34.5C34.925 10.5 35.2812 10.6446 35.5688 10.9337C35.8563 11.2229 36 11.5813 36 12.0087C36 12.4362 35.8563 12.7917 35.5688 13.075C35.2812 13.3583 34.925 13.5 34.5 13.5H1.5ZM1.5 3C1.075 3 0.71875 2.85542 0.43125 2.56625C0.14375 2.27705 0 1.91872 0 1.49125C0 1.06375 0.14375 0.708333 0.43125 0.425C0.71875 0.141667 1.075 0 1.5 0H34.5C34.925 0 35.2812 0.144583 35.5688 0.433749C35.8563 0.722949 36 1.08128 36 1.50875C36 1.93625 35.8563 2.29167 35.5688 2.575C35.2812 2.85833 34.925 3 34.5 3H1.5Z"
                        fill="#122160"
                    />
                </svg>
                <span>Menu</span>
            </div>

            <div class="logo">Logo</div>

            <div class="contato">
                <div class="flex">
                    <div>Telefone</div>
                    <div>Pedir orçamento</div>
                </div>
            </div>
        </div>
    </ContainerPage>
</div>

<style lang="postcss">
    .fundo {
        @apply flex bg-slate-100 py-2 justify-center;
    }
    .table {
        @apply flex w-full;
    }
    .menu {
        @apply flex flex-row items-center  w-full text-sm font-medium gap-1;
    }
    .logo {
        @apply flex justify-center items-center;
    }
    .contato {
        @apply flex w-full items-center justify-end px-2;
    }
</style>
