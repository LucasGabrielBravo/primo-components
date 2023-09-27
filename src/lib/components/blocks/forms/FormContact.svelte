<script lang="ts">
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

    export let cargosForSelect: ICargosSelect[];
</script>

<div>
    <ContainerPage>
        <div class="form">
            <Input
                color="primary"
                border="borderBottom"
                label="Nome Completo"
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
                options={cargosForSelect}
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
        </div>
    </ContainerPage>
</div>

<style lang="postcss">
    .form {
        @apply flex flex-col gap-2 my-2;
    }
    .forma-contato {
        @apply grid grid-cols-1 md:grid-cols-2 gap-2;
    }
    .checkbox-container {
        @apply flex flex-row gap-2;
    }

    .checkbox-span {
        @apply text-xs;
    }
</style>
