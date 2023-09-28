<script>import Button from "../../Button.svelte";
import Select from "../../Select.svelte";
import ContainerPage from "../../ContainerPage.svelte";
import Input from "../../Input.svelte";
let formData = {
  nome: "",
  email: "",
  telefone: "",
  servico: "",
  mensagem: ""
};
export let nomeempresa;
export let cargosforselect;
</script>

<div>
    <ContainerPage>
        <div class="form">
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
                <Button color="primary">
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
        </div>
    </ContainerPage>
</div>

<style>
    .form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem
}
    .forma-contato {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 0.5rem
}
    @media (min-width: 768px) {
    .forma-contato {
        grid-template-columns: repeat(2, minmax(0, 1fr))
    }
}
    .checkbox-container {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem
}

    .checkbox-span {
    font-size: 0.75rem;
    line-height: 1rem
}
    .btn-content {
    display: flex;
    flex-direction: row;
    align-items: center
}
    .button-form {
    display: flex;
    max-width: -moz-max-content;
    max-width: max-content
}
</style>
