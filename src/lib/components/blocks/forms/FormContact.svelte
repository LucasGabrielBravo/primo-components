<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import Select from "$lib/components/Select.svelte";
    import ContainerPage from "../../ContainerPage.svelte";
    import Input from "../../Input.svelte";

    interface ICargosSelect {
        label: string;
        value: string;
    }

    let formData = {
        nome: "",
        email: "",
        telefone: "",
        servico: "",
        mensagem: "",
    };

    export let nomeempresa: string;

    export let cargosforselect: ICargosSelect[];

    export let handleSubmit:<T>(data:T) => Promise<void>
</script>

<div>
    <ContainerPage>
        <form on:submit|preventDefault={()=> handleSubmit(formData)} class="form">
            <Input
                color="primary"
                border="borderBottom"
                label="NOME COMPLETO"
                required
                type="Text"
                placeholder="Nome Completo"
                bind:value={formData.email}
            />
            <div class="forma-contato">
                <Input
                    color="primary"
                    border="borderBottom"
                    label="E-MAIL"
                    placeholder="seuemail@mail.com"
                    bind:value={formData.email}
                    required
                />
                <Input
                    color="primary"
                    border="borderBottom"
                    label="TELEFONE"
                    required
                    mask="(99) 99999-9999"
                    bind:value={formData.telefone}
                />
            </div>
            <Select
                border="borderBottom"
                label="SERVIÇO DESEJADO"
                placeholder="Selecione"
                options={cargosforselect}
                required
                bind:value={formData.servico}
            />
            <Input
                type="textarea"
                color="primary"
                border="borderBottom"
                label="MENSAGEM"
                placeholder="Digite sua mensagem aqui..."
                required
                bind:value={formData.mensagem}
            />
            <div class="checkbox-container">
                <div>
                    <input type="checkbox" required />
                </div>
                <span class="checkbox-span">
                    Eu aceito os termos de Política de Privacidade e estou
                    ciente que os dados inseridos serão usados para receber
                    informações de produtos e anúncios de marketing da {nomeempresa}.
                </span>
            </div>
            <div class="button-form">
                <Button color="primary" shaddow="shaddow-lg" size="md">
                    <span class="btn-content">
                        Enviar mensagem
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M15.7271 10.0833L18.3891 12.6388M18.3891 12.6388L15.7271 15.1944M18.3891 12.6388H5.61133"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </Button>
            </div>
        </form>
    </ContainerPage>
</div>

<style lang="postcss">
    .form {
        @apply flex flex-col gap-2 py-8;
    }
    .forma-contato {
        @apply grid grid-cols-1 md:grid-cols-2 gap-2;
    }
    .checkbox-container {
        @apply flex flex-row items-center gap-2 my-2;
    }

    .checkbox-span {
        @apply text-xs;
    }
    .btn-content {
        @apply flex flex-row items-center;
    }
    .button-form {
        @apply flex w-full;
    }
</style>
