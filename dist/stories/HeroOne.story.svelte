<script>import HeroOne from "../components/blocks/heros/HeroOne.svelte";
export let Hst;
let titulo = "Preserve as lembran\xE7as felizes com Amor e cuidado";
let paragrafo = "Somos uma rede de cuidadores de excel\xEAncia especializados em atenca\xE7\xE3o domiciliar e hospitalar do Rio de Janeiro.";
let botao1 = {
  label: "Pedir or\xE7amento",
  url: "/"
};
let botao2 = {
  label: "Conhecer servi\xE7os",
  url: "/"
};
let diferenciais = [
  {
    titulo: "Assitencia",
    descricao: "teste",
    icon: {
      alt: "Teste",
      url: "https://www.climego.com.br/images/imagem-telefonista.png"
    }
  },
  {
    titulo: "Cuidadores Treinados",
    descricao: "teste",
    icon: {
      alt: "Teste",
      url: "https://www.climego.com.br/images/imagem-telefonista.png"
    }
  },
  {
    titulo: "Plano de cuidado individualizado",
    descricao: "teste",
    icon: {
      alt: "Teste",
      url: "https://www.climego.com.br/images/imagem-telefonista.png"
    }
  }
];
let backgroundimage = {
  alt: "bgImage",
  url: "https://pbahuevfmdmrbsapdggm.supabase.co/storage/v1/object/public/images/c4c2b75b-4667-45e0-861f-a0225cd8986c/1696517319675Inicio%20(6).jpg"
};
</script>

<Hst.Story title="HeroOne">
    <HeroOne
        {botao1}
        {botao2}
        {titulo}
        {paragrafo}
        {diferenciais}
        {backgroundimage}
    />

    <svelte:fragment slot="controls" />
</Hst.Story>
